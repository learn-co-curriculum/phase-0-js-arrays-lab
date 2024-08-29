// Create the Product Inventory Array
const products = ["Laptop", "Phone", "Headphones", "Monitor"];

// Access Product Information
function logFirstProduct() {
    console.log(products[0]); // Logs "Laptop"
}

// Update Product Information
function updateProductName(index, newName) {
    products[index] = newName;
}

// Remove a Product
function removeLastProduct() {
    products.pop();
}


// Export the necessary parts for testing. Don't modify.
module.exports = {
  products,
  logFirstProduct,
  updateProductName,
  removeLastProduct
};
