# Solution with ranking and np.where

**Author:** Inveterate_Enthusiast
**Votes:** 1
**Link:** [https://leetcode.com/problems/premier-league-table-ranking-ii/solutions/6023947/](https://leetcode.com/problems/premier-league-table-ranking-ii/solutions/6023947/)

---

# Code on Python
```python
import pandas as pd
import numpy as np

def calculate_team_tiers(team_stats: pd.DataFrame) -> pd.DataFrame:
    team_stats["points"] = (team_stats["wins"] * 3) + (team_stats["draws"])
    team_stats["position"] = team_stats["points"].rank(method="min", ascending=False)
    max_pos = team_stats["team_id"].nunique()
    team_stats["tier"] = np.where(
        team_stats["position"] <= np.ceil(max_pos * 0.33), "Tier 1",
        (np.where(
            team_stats["position"] > np.ceil(max_pos * (1-0.33)), "Tier 3",
            "Tier 2"
        ))
    )
    return team_stats[["team_name", "points", "position", "tier"]].sort_values(by=["points", "team_name"], ascending=[False, True])
```
---
# Code on PostgreSQL
```postgresql []
-- Write your PostgreSQL query statement below
WITH with_points AS (
    SELECT
        *,
        ((wins * 3) + draws) AS points
    FROM TeamStats
),
ranked AS (
    SELECT
        *,
        RANK() OVER(ORDER BY points DESC) AS position,
        COUNT(team_id) OVER() AS max_pos
    FROM with_points
)
SELECT
    team_name,
    points,
    position,
    (
        CASE
            WHEN position <= CEIL(max_pos * 0.33) THEN 'Tier 1'
            WHEN position > CEIL(max_pos * (1 - 0.33)) THEN 'Tier 3'
            ELSE 'Tier 2'
        END
    ) AS tier
FROM ranked

ORDER BY points DESC, team_name ASC;
```