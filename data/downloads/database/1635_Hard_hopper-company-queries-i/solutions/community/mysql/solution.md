# Recursive cte MySQL solution faster than 100%

**Author:** ZzZ_djrteom
**Votes:** 3
**Link:** [https://leetcode.com/problems/hopper-company-queries-i/solutions/918229/](https://leetcode.com/problems/hopper-company-queries-i/solutions/918229/)

---

```
# Write your MySQL query statement below
WITH RECURSIVE year_cte AS (
# creating a year header
    SELECT MIN(YEAR(join_date)) year, MAX(YEAR(join_date)) max_year
    FROM drivers
    
    UNION ALL
    
    SELECT year + 1, max_year
    FROM year_cte
    WHERE year < max_year
),
header AS (
# adding month to the year header
    SELECT year, 1 month, 12 max_month
    FROM year_cte
    
    UNION ALL
    
    SELECT year, month + 1, max_month
    FROM header
    WHERE month < max_month
),
drivers_count AS(
# count newly registered drivers by year, month
        SELECT MAX(YEAR(join_date)) 'year', MAX(MONTH(join_date)) 'month',
               COUNT(driver_id) drivers_count
        FROM drivers
        GROUP BY LEFT(join_date, 7)
),
rides_count AS (
# count accepted rides per year, month
        SELECT MAX(YEAR(r.requested_at)) 'year', MAX(MONTH(r.requested_at)) 'month',
               COUNT(a.ride_id) accepted_rides
        FROM rides r LEFT JOIN acceptedrides a ON r.ride_id = a.ride_id
        GROUP BY LEFT(r.requested_at, 7)    
)
# filter the final table by year, can be easily modified to reflect the number for other years
SELECT month, active_drivers, accepted_rides
FROM (
	# join the the second and third table to the full header, sum over the window to give cumulative count of drivers
    SELECT t1.month, t1.year,
            IFNULL(SUM(t2.drivers_count) OVER (ORDER BY t1.year, t1.month), 0) active_drivers, 
            IFNULL(t3.accepted_rides, 0) accepted_rides
    FROM header t1 LEFT JOIN drivers_count t2 ON t1.year = t2.year AND t1.month = t2.month 
                   LEFT JOIN rides_count t3 ON t1.year = t3.year AND t1.month = t3.month
) temp
WHERE year = 2020
; 
```
