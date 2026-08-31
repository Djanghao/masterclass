# Easy solution

**Author:** Inveterate_Enthusiast
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-times-a-driver-was-a-passenger/solutions/5868634/](https://leetcode.com/problems/number-of-times-a-driver-was-a-passenger/solutions/5868634/)

---

# Code on Python
```python
import pandas as pd

def driver_passenger(rides: pd.DataFrame) -> pd.DataFrame:
    merged = pd.merge(
        left=rides[["driver_id"]].drop_duplicates(subset="driver_id", keep="first"),
        right=rides[["passenger_id", "ride_id"]],
        how="left",
        left_on="driver_id",
        right_on="passenger_id"
    )
    grouped = merged.groupby(by="driver_id", as_index=False).agg(cnt=("ride_id", "count"))
    return grouped
```
---
# Code on PostgreSQL
```postgresql []
-- Write your PostgreSQL query statement below
SELECT main.driver_id, COALESCE(COUNT(sub.ride_id), 0) AS cnt
FROM (SELECT DISTINCT driver_id FROM Rides) AS main
LEFT JOIN
Rides AS sub
ON main.driver_id = sub.passenger_id
GROUP BY main.driver_id;
```