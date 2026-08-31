# Simple filtering and dropna()

**Author:** daniel8b
**Votes:** 7
**Link:** [https://leetcode.com/problems/employees-whose-manager-left-the-company/solutions/4182575/](https://leetcode.com/problems/employees-whose-manager-left-the-company/solutions/4182575/)

---

1. Filter for `manager_id` that are not in `employee_id`
2. Filter for `salary` under 30,000$
3. Drop NA values
4. Sort values

# Code
```
import pandas as pd

def find_employees(employees: pd.DataFrame) -> pd.DataFrame:
    return employees[~(employees["manager_id"].isin(employees["employee_id"])) & 
    (employees["salary"] < 30000)].dropna()[["employee_id"]]\\
    .sort_values(by="employee_id",ascending=True)
```