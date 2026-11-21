class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  work() {
    return `${this.name} from ${this.department} is doing assigned tasks`;
  }
}

class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department);
    this.teamSize = teamSize;
  }

  work() {
    return `${this.name} from ${this.department} is managing a team of ${this.teamSize} people`;
  }
}

const people = [
  new Employee("Rohan", "Engineering"),
  new Employee("Sneha", "Design"),
  new Manager("Vikram", "Engineering", 8),
];

people.forEach((person) => {
  console.log(`[${person.constructor.name}] ${person.work()}`);
});
