class FitnessAnalytics {
  constructor(data) {
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error("Dataset is empty");
    }
    this.data = data;
  }

  getActiveUsers() {
    return this.data.filter((entry) => entry.steps > 7000);
  }

  getAverageCalories() {
    const total = this.data.reduce((sum, entry) => sum + entry.calories, 0);
    return total / this.data.length;
  }

  getUserSummary() {
    return this.data.map(
      (entry) =>
        `User ${entry.user} walked ${entry.steps} steps and burned ${entry.calories} calories`
    );
  }
}

const workoutData = [
  { user: "A", steps: 8000, calories: 300 },
  { user: "B", steps: 12000, calories: 500 },
  { user: "C", steps: 4000, calories: 200 },
];

const analytics = new FitnessAnalytics(workoutData);

console.log("Active users (steps > 7000):");
console.log(analytics.getActiveUsers());

console.log("\nAverage calories:");
console.log(analytics.getAverageCalories().toFixed(2));

console.log("\nUser summary:");
analytics.getUserSummary().forEach((line) => console.log(line));

console.log("\nTesting empty dataset:");
try {
  new FitnessAnalytics([]);
} catch (error) {
  console.log(`Error: ${error.message}`);
}
