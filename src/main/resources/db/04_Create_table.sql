
 Use expressDelivery;

// ----------------------------------------------------------------------------------------------------
// Master Tables
// ----------------------------------------------------------------------------------------------------

// M1 
CREATE TABLE User(
	id INT NOT NULL auto_increment,
	username VARCHAR(50) 	NOT NULL,
	password VARCHAR(50) 	NOT NULL,
	firstname VARCHAR(50) 	NOT NULL,
	lastname VARCHAR(50) 	NOT NULL,
	Phone VARCHAR(12) 		NOT NULL,
	last_visited  DATE NULL,
	active boolean DEFAULT 1,
	PRIMARY KEY (id)
);


// M2
CREATE TABLE MERCHANT(
	id INT NOT NULL auto_increment,
	firstname VARCHAR(50) 	NOT NULL,
	lastname VARCHAR(50) 	NOT NULL,
	username VARCHAR(100) 	NOT NULL,
	email VARCHAR(100)		NOT NULL,
	Phone VARCHAR(20) 		NOT NULL,
	password VARCHAR(50) 	NOT NULL,
	
	Address VARCHAR(100) 	NOT NULL,
	city VARCHAR(30)	 	NOT NULL,
	State VARCHAR(50) 		NOT NULL,
	zip VARCHAR(10) 		NOT NULL,
	
	mr_type VARCHAR(10) 	NOT NULL, // this can be restaurant or merchant
	last_visited  DATE NULL,
	timeRange INT,
	area_limit INT,
	active boolean DEFAULT 1,
	
	PRIMARY KEY (id)
);


// M4
CREATE TABLE FOOD_ITEM(
	id INT NOT NULL auto_increment,
	name VARCHAR(150) NOT NULL,
	category VARCHAR (100),
	PRIMARY KEY (id)
);	

// M4
CREATE TABLE USER_PAYMENTS(
	id INT NOT NULL auto_increment,
	user_id INT NOT NULL,
	card_type VARCHAR(30) NOT NULL,
	lastFourDigits VARCHAR(10) NOT NULL,
    exp_date  VARCHAR(10) NOT NULL,
    token VARCHAR(50) NOT NULL,
	billing_address VARCHAR(100) NOT NULL,
    city VARCHAR(30) NOT NULL,
    State VARCHAR(20) NOT NULL,
    zip VARCHAR(10) NOT NULL,
    country VARCHAR(50) NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT FK_USER_PAYMENTS FOREIGN KEY (user_id) REFERENCES User(id)
    
);



// ----------------------------------------------------------------------------------------------------	
// Configuration Table 
// ----------------------------------------------------------------------------------------------------

// C1
CREATE TABLE ZIP_BUSTYPE_MERCHANT(
    id INT NOT NULL auto_increment, 
    business_zipcode VARCHAR(5) NOT NULL,
    business_city VARCHAR(30) NOT NULL,
	business_State VARCHAR(10) NOT NULL,
    business_type VARCHAR(4) NOT NULL,
    merchantId INT NOT NULL,
    active boolean DEFAULT 1,
    PRIMARY KEY (id),
    CONSTRAINT FK_ZIP_BUSTYPE_MERCHANT FOREIGN KEY (merchantId) REFERENCES MERCHANT(id)
);

CREATE TABLE ZIP_CORP_CENTER (
	id INT NOT NULL auto_increment,
	name VARCHAR(100) NOT NULL,
	corp_zipcode VARCHAR(5) NOT NULL,
	active boolean DEFAULT 1,
	PRIMARY KEY (id)
);


// C2
CREATE TABLE RESTAURANT_BUSTYPE(
    id INT NOT NULL auto_increment, 
    zipBustypeMerchantId INT NOT NULL, 
    name VARCHAR(100) NOT NULL,
    
    manager_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    
    tagLine VARCHAR(200) NOT NULL,
    opencloseTime varchar(80) NOT NULL,
    timeRange varchar(80) NOT NULL,
    pricelevel VARCHAR(4) NOT NULL,
    Address VARCHAR(100) NOT NULL,
    city VARCHAR(30) NOT NULL,
    State VARCHAR(20) NOT NULL,
    zip VARCHAR(10) NOT NULL,
    image VARCHAR(250),
    contract_percent double(40,2) default 0,
    active boolean DEFAULT 1,
    PRIMARY KEY (id),
    CONSTRAINT FK_RESTAURANT_BUSTYPE_1 FOREIGN KEY (zipBustypeMerchantId) REFERENCES ZIP_BUSTYPE_MERCHANT(id)
);

