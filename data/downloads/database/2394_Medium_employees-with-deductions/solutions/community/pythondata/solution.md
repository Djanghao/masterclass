# Pandas 4 lines "timedelta"

**Author:** true-detective
**Votes:** 1
**Link:** [https://leetcode.com/problems/employees-with-deductions/solutions/4132970/](https://leetcode.com/problems/employees-with-deductions/solutions/4132970/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
First calculate the second difference between the `in_time` and `out_time` columns. `ceil(1min)` will round it to the next minute. and we have to divide by 60 twice to convert seconds to hourse and then compare it to `needed_hours` column.

# Code
```
import pandas as pd

def employees_with_deductions(employees: pd.DataFrame, logs: pd.DataFrame) -> pd.DataFrame:
    logs['diff'] = (logs['out_time'] - logs['in_time']).dt.ceil('1min').dt.seconds // 60
    logs = (logs.groupby('employee_id')['diff'].sum() // 60).reset_index(name='hours')
    employees = employees.merge(logs, how='left').fillna(0)
    return employees[employees.needed_hours > employees.hours][['employee_id']]
```