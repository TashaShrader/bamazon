DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;
USE bamazonDB;

CREATE TABLE products (
    item_id VARCHAR(255),
    product_name VARCHAR(255),
    department_name VARCHAR(255),
    price DECIMAL(10,2),
    stock_quantity INT(255)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUE (111, "nike shoes", "shoe departmen", 55.89, 78);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUE (222, "coffe filters", "kitchen", 7.57, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUE (333, "water bottle", "food", 1.56, 90);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUE (444, "computer", "electronics", 1789.78, 40);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUE (555, "cell phone case", "electronics", 26.09, 12);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUE (777, "pizza", "food", 12.43, 20);

CREATE TABLE customer (
    item_id VARCHAR(255) PRIMARY KEY,
    numUnits INT(255)
 
);

-- INSERT INTO customer (item_id, numUnits);
-- VALUE (userProduct, userUnit);



