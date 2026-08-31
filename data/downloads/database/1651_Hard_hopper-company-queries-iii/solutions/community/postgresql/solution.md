# Solution with grouping and windows func

**Author:** Inveterate_Enthusiast
**Votes:** 0
**Link:** [https://leetcode.com/problems/hopper-company-queries-iii/solutions/6078724/](https://leetcode.com/problems/hopper-company-queries-iii/solutions/6078724/)

---

# Code on Python
```python
import pandas as pd

def hopper_company_queries(drivers: pd.DataFrame, rides: pd.DataFrame, accepted_rides: pd.DataFrame) -> pd.DataFrame:
    months = pd.DataFrame({
        "month": range(1, 12+1, 1)
    })
    rides_merged = pd.merge(
        left=rides,
        right=accepted_rides,
        how="inner",
        on="ride_id"
    ).query("requested_at.dt.year == 2020")
    rides_merged["month"] = rides_merged["requested_at"].dt.month
    merged = pd.merge(
        left=months,
        right=rides_merged,
        how="left",
        on="month"
    )[["month", "ride_distance", "ride_duration"]].fillna(0)
    grouped = (merged
               .groupby(by="month", as_index=False)
               .agg(distance_sum=("ride_distance", "sum"), duration_sum=("ride_duration", "sum"))
               .sort_values(by="month", ascending=True))
    grouped["average_ride_distance"] = grouped["distance_sum"].rolling(window=3, min_periods=3).mean().shift(-2).round(2)
    grouped["average_ride_duration"] = grouped["duration_sum"].rolling(window=3, min_periods=3).mean().shift(-2).round(2)
    return grouped.loc[grouped["month"] <= 10, ["month", "average_ride_distance", "average_ride_duration"]]
```
---
# Code on PostgreSQL
```postgresql []
-- Write your PostgreSQL query statement below
WITH months AS (
    SELECT GENERATE_SERIES(1, 12, 1) AS month
),
merged AS (
    SELECT
        main.month,
        SUM(COALESCE(sub.ride_distance, 0)) AS distance_sum,
        SUM(COALESCE(sub.ride_duration, 0)) AS duration_sum
    FROM months AS main

    LEFT JOIN (
        SELECT
            main.requested_at,
            sub.ride_distance,
            sub.ride_duration
        FROM Rides AS main

        INNER JOIN AcceptedRides AS sub
            ON sub.ride_id = main.ride_id
    ) AS sub
        ON EXTRACT(MONTH FROM sub.requested_at) = main.month
        AND EXTRACT(YEAR FROM sub.requested_at) = 2020

    GROUP BY main.month
),
our_window AS (
    SELECT
        month,
        ROUND(AVG(distance_sum) OVER(ORDER BY month ASC ROWS BETWEEN CURRENT ROW AND 2 FOLLOWING), 2) AS average_ride_distance,
        ROUND(AVG(duration_sum) OVER(ORDER BY month ASC ROWS BETWEEN CURRENT ROW AND 2 FOLLOWING), 2) AS average_ride_duration
    FROM merged
)
SELECT
    *
FROM our_window
WHERE month <= 10
ORDER BY month ASC;
```