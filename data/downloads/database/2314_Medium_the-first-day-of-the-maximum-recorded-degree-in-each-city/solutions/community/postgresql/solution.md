# Easy solution

**Author:** Inveterate_Enthusiast
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-first-day-of-the-maximum-recorded-degree-in-each-city/solutions/5897057/](https://leetcode.com/problems/the-first-day-of-the-maximum-recorded-degree-in-each-city/solutions/5897057/)

---

# Code on Python
```python
import pandas as pd

def find_the_first_day(weather: pd.DataFrame) -> pd.DataFrame:
    sorted = weather.sort_values(by=["degree", "day"], ascending=[False, True])
    sorted["rank"] = sorted.groupby(by="city_id", as_index=False)["degree"].rank(method="first", ascending=False)
    return sorted.loc[sorted["rank"] == 1].drop(labels="rank", axis=1).sort_values(by="city_id", ascending=True)
```
---
# Code on PostgreSQL
```postgresql []
-- Write your PostgreSQL query statement below
WITH ranked AS (
    SELECT
        *,
        RANK() OVER(PARTITION BY city_id ORDER BY degree DESC, day ASC) AS our_rank
        FROM Weather
)
SELECT
    city_id,
    day,
    degree
FROM ranked
WHERE our_rank = 1
ORDER BY city_id ASC;
```