// Write your code here
const products = ["Laptop", "Phone", "Headphones", "Monitor"];

// logFirstProduct
function logFirstProduct() {
  return console.log(products[0]);
}

// updateProductName
function updateProductName(position,reName) {
  products[position] = reName
  return reName;
}
// updateProductName(products, 2, "InEar Headphones")

// removeLastProduct
function removeLastProduct() {
  products.pop();
  return products;
}
// removeLastProduct(products)

// addProduct
function addProduct(productName) {
  products.push(productName); // adds product to the array 
  // console.log(array)
  return products;
}
// addProduct(products, "Mouse")

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};