# pandas cumcount() and pivot()

**Author:** KunPpBu
**Votes:** 2
**Link:** [https://leetcode.com/problems/students-report-by-geography/solutions/4475396/](https://leetcode.com/problems/students-report-by-geography/solutions/4475396/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Return correct output but can not pass the testcase. Any feedback would be grately appreciated. 

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import pandas as pd

def geography_report(student: pd.DataFrame) -> pd.DataFrame:
    student = student.sort_values('name')
    student['order'] = student.groupby('continent').cumcount()
    df = student.pivot(index='order', columns = 'continent', values = 'name').fillna('null').reset_index(drop=True)
    return df
```