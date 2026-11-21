function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.applyDiscount = function (percent) {
  if (percent < 0 || percent > 100) {
    throw new Error("Discount must be between 0 and 100");
  }
  return this.price - (this.price * percent) / 100;
};

Product.prototype.showOffer = function (percent) {
  const finalPrice = this.applyDiscount(percent);
  console.log(
    `${this.name}: Rs.${this.price} -> Rs.${finalPrice} (${percent}% off)`
  );
};

const laptop = new Product("Laptop", 60000);
const phone = new Product("Phone", 25000);
const headphones = new Product("Headphones", 3000);

laptop.showOffer(10);
phone.showOffer(20);
headphones.showOffer(50);

console.log("\nAbstraction: callers only use showOffer(percent).");
console.log("The discount formula and validation stay hidden inside the methods.");