// C3
CREATE TABLE RESTAURANT_MENU(
    id INT NOT NULL auto_increment, 
	restaurant_bustypeId INT NOT NULL,
	group_number INT,
	group_name  VARCHAR(64),
    group_menu_number INT,
	name VARCHAR(150) NOT NULL,
    description VARCHAR(400),
    menu_image VARCHAR(100),
    base_price DOUBLE(40,2) default 0,
    sales_price DOUBLE(40,2) default 0,
    restaurant_price DOUBLE(40,2) default 0,
    active boolean DEFAULT 1,
    PRIMARY KEY (id),
	CONSTRAINT FK_RESTAURANT_MENU FOREIGN KEY (restaurant_bustypeId) REFERENCES RESTAURANT_BUSTYPE(id)
);


// C4
CREATE TABLE MENU_SECTION(
	id INT NOT NULL auto_increment,
	menuId INT NOT NULL,
	name VARCHAR(150) NOT NULL,
	description VARCHAR(400),
	type CHAR(1),
	
	Option1 VARCHAR(50),
	Option2 VARCHAR(50),
	Option3 VARCHAR(50),
	Option4 VARCHAR(50),
	Option5 VARCHAR(50),
	Option6 VARCHAR(50),
	
	price1  DOUBLE(40,2) ,
	price2  DOUBLE(40,2) ,
	price3  DOUBLE(40,2) ,
	price4  DOUBLE(40,2) ,
	price5  DOUBLE(40,2) ,
	price6  DOUBLE(40,2) ,
	
	PRIMARY KEY (id),
	CONSTRAINT FK_MENU_SECTION FOREIGN KEY( menuId) REFERENCES RESTAURANT_MENU(id)
);			


// C5	
//CREATE TABLE MENU_SECTION_ITEMS (
//	id INT NOT NULL auto_increment,	
//	sectionId INT NOT NULL,
//	itemName  VARCHAR(100) NOT NULL,
//	price DOUBLE(4,2) default 0,		
//	PRIMARY KEY (id),
//	CONSTRAINT FK_SECTION_ITEM_RELATION_1 FOREIGN KEY( sectionId) REFERENCES MENU_SECTION(id)
	
//);					
					

// C6		
CREATE TABLE RESTAURANT_TIME (
	id INT NOT NULL auto_increment,	
	restaurantId INT NOT NULL,
	day varchar(10) NOT NULL,
	start_time	TIME,
	end_time	TIME,
	PRIMARY KEY (id),
	CONSTRAINT FK_RESTAURANT_TIME FOREIGN KEY (restaurantId) REFERENCES RESTAURANT_BUSTYPE(id)
);
		
		
// Order details
CREATE TABLE order_header (
	id INT NOT NULL auto_increment,	
	order_date Date NOT NULL,
	order_time  TIME  NOT NULL,
	userid VARCHAR(50) 	NOT NULL,
	name  VARCHAR(50) 	NOT NULL,
	delivery_address VARCHAR(100) NOT NULL,
	instructions VARCHAR(100) NULL,
	business_type VARCHAR(4) NOT NULL,
	zipcode VARCHAR(5) NOT NULL,
    city VARCHAR(30) NOT NULL,
	state VARCHAR(10) NOT NULL,
	zipBustypeMerchantId INT NOT NULL,
	
	card_type VARCHAR(30) NOT NULL,
	lastFourDigits VARCHAR(10) NOT NULL,
    exp_date  VARCHAR(10) NOT NULL,
    token VARCHAR(50) NOT NULL, 
	
	delivery_charge DOUBLE(4,2) default 0,

	total_base DOUBLE(4,2) default 0,
	total_restaurant DOUBLE(4,2) default 0,
	total_sales DOUBLE(4,2) default 0,
	
	tax_sales DOUBLE(4,2) default 0,
	tip DOUBLE(4,2) default 0,
	subtotal_sales DOUBLE(4,2) default 0,
	
	Coupon_Type varchar(10),
	Coupon_Code varchar(10),
	Coupon_Amount DOUBLE(4,2) default 0,
	pay_method VARCHAR(4) NOT NULL,
	
	PRIMARY KEY (id),
	CONSTRAINT FK_ORDER_HEADER_1 FOREIGN KEY (zipBustypeMerchantId) REFERENCES ZIP_BUSTYPE_MERCHANT(id)
);	

CREATE TABLE order_addresses (
		id INT NOT NULL auto_increment,	
		order_id int NOT NULL,
		delivery_address VARCHAR(100) NOT NULL,
		delivery_city VARCHAR(100) NOT NULL,
		delivery_state VARCHAR(100) NOT NULL,
		delivery_zip VARCHAR(100) NOT NULL,
		billing_address VARCHAR(100) NOT NULL,
		billing_city VARCHAR(100) NOT NULL,
		billing_state VARCHAR(100) NOT NULL,
		billing_zip VARCHAR(100) NOT NULL,
		
		PRIMARY KEY (id),
		CONSTRAINT FK_ORDER_ADDRESSES FOREIGN KEY (order_id) REFERENCES ORDER_HEADER(id)
);
	
