const { execSync } = require("child_process");

const folders = [
  "q1-student-result",
  "q2-food-ordering",
  "q3-product-discount",
  "q4-employee-inheritance",
  "q5-ride-sharing",
  "q6-inventory-system",
  "q7-banking",
  "q8-movie-ticket",
  "q9-fitness-analytics",
];

folders.forEach((folder) => {
  console.log(`\n========== ${folder} ==========`);
  console.log(execSync(`node ${folder}/index.js`).toString());
});
