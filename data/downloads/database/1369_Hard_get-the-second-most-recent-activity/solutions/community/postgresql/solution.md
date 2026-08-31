# Solution with ranking

**Author:** Inveterate_Enthusiast
**Votes:** 0
**Link:** [https://leetcode.com/problems/get-the-second-most-recent-activity/solutions/6062913/](https://leetcode.com/problems/get-the-second-most-recent-activity/solutions/6062913/)

---

# Code on Python
```python
import pandas as pd
import numpy as np

def second_most_recent(user_activity: pd.DataFrame) -> pd.DataFrame:
    columns = user_activity.columns.values
    user_activity["rank"] = user_activity.groupby(by="username", as_index=False)["endDate"].rank(method="dense", ascending=False)
    user_activity["count"] = user_activity.groupby(by="username", as_index=False)["endDate"].transform("count")
    user_activity["pointer"] = np.where(
        (user_activity["count"] > 1) & (user_activity["rank"] == 2), 1,
        np.where(
            (user_activity["count"] == 1) & (user_activity["rank"] == 1), 1,
            0
        )
    )
    return user_activity.loc[user_activity["pointer"] == 1, columns]
```
---
# Code on PostgreSQL
```postgresql []
-- Write your PostgreSQL query statement below
WITH ranked AS (
    SELECT
        *,
        DENSE_RANK() OVER(PARTITION BY username ORDER BY endDate DESC) AS our_rank,
        COUNT(endDate) OVER(PARTITION BY username) AS our_count
    FROM UserActivity
)
SELECT
    username,
    activity,
    startDate,
    endDate
FROM ranked
WHERE ((our_count > 1) AND (our_rank = 2)) 
OR ((our_count = 1) AND (our_rank = 1));
```