# Easy swift solution

**Author:** ankteo
**Votes:** 0
**Link:** [https://leetcode.com/problems/employee-importance/solutions/5229236/](https://leetcode.com/problems/employee-importance/solutions/5229236/)

---

# Intuition
Creatre an adjlist for traversal and DFS to find important of all employee in heirarchy

# Complexity
- Time complexity:
o(n)

- Space complexity:
o(n)

# Code
```
/**
 * Definition for Employee.
 * public class Employee {
 *     public var id: Int
 *     public var importance: Int
 *     public var subordinates: [Int]
 *     public init(_ id: Int, _ importance: Int, _ subordinates: [Int]) {
 *         self.id = id
 *         self.importance = importance
 *         self.subordinates = subordinates
 *     }
 * }
 */

class Solution {
    var adjList = [Int:Employee]()
    
    func getImportance(_ employees: [Employee], _ id: Int) -> Int {
        
        for employee in employees {
            adjList[employee.id] = employee
    
        } 
        return getTotalImportanceValue(id)
    }

    func getTotalImportanceValue(_ id : Int) -> Int {
        var emp = adjList[id]!
        var importance = emp.importance
        for emp in emp.subordinates {
            importance = importance + getTotalImportanceValue(emp)
        }
        return importance
    }
}
```