// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract RealEstate {

    // State Variables
    struct Property {
        uint256 productID;
        address owner;
        uint256 price;
        string propertyTitle;
        string category;
        string images;
        string propertyAddress;
        string description;
        address[] reviewrs;
        string[] reviews;
    }

    struct User {
        address walletAddress;
        string document;
        bool status;
    }
    // Mapping 
    address payable contractOwner = payable(0x4F5aAFF81fb285063b3c293da2Be5F2FA9245A00);
    // address payable contractOwner = payable(0x4F5aAFF81fb285063b3c293da2Be5F2FA9245A00);
    uint256 public listingPrice = 0.025 ether;
    mapping(uint256 => Property) private properties;
    uint256 public propertyIndex;

    // Events
    event PropertyListed(uint256 indexed id, address indexed owner, uint256 price);
    event PropertySold(uint256 indexed id, address indexed oldOwner, address indexed newOwner, uint256 price);
    event PropertyResold(uint256 indexed id, address indexed oldOwner, address indexed newOwner, uint256 price);

    // Events for verification and inspection
    event UserVerificationRequested(address indexed user, string document);
    event UserVerified(address indexed user, string document);
    event PropertyVerified(uint256 indexed id, address indexed owner);
    event ContractVerified(uint256 indexed id, address indexed buyer, address indexed seller);

    // Reviews Section
    struct Review {
        address reviewer;
        uint256 productId;
        uint256 rating;
        string comment;
        uint256 likes;
    }

    struct Product {
        uint256 productId;
        uint256 totalRating;
        uint256 numReviews;
    }

    mapping(uint256 => Review[]) private reviews;
    mapping(address => uint256[]) private userReviews;
    mapping(uint256 => Product) private products;

    uint256 public reviewsCounter;

    event ReviewAdded(uint256 indexed productId, address indexed reviewer, uint256 rating, string comment);
    event ReviewLiked(uint256 indexed proudctId, uint256 indexed reviewIndex, address indexed liker, uint256 likes);

    // Roles
    address public propertyInspector = 0x5466eFf6d8F7779e757060eF147c56be39beB1f0;
    address public contractInspector = 0x21051Cfae8C508f31aF3b2A799eC0F4334575Fb6;

    // User Verification
    struct UnverifiedUser {
        address walletAddress;
        bool status;
        bool isReqSend;
        string document;
    }

    mapping(address => UnverifiedUser) private unverifiedUsers; // Users who requested verification
    mapping(address => bool) private verifiedUsers; // Users who are verified
    address[] listOfUsers;
    uint userCount = 0;

    modifier onlyPropertyInspector() {
        require(
            msg.sender == propertyInspector,
            "Only Property Inspector can perform this action"
        );
        _;
    }

    modifier onlyContractInspector() {
        require(
            msg.sender == contractInspector,
            "Only Contract Inspector can perform this action"
        );
        _;
    }

    modifier onlyOwner() {
        require(
            msg.sender == contractOwner,
            "Only the owner of the contract can change the listing price"
        );
        _;
    }

    // check user verified or not
 function getAllUnverifiedUsers() external view returns (UnverifiedUser[] memory) {

    uint unverifiedCount = 0;
    // Count unverified users
    for (uint256 i = 0; i < userCount; i++) {
        address user = listOfUsers[i];
        if (!verifiedUsers[user] && unverifiedUsers[user].status) {
            unverifiedCount++;
        }
    }

    // Create array with the counted size
    UnverifiedUser[] memory unverifiedUsersList = new UnverifiedUser[](unverifiedCount);

    // Populate the array
    uint256 currentIndex = 0;
    for (uint256 i = 0; i < userCount; i++) {
        address user = listOfUsers[i];
        if (!verifiedUsers[user] && unverifiedUsers[user].status) {
            unverifiedUsersList[currentIndex] = unverifiedUsers[user];
            currentIndex++;
        }
    }

    return unverifiedUsersList;
}

    // get all unverified users
    function isUserVerified(address user) external view returns (bool) {
        return verifiedUsers[user];
    }

    // get request send or not
    function isRequestSend(address user) external view returns (bool) {
        return unverifiedUsers[user].isReqSend;
    }
    
    // Function to request user verification and upload documents
    function verificationRequest(string memory document) external {
        require(!verifiedUsers[msg.sender], "User already verified");
        require(!unverifiedUsers[msg.sender].status, "Verification request already sent");

        unverifiedUsers[msg.sender] = UnverifiedUser(msg.sender , true, true, document);
        listOfUsers.push(msg.sender);
        userCount++;
        emit UserVerificationRequested(msg.sender, document);
    }

    // Function to verify user and add to the verified list
    function verifyUser(address user) external onlyPropertyInspector {
        require(unverifiedUsers[user].status, "User has not requested verification");
        verifiedUsers[user] = true;
        emit UserVerified(user, unverifiedUsers[user].document);
        delete unverifiedUsers[user];
    }

    // Function for Property Inspector to verify a property
    function verifyProperty(uint256 id) external onlyPropertyInspector {
        Property storage property = properties[id];
        require(property.owner != address(0), "Property does not exist");
        require(verifiedUsers[property.owner], "Property owner not verified");
        emit PropertyVerified(id, property.owner);
    }

    // Function for Contract Inspector to verify a contract
    function verifyContract(uint256 id, address buyer, address seller) external onlyContractInspector {
        Property storage property = properties[id];
        require(property.owner == seller, "Seller does not own the property");
        require(verifiedUsers[buyer], "Buyer not verified");
        emit ContractVerified(id, buyer, seller);
    }

    // Function to list a property
    function listProperty(
        address owner,
        uint256 price,
        string memory _propertyTitle,
        string memory _category,
        string memory _images,
        string memory _propertyAddress,
        string memory _description
    ) external returns (uint256) {
        require(price > 0, "Price must be greater than 0");
        propertyIndex++;
        uint256 productId = propertyIndex;
        Property storage property = properties[productId];

        property.productID = productId;
        property.owner = owner;
        property.price = price;
        property.propertyTitle = _propertyTitle;
        property.category = _category;
        property.images = _images;
        property.propertyAddress = _propertyAddress;
        property.description = _description;

        emit PropertyListed(productId, owner, price);
        return productId;
    }

    function updateProperty(address owner , uint256 productId , string memory _propertyTitle , string memory _category , string memory _images , string memory _propertyAddress , string memory _description) external returns (uint256){
        Property storage property = properties[productId];

        require(property.owner == owner , "You are not the owner");

        property.propertyTitle = _propertyTitle;
        property.category = _category;
        property.images = _images;
        property.propertyAddress = _propertyAddress;
        property.description = _description;

        return productId;
    }

    

    function updatePrice(address owner , uint256 productId , uint256 price) external returns(string memory){
        Property storage property = properties[productId];
        require(property.owner == owner , "You are not the owner");

        property.price = price;

        return "Your property price is updated";
    }

    // by defining function as paypal we are making that function capable of accepting ether
    function buyProperty(uint256 id , address buyer) external payable{
        // msg.value is the amount send with function call , of function caller ie. buyer
        uint256 amount = msg.value;

        require(amount >= properties[id].price , "Insufficient Balance");

        Property storage property = properties[id];

        // by using using payable we are making property.owner address capable of recieving ether
        (bool sent,) = payable(property.owner).call{value : amount}("");

        if(sent) {
            property.owner = buyer;
            emit PropertySold(id , property.owner , buyer , amount);
        }
    }

    function getAllProperties() public view returns(Property[] memory) {
        uint256 itemCount = propertyIndex;
        uint256 currentIndex = 0;

        Property[] memory items = new Property[](itemCount);
        for(uint256 i=0; i<itemCount; i++){
            uint256 currentId = i+1;

            Property storage currentItem = properties[currentId];
            items[currentIndex] = currentItem;
            currentIndex += 1;
        }
        return items;
    }

    function getProperty(uint256 id) external view returns (
        uint256 ,
        address ,
        uint256,
        string memory,
        string memory,
        string memory,
        string memory,
        string memory,
        address[] memory,
        string[] memory) {
        Property memory property = properties[id];
        
        return ( 
        property.productID,
        property.owner,
        property.price,
        property.propertyTitle,
        property.category,
        property.images,
        property.propertyAddress,
        property.description,
        property.reviewrs,
        property.reviews );
    }

    function getUserProperties(address user) external view returns(Property[] memory){
        uint256 totlaItemCount = propertyIndex;
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for(uint256 i=0; i<totlaItemCount; i++){
            if(properties[i+1].owner == user){
                itemCount++;
            }
        }

        Property[] memory items = new Property[](itemCount);
        for(uint256 i=0; i<totlaItemCount; i++){
            if(properties[i+1].owner == user){
                uint256 currentId = i+1;
                Property storage currentItem = properties[currentId];
                items[currentIndex++] = currentItem;
            }
        }
        return items;
    }


    // reviews function

    function addReview(uint256 productId , uint256 rating , string calldata comment , address user) external {
        require(rating >=1 && rating <=5 , "rating must be between 1 and 5");

        Property storage property = properties[productId];
        property.reviewrs.push(user);
        property.reviews.push(comment);

        // reviewsection
        reviews[productId].push(Review(user , productId , rating , comment , 0));
        userReviews[user].push(productId);
        products[productId].totalRating += rating;
        products[productId].numReviews++;

        emit ReviewAdded(productId, user, rating, comment);
        reviewsCounter++;
    }

    function getProductReviews(uint256 productId) external view returns(Review[] memory){
        return reviews[productId];
    }

    function getUserReviews(address user) external view returns (Review[] memory){
        uint256 totalReviews = userReviews[user].length;

        Review[] memory userProductReviews = new Review[](totalReviews);

        for(uint256 i=0; i<userReviews[user].length; i++){
            uint256 productId = userReviews[user][i];
            Review[] memory productReviews = reviews[productId];

            for(uint256 j=0; j<productReviews.length; j++){
                if(productReviews[j].reviewer == user){
                    userProductReviews[i] = productReviews[j];
                }
            }
        }
        return userProductReviews;
    }

    function likeReview(uint256 productId , uint256 reviewIndex , address user) external{
        Review storage review = reviews[productId][reviewIndex];

        review.likes++;
        emit ReviewLiked(productId , reviewIndex , user , review.likes);
    }

    function getHighestratedProduct() external view returns(uint256){
        uint256 highestRating = 0;
        uint256 highestRatedProductId = 0;

        for(uint256 i=0; i<reviewsCounter; i++){
            uint256 productId = i+1;
            if(products[productId].numReviews > 0){
                uint256 avgRating = products[productId].totalRating / products[productId].numReviews;
                if(avgRating > highestRating){
                    highestRating = avgRating;
                    highestRatedProductId = productId;
                }
            }
        }
        return highestRatedProductId;
    }

     //RETURN LISTING PRICE
    function getListingPrice() public view returns (uint256) {
        return listingPrice;
    }
    
   /* Updates the listing price of the contract */
    function updateListingPrice(uint256 _listingPrice, address owner)
        public
        payable
        onlyOwner
    {
        require(
            contractOwner == owner,
            "Only contract owner can update listing price."
        );
        listingPrice = _listingPrice;
    }
    
}

