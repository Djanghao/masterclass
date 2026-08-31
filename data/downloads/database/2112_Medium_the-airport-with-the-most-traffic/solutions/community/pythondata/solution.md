# Solution with grouping and concating

**Author:** Inveterate_Enthusiast
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-airport-with-the-most-traffic/solutions/5842597/](https://leetcode.com/problems/the-airport-with-the-most-traffic/solutions/5842597/)

---

# Code on Python
```python
import pandas as pd

def airport_with_most_traffic(flights: pd.DataFrame) -> pd.DataFrame:
    concated = pd.concat([
        flights.rename(columns={"departure_airport": "airport_id"})[["airport_id", "flights_count"]],
        flights.rename(columns={"arrival_airport": "airport_id"})[["airport_id", "flights_count"]]
    ])
    grouped = concated.groupby(by="airport_id", as_index=False).agg(count=("flights_count", "sum"))
    return grouped.loc[grouped["count"] == grouped["count"].max(), ["airport_id"]]
```
---
# Code on PostgreSQL
```postgresql []
-- Write your PostgreSQL query statement below
WITH unioned AS
    (
    SELECT departure_airport AS airport_id, flights_count AS count
    FROM Flights

    UNION ALL

    SELECT arrival_airport AS airport_id, flights_count AS count
    FROM Flights
    ),
grouped AS
    (
    SELECT airport_id, SUM(count) AS count
    FROM unioned
    GROUP BY airport_id
    )
SELECT airport_id
FROM grouped
WHERE count = (SELECT MAX(count) FROM grouped);
```