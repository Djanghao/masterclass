# ✅Easiest Basic Sql Solution |4 Approaches| Beginner Level to Advance🏆

**Author:** dev_yash_
**Votes:** 217
**Link:** [https://leetcode.com/problems/rising-temperature/solutions/5353703/](https://leetcode.com/problems/rising-temperature/solutions/5353703/)

---

### Approach 1(Basic) : Simple Join
```
--My SQL
SELECT W1.id
FROM Weather W1
JOIN Weather W2
ON W1.recordDate = DATE_ADD(W2.recordDate, INTERVAL 1 DAY)
WHERE W1.temperature > W2.temperature;

--ms sql server
SELECT W1.id
FROM Weather W1
JOIN Weather W2
ON W1.recordDate = DATEADD(day, 1, W2.recordDate)
WHERE W1.temperature > W2.temperature;
```

<br>
Weather W1 and Weather W2 are aliases for the Weather table. This means we're treating the Weather table as if it's two separate tables to compare data within the same table.

First, visualize the joint table:
| W1.id | W1.recordDate | W1.temperature | W2.id | W2.recordDate | W2.temperature |
|-------|---------------|----------------|-------|---------------|----------------|
| 2     | 2015-01-02    | 25             | 1     | 2015-01-01    | 10             |
| 3     | 2015-01-03    | 20             | 2     | 2015-01-02    | 25             |
| 4     | 2015-01-04    | 30             | 3     | 2015-01-03    | 20             |

The key logic happens in this line:
```
ON W1.recordDate = DATE_ADD(W2.recordDate, INTERVAL 1 DAY)
```
DATE_ADD(W2.recordDate, INTERVAL 1 DAY) adds one day to the recordDate of W2. By doing this, we're looking for a row in W1 where the recordDate is exactly one day after the recordDate of a row in W2.
In simpler terms: For each row in W2, we find the corresponding row in W1 that represents the next day.

***Example:***
Suppose W2.recordDate is 2015-01-01.
DATE_ADD(W2.recordDate, INTERVAL 1 DAY) would be 2015-01-02.
The JOIN will match W1.recordDate with 2015-01-02.

Finally, we use the WHERE clause:
```
WHERE W1.temperature > W2.temperature
```
This filters the result to only include cases where the temperature on the day represented by W1 is higher than the temperature on the previous day (W2).
This gives us the desired answer.
| id |
|---|
|2|
|4|
<br>

### Approach 2 : Subquery
```
SELECT id
FROM Weather w1
WHERE temperature > (
    SELECT temperature
    FROM Weather w2
    WHERE w2.recordDate = DATE_SUB(w1.recordDate, INTERVAL 1 DAY)
);
```

### Approach 3 : DateOff Simple
```
-- Select the IDs from Weather where the temperature is higher than the previous day
SELECT w1.id
FROM Weather w1, Weather w2
WHERE DATEDIFF(w1.recordDate, w2.recordDate) = 1
  AND w1.temperature > w2.temperature;
  ```
  ### Approach 4 (Advance): CTE+LAG
  ```
-- Create a CTE to calculate the previous day's temperature and date
WITH q1 AS (
    SELECT 
        *,
        LAG(temperature) OVER (ORDER BY recordDate) AS previous_day_temperature,
        LAG(recordDate) OVER (ORDER BY recordDate) AS previous_Date
    FROM Weather
)

-- Select the IDs where the temperature is higher than the previous day
-- and the previous day exists (difference is exactly 1 day)
SELECT id
FROM q1
WHERE temperature > previous_day_temperature
  AND DATEDIFF(recordDate, previous_Date) = 1;
```
##### **STAY COOL STAY DISCIPLINED..!**

![image](./images/0.gif)