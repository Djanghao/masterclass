# step by step solution with explanation

**Author:** little_explorer
**Votes:** 0
**Link:** [https://leetcode.com/problems/hopper-company-queries-i/solutions/6072637/](https://leetcode.com/problems/hopper-company-queries-i/solutions/6072637/)

---

# Intuition
My intuition was to calculate the active drivers and accepted rides separately, and join the results. 

I first generated all the `months` by using `generate_series`. 

When calculating the active drivers, as mentioned in the editorial, I needed to count the drivers that signed up before 2020 towards the active ones by the end of Jan; so, they are assigned a month of 1. The calcuation, though not explicitly specified in the question, is actually a rolling count of the active drivers, but not just grouping their numbers by their join month. I then left joined `months` with the calculation of active drivers. 

Calculating the accepted rides is just joining `rides` with `accepted_rides`, and `months` is left joined with the accepted rides. 

Finally, `drivers_2020` and `accepted_rides` are joined for the final results. 

# Approach
See query. 

# Code
```postgresql []
-- Write your PostgreSQL query statement below
WITH months AS (
  SELECT generate_series(1, 12) AS month
),
drivers_2020 AS (
  SELECT
    m.month,
    SUM(COALESCE(d.driver_count, 0)) OVER (ORDER BY m.month) AS active_drivers
  FROM
    months m
  LEFT JOIN (
    SELECT
      CASE 
        WHEN extract(year FROM join_date) <= 2019 
        THEN 1 
        ELSE extract(month FROM join_date) 
      END AS month,
      COUNT(driver_id) AS driver_count
    FROM
      drivers
    WHERE
      extract(year FROM join_date) <= 2020
    GROUP BY
      1
    ) d 
  USING 
    (month)
),
accepted_rides AS (
  SELECT
    m.month,
    coalesce(count(t.ride_id), 0) AS accepted_rides
  FROM
    months m
  LEFT JOIN (
    SELECT
      r.ride_id,
      extract(month FROM requested_at) AS month
    FROM
      rides r
    JOIN 
      acceptedrides a 
    USING 
      (ride_id)
    WHERE
      extract(year FROM requested_at) = 2020
    ) t 
  USING 
    (month)
  GROUP BY
    1
)

SELECT
  d.month,
  active_drivers,
  accepted_rides
FROM
  drivers_2020 d
JOIN 
  accepted_rides a 
USING 
  (month)
ORDER BY
  1;
```