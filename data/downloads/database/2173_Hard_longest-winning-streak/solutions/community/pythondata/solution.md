# [pandas] cumsum

**Author:** cometolife
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-winning-streak/solutions/4160861/](https://leetcode.com/problems/longest-winning-streak/solutions/4160861/)

---

# Code
```
import pandas as pd

def longest_winning_streak(matches: pd.DataFrame) -> pd.DataFrame:
    matches = matches.sort_values(by=['player_id', 'match_day'])
    matches['not_win'] = np.where(matches['result'] == 'Win', 0, 1)
    matches['group_id'] = matches.groupby('player_id')['not_win'].cumsum()
    df = matches.groupby(['player_id', 'group_id']).agg(streak=('result', lambda x: (x == 'Win').sum())).reset_index()
    df = df.groupby('player_id')['streak'].max().reset_index()

    return df[['player_id', 'streak']].rename(columns={'streak':'longest_streak'})
```