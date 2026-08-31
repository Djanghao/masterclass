# Solution with grouing and merging

**Author:** Inveterate_Enthusiast
**Votes:** 0
**Link:** [https://leetcode.com/problems/hopper-company-queries-ii/solutions/6075597/](https://leetcode.com/problems/hopper-company-queries-ii/solutions/6075597/)

---

# Code on Python
```python
import pandas as pd

def hopper_company_queries(drivers: pd.DataFrame, rides: pd.DataFrame, accepted_rides: pd.DataFrame) -> pd.DataFrame:
    months = pd.DataFrame({
        "month": range(1, 12+1, 1)
    })
    rides_merged = pd.merge(
        left=rides.loc[rides["requested_at"].dt.year == 2020],
        right=accepted_rides,
        how="inner",
        on="ride_id"
    )
    rides_merged["month"] = rides_merged["requested_at"].dt.month
    drivers_merged = pd.merge(
        left=drivers,
        right=rides_merged,
        how="left",
        on="driver_id"
    )
    drivers_merged["driver_month"] = drivers_merged["join_date"].dt.month
    drivers["month"] = drivers["join_date"].dt.month
    drivers_all_grouped = drivers.loc[drivers["join_date"].dt.year == 2020].groupby(by="month", as_index=False).agg(count=("driver_id", "nunique")).sort_values(by="month", ascending=True)
    drivers_all_grouped = pd.merge(
        left=months,
        right=drivers_all_grouped,
        how="left",
        on="month"
    ).fillna(0)
    drivers_all_grouped.loc[drivers_all_grouped.index[drivers_all_grouped["month"] == 1][0], "count"] += drivers.loc[drivers["join_date"].dt.year < 2020, "driver_id"].nunique()
    drivers_all_grouped["available"] = drivers_all_grouped["count"].transform("cumsum")
    drivers_accepted_grouped = drivers_merged.loc[~drivers_merged["month"].isna()].groupby(by="month", as_index=False).agg(accepted=("driver_id", "nunique"))
    result = pd.merge(
        left=drivers_all_grouped,
        right=drivers_accepted_grouped,
        how="left",
        on="month"
    ).fillna(0)
    result["working_percentage"] = ((result["accepted"] / result["available"] * 100) + 1e-9).round(2)
    return result[["month", "working_percentage"]].sort_values(by="month", ascending=True).fillna(0)
```
---
# Code on PostgreSQL
```postgresql []
-- Write your PostgreSQL query statement below
WITH months AS (
    SELECT GENERATE_SERIES(1, 12, 1) AS month
),
drivers_grouped AS (
    SELECT
        main.month,
        (
        CASE
            WHEN month = 1 THEN COUNT(DISTINCT sub_1.driver_id)
            ELSE 0
        END
        ) + COUNT(DISTINCT sub.driver_id) AS our_count
    FROM months AS main

    LEFT JOIN Drivers AS sub
        ON EXTRACT(MONTH FROM sub.join_date) = main.month
        AND EXTRACT(YEAR FROM sub.join_date) = 2020

    LEFT JOIN Drivers AS sub_1
        ON EXTRACT(YEAR FROM sub_1.join_date) < 2020
        
    GROUP BY main.month
),
drivers_available AS (
    SELECT
        *,
        SUM(our_count) OVER(ORDER BY month ASC) AS available
    FROM drivers_grouped
),
drivers_accepted AS (
    SELECT
        main.month,
        COUNT(DISTINCT AcRides.driver_id) AS accepted
    FROM months AS main

    INNER JOIN Rides
        ON EXTRACT(MONTH FROM Rides.requested_at) = main.month
        AND EXTRACT(YEAR FROM Rides.requested_at) = 2020

    INNER JOIN AcceptedRides AS AcRides
        ON AcRides.ride_id = Rides.ride_id

    GROUP BY main.month
)
SELECT
    main.month,
    ROUND(
        (
        CASE
            WHEN NOT COALESCE(main.available, 0) = 0 THEN (COALESCE(sub.accepted, 0) / COALESCE(main.available, 0) * 100)
            ELSE 0
        END
        ),
        2
    ) AS working_percentage
FROM drivers_available AS main

LEFT JOIN drivers_accepted AS sub
    ON sub.month = main.month

ORDER BY main.month ASC;
```