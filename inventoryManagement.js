// Create the Product Inventory Array
const products = ["Laptop", "Phone", "Headphones", "Monitor"];

// Access Product Information
function logFirstProduct() {
    console.log(products[0]); // Logs "Laptop"
}

// Add a Product
function addProduct(productName) {
    products.push(productName);
}

// Update Product Information
function updateProductName(index, newName) {
    products[index] = newName;
}

// Remove a Product
function removeLastProduct() {
    products.pop();
}

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
