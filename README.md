# bamazon

## What are we doing?: ##
In this app, you'll be experience an Amazon-like storefront using MySQL skills. 

## This is what you need to install in your terminal: ##
* npm init -y
* npm install
* npm install inquirer
* npm install mysql

![img](/images/init.png)

## How it works! ##
a table was created in the mySQL data base and includes this information:
* item_id (unique id for each product)
* product_name (Name of product)
* department_name
* price (cost to customer)
* stock_quantity (how much of the product is available in stores)

![img](/images/mySQL.png)

I then created a data base of products.

![img](/images/productsSQL.png)

then a Node application ws created. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

![img](/images/node.png)

The app should then prompt users with two messages:
* asks them the ID of the product they would like to buy
* asks how many units of the product they would like to buy

![img](/images/insert.png)

Once the customer has placed the order, your application will check if the bamazon store has enough of the product to meet the customer's request

If there is not enough in stock it will inform the customer there is not enough.

![img](/images/sorry.png)

If there is enough in stock it will inform the customer there is enough product, the price of the purchace, and how many units are left after the customers purchace.

![img](/images/yay.png)

Then it will input the data the customer put in and create a table in mySQL database.

![img](/images/customerSQL.png)
