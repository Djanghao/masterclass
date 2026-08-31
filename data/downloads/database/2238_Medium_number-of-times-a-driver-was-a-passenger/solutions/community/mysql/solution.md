# MySQL: SELECT DISTINCT with LEFT JOIN

**Author:** farlowdw
**Votes:** 13
**Link:** [https://leetcode.com/problems/number-of-times-a-driver-was-a-passenger/solutions/1947481/](https://leetcode.com/problems/number-of-times-a-driver-was-a-passenger/solutions/1947481/)

---

**Solution:**

```
SELECT
  D.driver_id,
  COUNT(R2.passenger_id) AS cnt
FROM
  (SELECT DISTINCT R1.driver_id FROM Rides R1) D
  LEFT JOIN Rides R2 ON D.driver_id = R2.passenger_id
GROUP BY
  D.driver_id;
```