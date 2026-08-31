# use np.where() to avoid division by zero

**Author:** zhangmanyuzmy
**Votes:** 0
**Link:** [https://leetcode.com/problems/compute-the-rank-as-a-percentage/solutions/4683774/](https://leetcode.com/problems/compute-the-rank-as-a-percentage/solutions/4683774/)

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
```
import pandas as pd

def compute_rating(students: pd.DataFrame) -> pd.DataFrame:
    # 1. get student_rank_in_the_department (directly -1)
    students['student_rank_in_the_department'] = students.groupby('department_id')['mark'].rank(method = 'min', ascending = False)
    # 2. get the number of students in each department
    df = students.groupby('department_id').size().reset_index(name = 'the_number_of_students_in_the_department')
    students = students.merge(df, how = 'left', on = 'department_id')
    # 3. compute - use np.where() to avoid division by zero
    students['percentage'] = np.where(
        students['the_number_of_students_in_the_department'] > 1,
        round((students['student_rank_in_the_department'] - 1) * 100 / (students['the_number_of_students_in_the_department'] - 1), 2),
        0.0
    )
    return students[['student_id', 'department_id', 'percentage']].sort_values(['department_id', 'percentage']).fillna(0.)
```