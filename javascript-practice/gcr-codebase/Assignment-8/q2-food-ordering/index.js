const menu = [
  { name: "Burger", price: 120 },
  { name: "Pizza", price: 250 },
  { name: "Pasta", price: 180 },
  { name: "Fries", price: 90 },
  { name: "Coke", price: 60 },
];

function calculateBill(orderItems) {
  const prices = orderItems.map((itemName) => {
    const menuItem = menu.find((item) => item.name === itemName);
    if (!menuItem) {
      throw new Error(`"${itemName}" is not available on the menu`);
    }
    return menuItem.price;
  });

  return prices.reduce((total, price) => total + price, 0);
}

const orders = [
  ["Burger", "Fries", "Coke"],
  ["Pizza", "Pasta"],
  ["Burger", "Noodles", "Coke"],
];

orders.forEach((order, index) => {
  try {
    const bill = calculateBill(order);
    console.log(`Order ${index + 1} (${order.join(", ")}): Total = Rs.${bill}`);
  } catch (error) {
    console.log(`Order ${index + 1} failed: ${error.message}`);
  }
});
