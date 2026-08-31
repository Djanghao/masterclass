# Pandas three approaches. Beginner-friendly with explanation!

**Author:** heir-of-god
**Votes:** 56
**Link:** [https://leetcode.com/problems/display-the-first-three-rows/solutions/4160453/](https://leetcode.com/problems/display-the-first-three-rows/solutions/4160453/)

---

# Approach
I found 3 ways to solve this problem.
1. We use the dataframe method "head" with parameter 3 which returns the first 3 rows.
2. We use a slice - as in a regular list, we simply take elements from 0 to 3, not inclusive, getting the first rows with indices 0, 1 and 2.
3. We use the iloc attribute and also make a slice, where we take the first three rows and ALL columns.

If you like my effort or did something simillar - upvote me please <3 Thanks and good luck!
![image.png](./images/0.png)

# 1. .head
```
import pandas as pd

def selectFirstRows(employees: pd.DataFrame) -> pd.DataFrame:
    return employees.head(3)
```
# 2. With slicing.
```
import pandas as pd

def selectFirstRows(employees: pd.DataFrame) -> pd.DataFrame:
    return employees[0:3]
```
# 3. With .iloc

```
import pandas as pd

def selectFirstRows(employees: pd.DataFrame) -> pd.DataFrame:
    return employees.iloc[:3, :]
```