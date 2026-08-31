# pandas || 2 lines, merge and groupby || T/S: 99% / 99%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/project-employees-i/solutions/5162529/](https://leetcode.com/problems/project-employees-i/solutions/5162529/)

---

```
import pandas as pd

def project_employees_i(project: pd.DataFrame, employee: pd.DataFrame) -> pd.DataFrame:

    df = pd.merge(project, employee, how='left')

    return df[['project_id','experience_years']
                    ].groupby('project_id').mean().round(2).reset_index(
                    ).rename(columns = {'experience_years':'average_years'})
```
[https://leetcode.com/problems/project-employees-i/submissions/1070419586/](https://leetcode.com/problems/project-employees-i/submissions/1070419586/)



I could be wrong, but I think that time complexity is *O*(*N*)  and space complexity is *O*(*U*), in which *N* ~ `len()`.

