# Scala tail-recursive approach

**Author:** MaxPsm
**Votes:** 0
**Link:** [https://leetcode.com/problems/employee-importance/solutions/5559786/](https://leetcode.com/problems/employee-importance/solutions/5559786/)

---

# Intuition
Find the initial employee by id and sum his subordinates recursively

# Approach
Check all subordinates and collect they sum, then recursively check they subordinates and collect they sum and etc.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
/*
// Definition for Employee.
class Employee() {
    var id: Int = 0
    var importance: Int = 0
    var subordinates: List[Int] = List()
};
*/

object Solution {
    def getImportance(employees: List[Employee], id: Int): Int = {

    def go(employees: List[Employee], employeesIds: List[Int], totalImportance: Int): Int = {
      if (employeesIds.isEmpty) totalImportance
      else {
        val subs = employees.filter(e => employeesIds.contains(e.id))
        val subsAndSum = subs.foldLeft((List.empty[Int], 0))(
          (acc, employee) => (acc._1 ++ employee.subordinates, acc._2 + employee.importance)
        )
        go(employees, subsAndSum._1.distinct, totalImportance + subsAndSum._2)
      }
    }
    val emp = employees.find(_.id == id)
    emp.fold(0){ e =>
      go(employees, e.subordinates, e.importance)
    }
  }
}
```