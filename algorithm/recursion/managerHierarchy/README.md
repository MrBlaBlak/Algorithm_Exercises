
# Problem Description

Given a list of employees, where each employee is represented as an object with the following properties:
- **employeeId**: Unique identifier for the employee.
- **name**: Name of the employee.
- **managerId**: The ID of the employee's direct manager. If the employee is the CEO or has no manager, their `managerId` will be the same as their `employeeId`.

The task is to determine the managerial hierarchy for a specific employee, by tracing their managers up the chain of command until reaching the employee with no manager (i.e., the CEO).

## Input:

1. **employees**: An array of objects, where each object represents an employee and has the following properties:
    - `employeeId`: (number) A unique identifier for the employee.
    - `name`: (string) The name of the employee.
    - `managerId`: (number) The ID of the employee's direct manager. If the employee is the CEO, `managerId` is equal to `employeeId`.

2. **employeeId**: A specific `employeeId` (number) whose managerial hierarchy is to be determined.

## Output:

The program outputs an array of employee IDs representing the chain of command for the specified employee. The array starts with the direct manager and continues up the chain until it reaches the CEO.

- **If the employee has managers**: The array will list the IDs of the managers, starting with the immediate manager and going up to the top-level manager (CEO).
- **If the employee is the CEO**: The array will have only its ID, as they have no manager.
- **If there is no managers or not existing employee** - then should return empty array []