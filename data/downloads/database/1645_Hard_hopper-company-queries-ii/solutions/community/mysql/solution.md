# Elegant Solution with Recursive CTE

**Author:** kps_data
**Votes:** 2
**Link:** [https://leetcode.com/problems/hopper-company-queries-ii/solutions/2831258/](https://leetcode.com/problems/hopper-company-queries-ii/solutions/2831258/)

---

# Intuition
This is a class "Gapless Grid" problem - therefore we know we will first need to create a CTE including all the months we care about.

Then, we need to calculate the drivers available in each month, using their join date.

Next, we calculate the number of active drivers each month.

Finally, we join these two calculations together and calculate the working percentage.

# Code
```
WITH RECURSIVE Months AS (
  SELECT
    DATE '2020-01-31' AS month_date
  UNION
  SELECT
    DATE_ADD(month_date, INTERVAL 1 MONTH)
  FROM
    Months
  WHERE
    month_date < DATE '2020-11-30'
),
DriversAvailableByMonth AS (
  SELECT
    EXTRACT(MONTH FROM M.month_date) AS month,
    COUNT(DISTINCT D.driver_id) AS num_drivers_available
  FROM
    Months AS M
  LEFT JOIN
    Drivers AS D
    ON EXTRACT(YEAR_MONTH FROM D.join_date) <= EXTRACT(YEAR_MONTH FROM M.month_date)
  GROUP BY 1
),
ActiveDriversByMonth AS (
  SELECT
    EXTRACT(MONTH FROM R.requested_at) AS month,
    COUNT(DISTINCT A.driver_id) AS num_drivers_active
  FROM
    Rides AS R
  INNER JOIN
    AcceptedRides AS A
    USING (ride_id)
  WHERE
    EXTRACT(YEAR FROM R.requested_at) = 2020
  GROUP BY 1
)
SELECT
  month,
  COALESCE(ROUND(num_drivers_active/num_drivers_available*100,2),0) AS working_percentage
FROM
  DriversAvailableByMonth AS M
LEFT JOIN
  ActiveDriversByMonth AS A
  USING (month)
ORDER BY MONTH
```