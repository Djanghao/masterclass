# Solution with merging and grouping

**Author:** Inveterate_Enthusiast
**Votes:** 0
**Link:** [https://leetcode.com/problems/viewers-turned-streamers/solutions/6130302/](https://leetcode.com/problems/viewers-turned-streamers/solutions/6130302/)

---

# Code on Python
```python
import pandas as pd

def count_turned_streamers(sessions: pd.DataFrame) -> pd.DataFrame:
    sessions.sort_values(by=["user_id", "session_start", "session_end"], ascending=[True, True, True], inplace=True)
    sessions["rank"] = sessions.groupby(by="user_id", as_index=False)["session_id"].cumcount() + 1
    merged = pd.merge(
        left=sessions,
        right=sessions.loc[sessions["rank"] == 1, ["user_id", "session_type"]].rename(columns={"session_type": "first_type"}),
        how="left",
        on="user_id"
    )
    grouped = merged.loc[
        (merged["first_type"] == "Viewer")
        &
        (merged["session_type"] == "Streamer")
    ].groupby(by="user_id", as_index=False).agg(sessions_count=("session_id", "nunique"))
    return grouped.sort_values(by=["sessions_count", "user_id"], ascending=[False, False])
```
---
# Code on PostgreSQL
```postgresql []
-- Write your PostgreSQL query statement below
WITH ranked AS (
    SELECT
        *,
        DENSE_RANK() OVER(PARTITION BY user_id ORDER BY session_start ASC, session_end ASC) AS our_rank
    FROM Sessions
)
SELECT
    main.user_id,
    SUM(CASE WHEN main.session_type = 'Streamer' THEN 1 ELSE 0 END) AS sessions_count
FROM ranked AS main

LEFT JOIN (
    SELECT * FROM ranked WHERE our_rank = 1
) AS sub
    ON sub.user_id = main.user_id

WHERE sub.session_type = 'Viewer'
GROUP BY main.user_id
HAVING SUM(CASE WHEN main.session_type = 'Streamer' THEN 1 ELSE 0 END) > 0
ORDER BY sessions_count DESC, main.user_id DESC;
```