CREATE TABLE order_items (
	id int(11) NOT NULL AUTO_INCREMENT,
  
	order_id int(11) NOT NULL,
	restaurant_id int(11) NOT NULL,
  
	base_restaurant_price DOUBLE(4,2) default 0,
	restaurant_price DOUBLE(4,2) default 0,
	sales_restaurant_price DOUBLE(4,2) default 0,
	sales_restaurant_tax DOUBLE(4,2) default 0,

	PRIMARY KEY (id),
	CONSTRAINT FK_ORDER_ITEMS_1 FOREIGN KEY (order_id) REFERENCES order_header (id),
	CONSTRAINT FK_ORDER_ITEMS_2 FOREIGN KEY (restaurant_id) REFERENCES restaurant_bustype(id)
);


CREATE TABLE order_restaurants_menu (
	id int(11) NOT NULL AUTO_INCREMENT,
	order_restaurants_id int(11) NOT NULL,
  
	menu_name varchar(100) DEFAULT NULL,
	quantity int(11) DEFAULT NULL,
	description varchar(200) DEFAULT NULL,
  
	base_price_menu DOUBLE(4,2) default 0,
	restaurant_price_menu DOUBLE(4,2) default 0,
	sales_price_menu DOUBLE(4,2) default 0,
	sales_price_tax DOUBLE(4,2) default 0,
  
  	PRIMARY KEY (id), 
 	CONSTRAINT FK_RESTAURANT_ID FOREIGN KEY (order_restaurants_id) REFERENCES order_items (id)
);

CREATE TABLE order_restaurants_menu_section(
	id int(11) NOT NULL AUTO_INCREMENT,
	
	order_restaurant_menu_id int(11) NOT NULL,
	name varchar(100) DEFAULT NULL,
	value varchar(100) DEFAULT NULL,
	
	PRIMARY KEY (id),
	CONSTRAINT FK_MENU_SECTION_ID FOREIGN KEY (order_restaurant_menu_id) REFERENCES order_restaurants_menu (id)
);

	
CREATE TABLE order_status (
	id int(11) NOT NULL AUTO_INCREMENT,
  	orderId int(11) DEFAULT NULL,
  	
  	new varchar(10) DEFAULT NULL,
  	new_date date DEFAULT NULL,
  	new_time time DEFAULT NULL,
  	open varchar(10) DEFAULT NULL,
  	open_date date DEFAULT NULL,
 	open_time time DEFAULT NULL,
  	ack varchar(10) DEFAULT NULL,
  	ack_date date DEFAULT NULL,
  	ack_time time DEFAULT NULL,
  	ready varchar(10) DEFAULT NULL,
  	ready_date date DEFAULT NULL,
  	ready_time time DEFAULT NULL,
  	handover varchar(10) DEFAULT NULL,
  	handover_date date DEFAULT NULL,
  	handover_time time DEFAULT NULL,
  	delivered varchar(10) DEFAULT NULL,
  	delivered_date date DEFAULT NULL,
  	delivered_time time DEFAULT NULL,
  
  	PRIMARY KEY (id),
	CONSTRAINT FK_ORDER_STATUS FOREIGN KEY (orderId) REFERENCES order_header (id)
);

	
	
CREATE TABLE COUPON_USER (
	id INT NOT NULL auto_increment,
	business_type VARCHAR(4)	NOT NULL,
	zip VARCHAR(10)				NOT NULL,
	coupon_type VARCHAR(10) 	NOT NULL,
	coupon_code	VARCHAR(10) 	NOT NULL,
	maxValid_Date DATE 			NOT NULL,
	user_id INT 				NOT NULL,	
	
	maxNumberOfUsages INT,
	numberOfUsageComplete INT,
 	amountOffPerUsage DOUBLE(4,2) default 0,
	max_percentage_off_per_usage INT, 
	min_order_amount INT,
	max_amount_off_per_usage INT,
	
	PRIMARY KEY (id),
    CONSTRAINT FK_COUPON_USER_1 FOREIGN KEY (user_id) REFERENCES User(id)
);

CREATE TABLE RESTAURANT (
	id INT NOT NULL auto_increment,
	merchantId INT 			NOT NULL, 
	name 	VARCHAR(100) 	NOT NULL, 
	Address VARCHAR(100) 	NOT NULL, 
	city 	VARCHAR(100) 	NOT NULL, 
	State 	VARCHAR(100) 	NOT NULL, 
	zip 	VARCHAR(100) 	NOT NULL, 
	image 	VARCHAR(250) 	NOT NULL, 
	active boolean DEFAULT 1,
	
	PRIMARY KEY(id),
	CONSTRAINT FK_RESTAURANT FOREIGN KEY (merchantId) REFERENCES merchant(id) 
);
		
	

	