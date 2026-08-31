# Python, a short and easy DFS solution.

**Author:** blue_sky5
**Votes:** 19
**Link:** [https://leetcode.com/problems/employee-importance/solutions/899401/](https://leetcode.com/problems/employee-importance/solutions/899401/)

---

```
class Solution:
    def getImportance(self, employees: List['Employee'], id: int) -> int:
        def dfs(emp):
            imp = emps[emp].importance            
            for s in emps[emp].subordinates:
                imp += dfs(s)
            return imp
        
        emps= {emp.id: emp for emp in employees}
        
        return dfs(id)
```