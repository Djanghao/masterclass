# javascript with hash map BFS

**Author:** dereklo831
**Votes:** 12
**Link:** [https://leetcode.com/problems/employee-importance/solutions/751985/](https://leetcode.com/problems/employee-importance/solutions/751985/)

---

```
var GetImportance = function(employees, id) {
    let employeeMap = new Map();
    for (employee of employees) {
        employeeMap.set(employee.id, {importance : employee.importance, sub : employee.subordinates})
    }
    
    let totalImportance = 0;
    let queue = [id];
    
    while(queue.length > 0) {
        let currentEmployee = employeeMap.get(queue.shift());
        totalImportance += currentEmployee.importance;
        queue.push(...currentEmployee.sub)
    }
    
    return totalImportance
};
```