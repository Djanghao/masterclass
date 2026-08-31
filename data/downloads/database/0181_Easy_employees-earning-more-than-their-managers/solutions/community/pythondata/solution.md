# Solution (Pandas)

**Author:** peishenchong
**Votes:** 18
**Link:** [https://leetcode.com/problems/employees-earning-more-than-their-managers/solutions/3912820/](https://leetcode.com/problems/employees-earning-more-than-their-managers/solutions/3912820/)

---

For this problem I am using the MERGE function, which is similar to the JOIN function in SQL. The goal is to do a self-join so that I can directly compare the salaries across the same row.

```
import pandas as pd

def find_employees(employee: pd.DataFrame) -> pd.DataFrame:
    df = employee.merge(right = employee, how = 'left', left_on = 'managerId', right_on = 'id')
    emp = df[df['salary_x'] > df['salary_y']]['name_x']

    return pd.DataFrame({'Employee': emp})
```

Any feedbacks on how to improve/alternative solutions are greatly appreciated. Thank you for your time.