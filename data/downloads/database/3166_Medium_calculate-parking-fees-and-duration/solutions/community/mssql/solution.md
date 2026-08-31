# Simple solution with CTE - beats 86.92%

**Author:** esgranet
**Votes:** 0
**Link:** [https://leetcode.com/problems/calculate-parking-fees-and-duration/solutions/6095981/](https://leetcode.com/problems/calculate-parking-fees-and-duration/solutions/6095981/)

---

# Code
```mssql []
/* Write your T-SQL query statement below */
WITH ParkingTime (car_id, lot_id, ranking) AS (
    SELECT car_id, lot_id,
        ROW_NUMBER() OVER(PARTITION BY car_id ORDER BY SUM(DATEDIFF(second, entry_time, exit_time)) DESC)
    FROM ParkingTransactions
    GROUP BY car_id, lot_id
)
SELECT A.car_id, 
    SUM(A.fee_paid) AS total_fee_paid, 
    ROUND(SUM(A.fee_paid * 60.0) / SUM(DATEDIFF(minute, A.entry_time, A.exit_time)), 2) AS avg_hourly_fee, 
    B.lot_id AS most_time_lot
FROM ParkingTransactions AS A
INNER JOIN ParkingTime AS B
ON A.car_id = B.car_id AND B.ranking = 1
GROUP BY A.car_id, B.lot_id
ORDER BY A.car_id

```