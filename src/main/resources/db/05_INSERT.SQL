
// ----------------------------------------------------------------------------------------------------
// Master Tables
// ----------------------------------------------------------------------------------------------------

// M1 

	INSERT INTO MERCHANT VALUES (1,'John Smith All', '100 Merchant Address' ,'West Chester', 'PA', '19380', 'a@WestChester.com', '732-732-7321', 10,1);
	INSERT INTO MERCHANT VALUES (2,'KOP-19406 All', '100 Merchant Address' ,'King of Prussia', 'PA', '19406', 'a@kop.com', '732-732-1111', 5,1);
	INSERT INTO MERCHANT VALUES (3,'KOP-19484 Corp', '100 Merchant Address' ,'King of Prussia', 'PA', '19484', 'b@kop.com', '732-732-2222', 5,1);
	INSERT INTO MERCHANT VALUES (4,'KOP-194484 Rest', '100 Merchant Address' ,'King of Prussia', 'PA', '19484', 'c@kop.com', '732-732-7321', 5,1);
			
// M2 - Restaurants

	INSERT INTO restaurant VALUES (1, 1, 'Chipotle', 'Address 1', 'West Chester', 'PA', '19380', 'Chipotale/Chipotale.png', 1);
	INSERT INTO restaurant VALUES (2, 1, 'ShakeShack', 'Address 2', 'West Chester', 'PA', '19380', 'ShakeShack/ShakeShack.png', 1);
		
	INSERT INTO restaurant VALUES (3, 2, 'Wawa', 'Address 3', 'King of Prussia', 'PA', '19406', 'Chipotale/Chipotale.png', 1);
	INSERT INTO restaurant VALUES (4, 2, 'Wegmen', 'Address 4', 'King of Prussia', 'PA', '19406', 'ShakeShack/ShakeShack.png', 1);
		

	INSERT INTO restaurant VALUES (5, 3, 'Panera Bread', 'Address 5', 'King of Prussia', 'PA', '19484', 'Chipotale/Chipotale.png', 1);
	INSERT INTO restaurant VALUES (6, 4, 'Nalla', 'Address 6', 'King of Prussia', 'PA', '19484', 'ShakeShack/ShakeShack.png', 1);
		
	
// M3 - food items

	INSERT INTO `FOOD_ITEM` VALUES (1, 'White Rice', 'CAT1');
	INSERT INTO `FOOD_ITEM` VALUES (2, 'Brown Rice', 'CAT1');
	INSERT INTO `FOOD_ITEM` VALUES (3, 'Green Paper', 'CAT2');
	INSERT INTO `FOOD_ITEM` VALUES (7, 'Beans', 'CAT2');
	
	INSERT INTO `FOOD_ITEM` VALUES (4, 'Mild', 'SALSA');
	INSERT INTO `FOOD_ITEM` VALUES (5, 'Medium', 'SALSA');
	INSERT INTO `FOOD_ITEM` VALUES (6, 'Hot', 'SALSA');

// ----------------------------------------------------------------------------------------------------	
// Configuration Table 
// ----------------------------------------------------------------------------------------------------

// C1 - ZIP_BUSTYPE_MERCHANT 

	INSERT INTO ZIP_BUSTYPE_MERCHANT VALUES (1, '19380',  'West Chester', 'PA',  'CORP', '1', 1 );
	INSERT INTO ZIP_BUSTYPE_MERCHANT VALUES (2, '19380',  'West Chester', 'PA',  'RD', '1', 1 ); 
	INSERT INTO ZIP_BUSTYPE_MERCHANT VALUES (3, '19380',  'West Chester', 'PA',  'RP', '1', 1 ); 
	
	INSERT INTO ZIP_BUSTYPE_MERCHANT VALUES (4, '19406',  'King of Prussia', 'PA',  'CORP', '2', 1 ); 
	INSERT INTO ZIP_BUSTYPE_MERCHANT VALUES (5, '19406',  'King of Prussia', 'PA',  'RD' ,'2', 1 ); 
	INSERT INTO ZIP_BUSTYPE_MERCHANT VALUES (6, '19406',  'King of Prussia', 'PA',  'RP' ,'2', 1 ); 
	
	INSERT INTO ZIP_BUSTYPE_MERCHANT VALUES (7, '19484',  'King of Prussia', 'PA',  'CORP' ,'3', 1 ); 
	INSERT INTO ZIP_BUSTYPE_MERCHANT VALUES (8, '19484',  'King of Prussia', 'PA',  'RD' ,'4', 1 );  
	INSERT INTO ZIP_BUSTYPE_MERCHANT VALUES (9, '19484',  'King of Prussia', 'PA',  'RP' ,'4', 1 );
	
	
