var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazonDB"
});

connection.connect(function (err) {
  if (err) throw err;
});
showProducts();
function showProducts() {
  var query = connection.query("SELECT * FROM products", function (err, res) {
    let choices = [];
    for (let i = 0; i < res.length; i++) {
       choices.push({ id: res[i].item_id, product: res[i].product_name, department: res[i].department_name, price: res[i].price, quantity: res[i].stock_quantity })
    }
    console.log(choices);
    userInput();
  })
}

function userInput() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Insert product ID: ",
        name: "productID"
      },
      {
        type: "input",
        message: "How many would you like to buy?: ",
        name: "numUnits"
      }
    ])
    .then(function (inquirerResponse) {
      var userID = inquirerResponse.productID;
      var userQuantity = inquirerResponse.numUnits;

      connection.query("SELECT * FROM products WHERE ?",
        {
          item_id: userID
        },
        function (err, res) {

          for (let i = 0; i < res.length; i++) {

            let productID = res[i].item_id;
            let stockQuantity = res[i].stock_quantity;
            let productPrice = res[i].price;

            if (userQuantity > stockQuantity) {
              console.log("\n Sorry! We dont have enough in stock for your order!");
            }

            if (userQuantity <= stockQuantity) {
              console.log("\n YAY! We have enough in stock!");
              var updateStock = stockQuantity - userQuantity;
              var updateCost = userQuantity * productPrice;
              console.log("\n Total cost: $", updateCost);
              console.log("\n We now have " + updateStock + " left in stock!");
            }
           
          }
        
        })
        function updateCustomer(err, res){
          var query = connection.query("UPDATE * FROM customers WHERE ?",
          {
            item_id: userID
          },
          {
            numUnits: userQuantity
          })
        }
    })
}