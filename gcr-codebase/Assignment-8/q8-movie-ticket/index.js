class MovieTicket {
  constructor(movieName, seatNo, price) {
    this.movieName = movieName;
    this.seatNo = seatNo;
    this.price = price;
  }
}

class OnlineTicket extends MovieTicket {
  constructor(movieName, seatNo, price, convenienceFee) {
    super(movieName, seatNo, price);
    this.convenienceFee = convenienceFee;
  }

  getTotalAmount() {
    return this.price + this.convenienceFee;
  }
}

MovieTicket.prototype.printTicket = function () {
  console.log(
    `Movie: ${this.movieName} | Seat: ${this.seatNo} | Price: Rs.${this.price}`
  );
};

const counterTicket = new MovieTicket("Interstellar", "B12", 300);
const onlineTicket1 = new OnlineTicket("Inception", "C5", 350, 40);
const onlineTicket2 = new OnlineTicket("Dune", "D9", 400, 50);

counterTicket.printTicket();
onlineTicket1.printTicket();
onlineTicket2.printTicket();

console.log(`\nTotal for ${onlineTicket1.movieName}: Rs.${onlineTicket1.getTotalAmount()}`);
console.log(`Total for ${onlineTicket2.movieName}: Rs.${onlineTicket2.getTotalAmount()}`);

console.log("\nPrototype chain:");
console.log(
  "onlineTicket1 has own printTicket:",
  Object.prototype.hasOwnProperty.call(onlineTicket1, "printTicket")
);
console.log(
  "OnlineTicket.prototype has own printTicket:",
  Object.prototype.hasOwnProperty.call(OnlineTicket.prototype, "printTicket")
);
console.log(
  "MovieTicket.prototype has own printTicket:",
  Object.prototype.hasOwnProperty.call(MovieTicket.prototype, "printTicket")
);
console.log(
  "OnlineTicket.prototype.__proto__ === MovieTicket.prototype:",
  Object.getPrototypeOf(OnlineTicket.prototype) === MovieTicket.prototype
);
console.log("onlineTicket1 instanceof MovieTicket:", onlineTicket1 instanceof MovieTicket);
