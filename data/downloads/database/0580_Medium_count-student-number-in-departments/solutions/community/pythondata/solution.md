# Pandas, beats 94.5%

**Author:** Prachi_404
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-student-number-in-departments/solutions/6090124/](https://leetcode.com/problems/count-student-number-in-departments/solutions/6090124/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```pythondata []
import pandas as pd

def count_students(student: pd.DataFrame, department: pd.DataFrame) -> pd.DataFrame:
    merged= student.merge(department,on='dept_id',how='right')
    merged= merged.groupby('dept_name')['student_id'].count().reset_index(name='student_number')
    return merged.sort_values(by=['student_number','dept_name'],ascending=[False,True])

```