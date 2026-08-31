# Solution for Pandas

**Author:** mlearngo
**Votes:** 3
**Link:** [https://leetcode.com/problems/project-employees-ii/solutions/4066013/](https://leetcode.com/problems/project-employees-ii/solutions/4066013/)

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

def project_employees_ii(project: pd.DataFrame, employee: pd.DataFrame) -> pd.DataFrame:
    df = project.groupby('project_id').size().reset_index(name='cnt')
    max_cnt = df['cnt'].max()
 
    return df[df['cnt'] == max_cnt][['project_id']]
```