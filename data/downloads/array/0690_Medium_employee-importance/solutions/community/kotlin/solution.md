# Kotlin recursion

**Author:** GeorgCantor
**Votes:** 1
**Link:** [https://leetcode.com/problems/employee-importance/solutions/1080967/](https://leetcode.com/problems/employee-importance/solutions/1080967/)

---

```
    class Solution {
        var counter = 0

        fun getImportance(employees: List<Employee?>, id: Int): Int {
            employees.forEach {
                if (it?.id == id) {
                    counter += it.importance
                    if (it.subordinates.isEmpty()) return counter
                    for (i in it.subordinates.indices) {
                        getImportance(employees, it.subordinates[i])
                    }
                }
            }

            return counter
        }
    }
```