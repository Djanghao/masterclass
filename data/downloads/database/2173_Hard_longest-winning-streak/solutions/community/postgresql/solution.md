# Solution with grouping and windows func

**Author:** Inveterate_Enthusiast
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-winning-streak/solutions/6100322/](https://leetcode.com/problems/longest-winning-streak/solutions/6100322/)

---

# Code on Python
```pythondata []
import pandas as pd
import numpy as np

def longest_winning_streak(matches: pd.DataFrame) -> pd.DataFrame:
    win = "Win"
    matches.sort_values(by="match_day", ascending=True, inplace=True)
    matches["extra_col"] = np.where(matches["result"] != win, 1, 0)
    matches["bool"] = np.where(matches["result"] != win, 0, 1)
    matches["group"] = matches.groupby(by="player_id", as_index=False)["extra_col"].transform("cumsum")
    grouped = matches.groupby(by=["player_id", "group"], as_index=False).agg(cnt=("bool", "sum"))
    return grouped.groupby(by="player_id", as_index=False).agg(longest_streak=("cnt", "max"))
```
---
# Code on PostgreSQL
```sql
WITH extra_col AS (
    SELECT
        *,
        (CASE WHEN NOT result = 'Win' THEN 1 ELSE 0 END) AS extra_col
    FROM Matches
),
our_window AS (
    SELECT
        *,
        SUM(extra_col) OVER(PARTITION BY player_id ORDER BY match_day ASC) AS cum_sum
    FROM extra_col
),
grouped AS (
    SELECT
        player_id,
        cum_sum,
        SUM(CASE WHEN result = 'Win' THEN 1 ELSE 0 END) AS cnt
    FROM our_window

    GROUP BY player_id, cum_sum
)
SELECT
    player_id,
    MAX(cnt) AS longest_streak
FROM grouped
GROUP BY player_id;
```