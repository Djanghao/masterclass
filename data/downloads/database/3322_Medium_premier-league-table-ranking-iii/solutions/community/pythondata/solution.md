# Solution with ranking

**Author:** Inveterate_Enthusiast
**Votes:** 0
**Link:** [https://leetcode.com/problems/premier-league-table-ranking-iii/solutions/6063022/](https://leetcode.com/problems/premier-league-table-ranking-iii/solutions/6063022/)

---

# Code on Python
```python
import pandas as pd

def process_team_standings(season_stats: pd.DataFrame) -> pd.DataFrame:
    season_stats["points"] = (season_stats["wins"] * 3) + season_stats["draws"]
    season_stats["goal_difference"] = season_stats["goals_for"] - season_stats["goals_against"]
    season_stats.sort_values(by=["season_id", "points", "goal_difference", "team_name"], ascending=[True, False, False, True], inplace=True)
    season_stats["position"] = season_stats.groupby(by="season_id", as_index=False).cumcount() + 1
    return season_stats[["season_id", "team_id", "team_name", "points", "goal_difference", "position"]]
```
---
# Code on PostgreSQL
```postgresql []
-- Write your PostgreSQL query statement below
WITH points AS (
    SELECT
        *,
        ((wins * 3) + draws) AS points,
        (goals_for - goals_against) AS goal_difference
    FROM SeasonStats
),
ranked AS (
    SELECT
        *,
        DENSE_RANK() OVER(PARTITION BY season_id ORDER BY points DESC, goal_difference DESC, team_name ASC) AS position
    FROM points
)
SELECT
    season_id,
    team_id,
    team_name,
    points,
    goal_difference,
    position
FROM ranked

ORDER BY season_id ASC, position ASC, team_name ASC;
```