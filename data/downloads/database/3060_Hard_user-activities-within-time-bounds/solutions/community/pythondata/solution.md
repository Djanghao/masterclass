# Solution with windows func and grouping

**Author:** Inveterate_Enthusiast
**Votes:** 0
**Link:** [https://leetcode.com/problems/user-activities-within-time-bounds/solutions/6137356/](https://leetcode.com/problems/user-activities-within-time-bounds/solutions/6137356/)

---

# Code on Python
```python
import pandas as pd
import numpy as np

def user_activities(sessions: pd.DataFrame) -> pd.DataFrame:
    sessions.sort_values(by=["user_id", "session_start", "session_end"], ascending=[True, True, True], inplace=True)
    sessions["prev_end"] = sessions.groupby(by=["user_id", "session_type"], as_index=False)["session_end"].shift(1)
    sessions["bool"] = np.where(
        (~sessions["prev_end"].isna())
        &
        (((sessions["session_start"] - sessions["prev_end"]).dt.total_seconds() / (60 * 60)) <= 12),
        1, 0
    )
    return (sessions
            .groupby(by=["user_id", "session_type"], as_index=False)
            .agg(days=("bool", "sum"))
            .query("days >= 1")
            [["user_id"]].drop_duplicates(keep="first"))
```
---
# Code on PostgreSQL
```postgresql []
-- Write your PostgreSQL query statement below
WITH with_prev AS (
    SELECT
        *,
        LAG(session_end, 1) OVER(PARTITION BY user_id, session_type ORDER BY session_start ASC, session_end ASC) AS prev_end
    FROM Sessions
)
SELECT DISTINCT
    user_id
FROM with_prev

WHERE (NOT prev_end IS NULL) AND ((EXTRACT(EPOCH FROM AGE(session_start, prev_end)) / (60*60)) <= 12)

GROUP BY user_id
HAVING COUNT(*) >= 1

ORDER BY user_id ASC;
```