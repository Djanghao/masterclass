# beats 100% | left merges + np.where

**Author:** zhangmanyuzmy
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-top-scoring-students/solutions/5291181/](https://leetcode.com/problems/find-top-scoring-students/solutions/5291181/)

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

def find_top_scoring_students(enrollments: pd.DataFrame, students: pd.DataFrame, courses: pd.DataFrame) -> pd.DataFrame:
    # 1. merge 3 tables by left join
    df = students.merge(courses, how = 'left', on = 'major').merge(enrollments, how = 'left', on = ['student_id', 'course_id'])
    # 2. create a new column to check if grade is null (not enroll) or not A
    df['check'] = np.where(df['grade'] != 'A', 1, 0)
    # 3. filter by the sum of 'check'
    df = df.groupby('student_id').agg(
        sum_of_check = ('check', 'sum')
    ).reset_index()
    return df[df['sum_of_check'] == 0][['student_id']].sort_values(by = 'student_id', ascending = True).drop_duplicates()
```