# Pandas Simple Solution

**Author:** docxeg249
**Votes:** 0
**Link:** [https://leetcode.com/problems/all-the-matches-of-the-league/solutions/4850206/](https://leetcode.com/problems/all-the-matches-of-the-league/solutions/4850206/)

---

# Code
```
import pandas as pd

def find_all_matches(teams: pd.DataFrame) -> pd.DataFrame:
    teams1 = teams.copy()
    teams1.columns = ["home_team"]
    teams2 = teams.copy()
    teams2.columns = ["away_team"]
    result = pd.merge(teams1,teams2,how = "cross")
    result = result[result['home_team'] != result['away_team']]
    return result 
```