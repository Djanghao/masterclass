# beats %100 , merge by team

**Author:** tal009
**Votes:** 0
**Link:** [https://leetcode.com/problems/employees-project-allocation/solutions/5470725/](https://leetcode.com/problems/employees-project-allocation/solutions/5470725/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
beats %100 -- O(NLogN)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import pandas as pd

def employees_with_above_avg_workload(project: pd.DataFrame, employees: pd.DataFrame) -> pd.DataFrame:
    mer = pd.merge(employees, project)
    gro = mer.groupby("team", as_index=False)["workload"].mean()
    mer1 = pd.merge(mer, gro, on="team")
    return mer1.loc[mer1["workload_x"] > mer1["workload_y"]][["employee_id", "project_id", "name", "workload_x"]].rename(columns={"name": "employee_name", "workload_x": "project_workload"}).sort_values(["employee_id", "project_id"])
```