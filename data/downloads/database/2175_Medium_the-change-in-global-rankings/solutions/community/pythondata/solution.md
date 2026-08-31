# [pandas] rank by multiple columns (sort_values and reset the indices)

**Author:** cometolife
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-change-in-global-rankings/solutions/4158598/](https://leetcode.com/problems/the-change-in-global-rankings/solutions/4158598/)

---

# Code
```
import pandas as pd

def global_ratings_change(team_points: pd.DataFrame, points_change: pd.DataFrame) -> pd.DataFrame:
    team_points = team_points.sort_values(by=['points', 'name'], ascending=[False, True]).reset_index(drop=True).reset_index(names='old_rank')
    team_points['old_rank'] = team_points['old_rank'] + 1

    df = pd.merge(team_points, points_change, on='team_id', how='left')
    df['new_points'] = df['points'] + df['points_change']
    df = df.sort_values(by=['new_points', 'name'], ascending=[False, True]).reset_index(drop=True).reset_index(names='new_rank')
    df['new_rank'] = df['new_rank'] + 1
    df['rank_diff'] = df['old_rank'] - df['new_rank']
    
    return df[['team_id', 'name', 'rank_diff']]
```