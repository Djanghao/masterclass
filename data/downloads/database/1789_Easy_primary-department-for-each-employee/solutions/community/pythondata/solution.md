# One-line-soulution

**Author:** markcrass
**Votes:** 11
**Link:** [https://leetcode.com/problems/primary-department-for-each-employee/solutions/4011755/](https://leetcode.com/problems/primary-department-for-each-employee/solutions/4011755/)

---

Enjoy

# Code
```
import pandas as pd

def find_primary_department(employee: pd.DataFrame) -> pd.DataFrame:
    employee = employee[(~employee.duplicated(subset='employee_id', keep=False))|(employee.primary_flag=="Y")]

    return employee[['employee_id', 'department_id']]
```