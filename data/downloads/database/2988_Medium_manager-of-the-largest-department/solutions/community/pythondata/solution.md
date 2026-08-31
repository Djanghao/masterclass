# Solution with grouping and merging

**Author:** Inveterate_Enthusiast
**Votes:** 0
**Link:** [https://leetcode.com/problems/manager-of-the-largest-department/solutions/5964279/](https://leetcode.com/problems/manager-of-the-largest-department/solutions/5964279/)

---

# Code on Python
```python
import pandas as pd

def find_manager(employees: pd.DataFrame) -> pd.DataFrame:
    grouped = employees.groupby(by="dep_id", as_index=False).agg(count=("emp_id", "nunique"))
    merged = pd.merge(
        left=grouped,
        right=employees.loc[employees["position"] == "Manager"].rename(columns={"emp_name": "manager_name"}),
        how="left",
        on="dep_id"
    )
    merged["rank"] = merged["count"].rank(method="dense", ascending=False)
    return merged.loc[merged["rank"] == 1, ["manager_name", "dep_id"]].sort_values(by="dep_id", ascending=True)
```
---
# Code on PostgreSQL
```postgresql []
-- Write your PostgreSQL query statement below
WITH grouped AS (
    SELECT
        dep_id,
        COUNT(emp_id) AS count
    FROM Employees
    GROUP BY dep_id
)
SELECT
    sub.emp_name AS manager_name,
    main.dep_id
FROM grouped AS main
LEFT JOIN (SELECT * FROM Employees WHERE position = 'Manager') AS sub
ON sub.dep_id = main.dep_id
WHERE main.count = (SELECT MAX(count) FROM grouped)
ORDER BY main.dep_id ASC;
```