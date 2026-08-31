# Solution with ranking

**Author:** Inveterate_Enthusiast
**Votes:** 0
**Link:** [https://leetcode.com/problems/group-employees-of-the-same-salary/solutions/5872577/](https://leetcode.com/problems/group-employees-of-the-same-salary/solutions/5872577/)

---

# Code on Python
```pythondata []
import pandas as pd

def employees_of_same_salary(employees: pd.DataFrame) -> pd.DataFrame:
    employees["count"] = employees.groupby(by="salary", as_index=False)["employee_id"].transform("count")
    filtered = employees.loc[employees["count"] >= 2].copy()
    filtered["team_id"] = filtered["salary"].rank(method="dense", ascending=True)
    return filtered.drop(labels="count", axis=1).sort_values(by=["team_id", "employee_id"], ascending=[True, True])
```
---
# Code on PostgreSQL
```sql
WITH our_count AS (
    SELECT
        *,
        COUNT(employee_id) OVER(PARTITION BY salary) AS count
    FROM Employees
)
SELECT
    employee_id,
    name,
    salary,
    DENSE_RANK() OVER(ORDER BY salary ASC) AS team_id
FROM our_count
WHERE count >= 2
ORDER BY team_id ASC, employee_id ASC;
```