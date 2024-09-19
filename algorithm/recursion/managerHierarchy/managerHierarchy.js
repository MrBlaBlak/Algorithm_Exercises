const employees = [
    {employeeId: 11, name: 'John', managerId: 11},
    {employeeId: 50, name: 'Todd', managerId: 73},
    {employeeId: 150, name: 'Alex', managerId: 200},
    {employeeId: 73, name: 'Sara', managerId: 11},
    {employeeId: 200, name: 'Alex', managerId: 50},
    {employeeId: 100, name: 'Alex', managerId: 150},
    {employeeId: 10, name: 'Alex', managerId: 5},
    {employeeId: 5, name: 'Sam'},
];


function getHierarchy(employees, employeeId) {
    let managerHierarchy = [];
    return recursiveLoop(employees, employeeId)

    function recursiveLoop(employees, employeeId) {
        const filteredEmployee = employees.find(employee => employee.employeeId === employeeId)

        if (!filteredEmployee || !filteredEmployee.managerId) {
            return managerHierarchy
        }
        if (!managerHierarchy.includes(filteredEmployee.managerId)) {
            managerHierarchy.push(filteredEmployee.managerId)
            recursiveLoop(employees, filteredEmployee.managerId)
        }
        return managerHierarchy;
    }
}

console.log(getHierarchy(employees, 11))
console.log(getHierarchy(employees, 150))
console.log(getHierarchy(employees, 200))