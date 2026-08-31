# Pandas oneliner, select inverse

**Author:** piocarz
**Votes:** 1
**Link:** [https://leetcode.com/problems/students-with-invalid-departments/solutions/4104564/](https://leetcode.com/problems/students-with-invalid-departments/solutions/4104564/)

---

# Approach
On `students` use reverse of `.isin()` and select only first two columns.

# Code
```
import pandas as pd

def find_students(departments: pd.DataFrame, students: pd.DataFrame) -> pd.DataFrame:
    return students[~students["department_id"].isin(departments["id"])].iloc[:,:2]
```