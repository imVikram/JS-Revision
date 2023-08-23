//=========Deep Copy========

// let employee = {
// 	eid: "E102",
// 	ename: "Jack",
// 	eaddress: "New York",
// 	salary: 50000
// }
// console.log("=========Deep Copy========");
// let newEmployee = JSON.parse(JSON.stringify(employee));
// console.log("Employee=> ", employee);
// console.log("New Employee=> ", newEmployee);
// console.log("---------After modification---------");
// newEmployee.ename = "Beck";
// newEmployee.salary = 70000;
// console.log("Employee=> ", employee);
// console.log("New Employee=> ", newEmployee);

//===============Shallow======================
let employee = {
	eid: "E102",
	ename: "Jack",
	eaddress: "New York",
	salary: 50000
}

console.log("Employee=> ", employee);
let newEmployee = employee; // Shallow copy
console.log("New Employee=> ", newEmployee);

console.log("---------After modification----------");
newEmployee.ename = "Beck";
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
// Name of the employee as well as
// newEmployee is changed.
