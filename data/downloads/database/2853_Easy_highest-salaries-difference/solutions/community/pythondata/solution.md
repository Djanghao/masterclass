# beats 97%

**Author:** Zulfiia
**Votes:** 0
**Link:** [https://leetcode.com/problems/highest-salaries-difference/solutions/5677115/](https://leetcode.com/problems/highest-salaries-difference/solutions/5677115/)

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

def salaries_difference(salaries: pd.DataFrame) -> pd.DataFrame:
    df = salaries.groupby('department', as_index =False)['salary'].max()
    df['salary_difference'] = abs(df.loc[df.department == 'Engineering', 'salary'].values[0] - df.loc[df.department == 'Marketing', 'salary'].values[0])
    return df[['salary_difference']].drop_duplicates()
```