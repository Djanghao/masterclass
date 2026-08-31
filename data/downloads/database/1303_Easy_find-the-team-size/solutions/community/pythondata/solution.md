# Pandas oneliner with assign and transform

**Author:** piocarz
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-the-team-size/solutions/4102465/](https://leetcode.com/problems/find-the-team-size/solutions/4102465/)

---

# Approach
- `.assign()` is method of creating column in line
- `.transform()` broadcast aggregated value to all members of group

# Code
```
import pandas as pd

def team_size(employee: pd.DataFrame) -> pd.DataFrame:
    return employee.assign(team_size = employee.groupby("team_id").transform("count")).iloc[:,[0,2]]
```