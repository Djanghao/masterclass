# Pandas, beats 100%

**Author:** Prachi_404
**Votes:** 0
**Link:** [https://leetcode.com/problems/project-employees-iii/solutions/6090697/](https://leetcode.com/problems/project-employees-iii/solutions/6090697/)

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

def project_employees(project: pd.DataFrame, employee: pd.DataFrame) -> pd.DataFrame:
    merged = project.merge(employee, on='employee_id', how='inner')
    merged['rank'] = merged.groupby('project_id')['experience_years'].rank(method='dense', ascending=False)
    #merged= merged[['employee_id', 'name', 'experience_years', 'rank','project_id']]
    result= merged[merged['rank']==1]
    return result[['project_id','employee_id']]

```