# Well Explained and Simple Short Solution

**Author:** known6643
**Votes:** 8
**Link:** [https://leetcode.com/problems/restaurant-growth/solutions/5345283/](https://leetcode.com/problems/restaurant-growth/solutions/5345283/)

---

# Intuition
we can use common table expression to extract out the desired result .

# Approach
In First cte(common table expression) we simply extract out date and sum of amount of every single day **as there can be more than 1 visitor visiting on the same date .** 
in cte2 by using first cte we extact out date , sum of amount spent last 6 days from the current day and average_amount by takiny AVG of the total amount divided by how many days are in previous (**because days can be less than 7 also if we consider teh staring days**) upto 2 decimal place .
At last we extract out visited_on(by defining the date format),visited_on,average_amount from cte2 on the condition that it should have only those entries which are of after 6 days order the result in ascending order base on the visited_on date.


# Code
```
/* Write your PL/SQL query statement below */
WITH cte AS (
    SELECT visited_on, SUM(amount) AS total_amount
    FROM Customer
    GROUP BY visited_on
),
cte2 AS (
    SELECT 
        visited_on,
        SUM(total_amount) OVER (ORDER BY visited_on ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) AS amount,
        ROUND(AVG(total_amount) OVER (ORDER BY visited_on ROWS BETWEEN 6 PRECEDING AND CURRENT ROW), 2) AS average_amount
    FROM cte
)
SELECT 
    TO_CHAR(visited_on, 'YYYY-MM-DD') AS visited_on,
    amount,
    average_amount

FROM cte2
WHERE visited_on >= (SELECT MIN(visited_on) FROM cte2) + 6
ORDER BY visited_on;

```