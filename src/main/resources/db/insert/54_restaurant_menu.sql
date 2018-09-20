INSERT INTO `RESTAURANT_MENU` VALUES (1, 1, 'Burritoes', 'Fresh kale, apple, pineapple, banana, and pineapple juice.', 'Chipotale/harvestKale-Menu.png', 12);
INSERT INTO `RESTAURANT_MENU` VALUES (2, 1, 'Chicken Bowl', 'Bowl', 'ShakeShack/harvestKale-Menu.png', 15);
INSERT INTO `RESTAURANT_MENU` VALUES (3, 2, 'Kale Krush', 'Fresh kale, apple, pineapple, banana, and pineapple juice.', 'ShakeShack/harvestKale-Menu.png', 13);
INSERT INTO `RESTAURANT_MENU` VALUES (4, 2, 'Akai Berry', 'Acai, blueberries, pineapple, banana, almond milk, chia, and lemon.', 'ShakeShack/harvestKale-Menu.png', 14); 

INSERT INTO `MENU_SECTION` VALUES (1, 1, 'Select your fillings', 'fillings..', 'C');
INSERT INTO `MENU_SECTION` VALUES (2, 1, 'Select your Salasa', 'Salasa', 'R');


INSERT INTO `FOOD_ITEM` VALUES (1, 'White Rice', 'CAT1');
INSERT INTO `FOOD_ITEM` VALUES (2, 'Brown Rice', 'CAT1');
INSERT INTO `FOOD_ITEM` VALUES (3, 'Green Paper', 'CAT2');
INSERT INTO `FOOD_ITEM` VALUES (7, 'Beans', 'CAT2');
INSERT INTO `FOOD_ITEM` VALUES (4, 'Mild', 'SALSA');
INSERT INTO `FOOD_ITEM` VALUES (5, 'Medium', 'SALSA');
INSERT INTO `FOOD_ITEM` VALUES (6, 'Hot', 'SALSA');

INSERT INTO `SECTION_ITEM_RELATION` VALUES (1, 1, 1);
INSERT INTO `SECTION_ITEM_RELATION` VALUES (2, 1, 2);
INSERT INTO `SECTION_ITEM_RELATION` VALUES (3, 1, 3);
INSERT INTO `SECTION_ITEM_RELATION` VALUES (4, 1, 7);

INSERT INTO `SECTION_ITEM_RELATION` VALUES (5, 2, 4);
INSERT INTO `SECTION_ITEM_RELATION` VALUES (6, 2, 5);
INSERT INTO `SECTION_ITEM_RELATION` VALUES (7, 2, 6);
