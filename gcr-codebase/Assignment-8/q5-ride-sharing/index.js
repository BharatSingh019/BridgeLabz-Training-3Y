class User {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }
}

class Driver extends User {
  constructor(name, rating, vehicleModel, vehicleNumber) {
    super(name, rating);
    this.vehicle = { model: vehicleModel, number: vehicleNumber };
  }
}

class Trip {
  static BASE_FARE = 50;
  static RATE_PER_KM = 12;

  constructor(fromLocation, toLocation, distance) {
    this.fromLocation = fromLocation;
    this.toLocation = toLocation;
    this.distance = distance;
  }

  calculateFare() {
    if (this.distance === undefined || this.distance === null) {
      throw new Error("Distance is required to calculate fare");
    }
    if (typeof this.distance !== "number" || Number.isNaN(this.distance)) {
      throw new Error("Distance must be a valid number");
    }
    if (this.distance < 0) {
      throw new Error("Distance cannot be negative");
    }
    return Trip.BASE_FARE + this.distance * Trip.RATE_PER_KM;
  }
}

const rider = new User("Ananya", 4.8);
const driver = new Driver("Suresh", 4.6, "Swift Dzire", "UP85 AB 1234");

console.log(`Rider: ${rider.name} (${rider.rating})`);
console.log(
  `Driver: ${driver.name} (${driver.rating}) | ${driver.vehicle.model} - ${driver.vehicle.number}`
);

const trips = [
  new Trip("Mathura", "Vrindavan", 12),
  new Trip("Mathura", "Agra", -50),
  new Trip("Mathura", "Delhi"),
];

trips.forEach((trip) => {
  try {
    const fare = trip.calculateFare();
    console.log(`${trip.fromLocation} -> ${trip.toLocation}: Fare = Rs.${fare}`);
  } catch (error) {
    console.log(
      `${trip.fromLocation} -> ${trip.toLocation}: Could not calculate fare. ${error.message}`
    );
  }
});
