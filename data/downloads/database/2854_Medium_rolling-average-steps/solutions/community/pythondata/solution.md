# Today it's my the most difficult problem on LeetCode

**Author:** Inveterate_Enthusiast
**Votes:** 0
**Link:** [https://leetcode.com/problems/rolling-average-steps/solutions/5972219/](https://leetcode.com/problems/rolling-average-steps/solutions/5972219/)

---

# Code on Python
```python
import pandas as pd
import numpy as np

def rolling_average(steps: pd.DataFrame) -> pd.DataFrame:
    window = 3
    min_periods = (window - 1)
    steps.sort_values(by=["user_id", "steps_date"], ascending=[True, True], inplace=True)
    steps["dif"] = steps.groupby(by="user_id", as_index=False)["steps_date"].transform(lambda x: (x - x.shift(1)).dt.days).fillna(0)
    steps["bool"] = steps.groupby(by="user_id", as_index=True)["dif"].rolling(window=min_periods, min_periods=min_periods).apply(lambda x: x.prod()).explode().reset_index(level=0, drop=True)
    steps["rolling_average"] = np.where(steps["bool"] == 1, steps.groupby(by="user_id", as_index=True)["steps_count"].rolling(window=window, min_periods=window).mean().round(2), np.nan)
    return steps.loc[~steps["rolling_average"].isna(), ["user_id", "steps_date", "rolling_average"]]
```
---
# Code on PostgreSQL
```postgresql []
-- Write your PostgreSQL query statement below
WITH prev AS (
    SELECT
        *,
        LAG(steps_date, 1) OVER(PARTITION BY user_id ORDER BY steps_date ASC) AS prev_date
    FROM Steps
),
dif AS (
    SELECT
        *,
        COALESCE(EXTRACT(DAY FROM AGE(steps_date, prev_date)), 0) AS dif
    FROM prev
),
condition AS (
    SELECT
        *,
        COUNT(dif) OVER(PARTITION BY user_id ORDER BY steps_date ASC ROWS BETWEEN 1 PRECEDING AND CURRENT ROW) AS total_count,
        COUNT(dif) FILTER(WHERE dif = 1) OVER(PARTITION BY user_id ORDER BY steps_date ASC ROWS BETWEEN 1 PRECEDING AND CURRENT ROW) AS one_count
    FROM dif
),
bool AS (
    SELECT
        *,
        (CASE WHEN total_count = one_count THEN 1 ELSE 0 END) AS bool
    FROM condition
),
calculate AS (
    SELECT
        *,
        ROUND(AVG(steps_count) OVER(PARTITION BY user_id ORDER BY steps_date ASC ROWS BETWEEN 2 PRECEDING AND CURRENT ROW), 2) AS rolling_average
    FROM bool
)
SELECT
    user_id,
    steps_date,
    rolling_average
FROM calculate
WHERE bool = 1
ORDER BY user_id ASC, steps_date ASC;
```