# pandas ||| 1 line, sort & drop || T/S: 68% / 100%

**Author:** Spaulding_
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-latest-salaries/solutions/4155057/](https://leetcode.com/problems/find-latest-salaries/solutions/4155057/)

---

```
import pandas as pd

def find_latest_salaries(salary: pd.DataFrame) -> pd.DataFrame:

    return salary.sort_values(['emp_id', 'salary'],
                             ).drop_duplicates('emp_id', keep = 'last')
```
[https://leetcode.com/problems/find-latest-salaries/submissions/1072121173/?lang=pythondata](http://)


I could be wrong, but I think that time complexity is *O*(*N*log*N*) and space complexity is *O*(*N*), in which *N* ~ `len(salary)`.