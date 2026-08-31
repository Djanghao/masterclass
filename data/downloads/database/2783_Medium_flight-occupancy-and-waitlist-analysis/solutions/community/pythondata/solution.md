# Solution with ranking

**Author:** Inveterate_Enthusiast
**Votes:** 0
**Link:** [https://leetcode.com/problems/flight-occupancy-and-waitlist-analysis/solutions/5933714/](https://leetcode.com/problems/flight-occupancy-and-waitlist-analysis/solutions/5933714/)

---

# Code on Python
```python
import pandas as pd

def waitlist_analysis(flights: pd.DataFrame, passengers: pd.DataFrame) -> pd.DataFrame:
    passengers["rank"] = passengers.groupby(by="flight_id", as_index=False)["passenger_id"].rank(method="dense")
    merged = pd.merge(
        left=passengers,
        right=flights,
        how="left",
        on="flight_id"
    )
    merged["bool_1"] = merged["rank"] <= merged["capacity"]
    merged["bool_2"] = merged["rank"] > merged["capacity"]
    grouped = merged.groupby(by="flight_id", as_index=False).agg(booked_cnt=("bool_1", "sum"), waitlist_cnt=("bool_2", "sum"))
    return pd.merge(left=flights, right=grouped, how="left", on="flight_id").fillna(0).drop(labels="capacity", axis=1).sort_values(by="flight_id", ascending=True)
```
---
# Code on PostgreSQL
```postgresql []
-- Write your PostgreSQL query statement below
WITH with_bools AS (
    SELECT
        main.passenger_id,
        main.flight_id,
        (COALESCE(sub.capacity, 0) >= DENSE_RANK() OVER(PARTITION BY main.flight_id ORDER BY main.passenger_id ASC)) AS bool
    FROM Passengers AS main

    LEFT JOIN Flights AS sub
    ON sub.flight_id = main.flight_id
),
grouped AS (
    SELECT
        flight_id,
        SUM(CASE WHEN bool = TRUE THEN 1 ELSE 0 END) AS booked_cnt,
        SUM(CASE WHEN bool = FALSE THEN 1 ELSE 0 END) AS waitlist_cnt
    FROM with_bools
    GROUP BY flight_id
)
SELECT
    main.flight_id,
    COALESCE(sub.booked_cnt, 0) AS booked_cnt,
    COALESCE(sub.waitlist_cnt, 0) AS waitlist_cnt
FROM Flights AS main

LEFT JOIN grouped AS sub
ON sub.flight_id = main.flight_id

ORDER BY main.flight_id ASC;
```