// C2 - RESTAURANT_BUSTYPE

// Wester Chester - Corp - Merchant 1
	INSERT INTO RESTAURANT_BUSTYPE VALUES (1, 1, 1, 1);
	INSERT INTO RESTAURANT_BUSTYPE VALUES (2, 1, 2, 1);
	
// Wester Chester - RD - Merchant 1	
	INSERT INTO RESTAURANT_BUSTYPE VALUES (3, 2, 1, 1);
	INSERT INTO RESTAURANT_BUSTYPE VALUES (4, 2, 2, 1);
	
// KOP - Corp for Merchant 2			
	INSERT INTO RESTAURANT_BUSTYPE VALUES (5, 4, 3, 1);
	INSERT INTO RESTAURANT_BUSTYPE VALUES (6, 4, 4, 1);

// KOP - RD for Merchant 2			
	INSERT INTO RESTAURANT_BUSTYPE VALUES (7, 5, 3, 1);
	INSERT INTO RESTAURANT_BUSTYPE VALUES (8, 5, 4, 1);
	
// KOP - Corp for Merchant 3
	INSERT INTO RESTAURANT_BUSTYPE VALUES (9, 7, 5, 1);
	
// KOP - RD for Merchant 4	
	INSERT INTO RESTAURANT_BUSTYPE VALUES (10, 8, 6, 1);
			
			

// C3 - RESTAURANT_MENU

	INSERT INTO `RESTAURANT_MENU` VALUES (1, 1, 'Burritoes', 'Fresh kale, apple, pineapple, banana, and pineapple juice.', 'Chipotale/harvestKale-Menu.png', 'ShakeShack/harvestKale-Menu.png', 12, 1);
	INSERT INTO `RESTAURANT_MENU` VALUES (2, 1, 'Chicken Bowl', 'Bowl', 'ShakeShack/harvestKale-Menu.png', 15, 1);
	
	INSERT INTO `RESTAURANT_MENU` VALUES (3, 2, 'Kale Krush', 'Fresh kale, apple, pineapple, banana, and pineapple juice.', 'ShakeShack/harvestKale-Menu.png', 13, 1);
	INSERT INTO `RESTAURANT_MENU` VALUES (4, 2, 'Akai Berry', 'Acai, blueberries, pineapple, banana, almond milk, chia, and lemon.', 'ShakeShack/harvestKale-Menu.png', 14, 1); 


// C4 - MENU_SECTION

	INSERT INTO `MENU_SECTION` VALUES (1, 1, 'Select your fillings', 'fillings..', 'C');
	INSERT INTO `MENU_SECTION` VALUES (2, 1, 'Select your Salasa', 'Salasa', 'C');


// C5 - SECTION_ITEM_RELATION

	INSERT INTO `SECTION_ITEM_RELATION` VALUES (1, 1, 1);
	INSERT INTO `SECTION_ITEM_RELATION` VALUES (2, 1, 2);
	INSERT INTO `SECTION_ITEM_RELATION` VALUES (3, 1, 3);
	INSERT INTO `SECTION_ITEM_RELATION` VALUES (4, 1, 7);
	
	INSERT INTO `SECTION_ITEM_RELATION` VALUES (5, 2, 4);
	INSERT INTO `SECTION_ITEM_RELATION` VALUES (6, 2, 5);
	INSERT INTO `SECTION_ITEM_RELATION` VALUES (7, 2, 6);
	

