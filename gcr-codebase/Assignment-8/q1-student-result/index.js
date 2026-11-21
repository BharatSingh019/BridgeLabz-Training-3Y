class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  calculateAverage() {
    if (this.marks.length === 0) {
      return 0;
    }
    const total = this.marks.reduce((sum, mark) => sum + mark, 0);
    return total / this.marks.length;
  }

  getGrade() {
    const average = this.calculateAverage();
    if (average >= 80) return "A";
    if (average >= 60) return "B";
    if (average >= 40) return "C";
    return "F";
  }
}

const students = [
  new Student("Aarav", [92, 85, 88, 90, 79]),
  new Student("Diya", [65, 70, 58, 72, 66]),
  new Student("Kabir", [30, 25, 40, 35, 28]),
];

students.forEach((student) => {
  console.log(
    `${student.name} | Average: ${student.calculateAverage().toFixed(2)} | Grade: ${student.getGrade()}`
  );
});
