const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 55000, stock: 5 },
  { id: 2, name: "Headphones", category: "Electronics", price: 2500, stock: 40 },
  { id: 3, name: "T-Shirt", category: "Clothing", price: 600, stock: 8 },
  { id: 4, name: "Jeans", category: "Clothing", price: 1800, stock: 25 },
  { id: 5, name: "Notebook", category: "Stationery", price: 80, stock: 3 },
  { id: 6, name: "Pen Pack", category: "Stationery", price: 120, stock: 100 },
];

function getLowStockProducts(items, threshold = 10) {
  return items.filter((product) => product.stock < threshold);
}

function sortProductsByPrice(items, order = "asc") {
  return [...items].sort((a, b) =>
    order === "asc" ? a.price - b.price : b.price - a.price
  );
}

function calculateTotalInventoryValue(items) {
  return items.reduce((total, product) => total + product.price * product.stock, 0);
}

function groupByCategory(items) {
  return items.reduce((groups, product) => {
    if (!groups[product.category]) {
      groups[product.category] = [];
    }
    groups[product.category].push(product);
    return groups;
  }, {});
}

console.log("Low stock products:");
console.log(getLowStockProducts(products));

console.log("\nProducts sorted by price (low to high):");
console.log(sortProductsByPrice(products).map((p) => `${p.name} - Rs.${p.price}`));

console.log("\nTotal inventory value:");
console.log(`Rs.${calculateTotalInventoryValue(products)}`);

console.log("\nProducts grouped by category:");
console.log(JSON.stringify(groupByCategory(products), null, 2));
