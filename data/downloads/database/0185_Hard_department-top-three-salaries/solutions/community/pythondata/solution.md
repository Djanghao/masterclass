# pandas || 4 lines groupby and merge || T/S: 99% / 99%

**Author:** Spaulding_
**Votes:** 17
**Link:** [https://leetcode.com/problems/department-top-three-salaries/solutions/5155431/](https://leetcode.com/problems/department-top-three-salaries/solutions/5155431/)

---

```
import pandas as pd

def top_three_salaries(employee: pd.DataFrame, 
                       department: pd.DataFrame) -> pd.DataFrame:

    employee.  columns = ['id', 'Employee', 'Salary', 'd_id']
    department.columns = ['d_id', 'Department']

    employee['rnk'] = employee.groupby('d_id')[['Salary']
                             ].rank(method='dense', ascending=False)

    return employee[employee.rnk <= 3
                ].merge(department, on='d_id').iloc[:,[5,1,2]]
```

[https://leetcode.com/problems/department-top-three-salaries/submissions/1084905903/](https://leetcode.com/problems/department-top-three-salaries/submissions/1084905903/)

I could be wrong, but I think that time complexity is *O*(*N* log *N*)  and space complexity is *O*(*N* + *M*), in which *N* ~ `len(employee)` and *M* ~ number of departments with three employees. 
'''