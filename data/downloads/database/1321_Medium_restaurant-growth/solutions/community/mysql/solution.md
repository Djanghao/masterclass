# Best Optimum Solution with Explanation!

**Author:** deepankyadav
**Votes:** 352
**Link:** [https://leetcode.com/problems/restaurant-growth/solutions/3673106/](https://leetcode.com/problems/restaurant-growth/solutions/3673106/)

---

## ***Please Upvote my solution, if you find it helpful ;)***

# Intuition
The goal is to calculate the amount and average amount of customer visits for each visited_on date, considering a rolling window of the previous 7 days.

# Approach
1. We want to calculate the amount and average amount of customer visits for each visited_on date, considering a rolling window of the previous 7 days.

1. We start by selecting the visited_on date from the customer table as the main query. This will be the basis for our calculations.

1. To calculate the amount, we use a subquery within the main query. This subquery sums up the amount for each visited_on date by considering the previous 7 days. It does this by using a correlated subquery that looks for customer visits between the current visited_on date and 6 days prior.

1. Similarly, to calculate the average amount, we use another subquery within the main query. This subquery divides the sum of the amount by 7, representing the rolling window of 7 days. It also uses a correlated subquery with the same date range as the amount subquery.

1. Finally, we group the results by the visited_on date to get the final output.


# Complexity
- Time complexity:
The time complexity of this query depends on the size of the customer table and the indexing on the visited_on column. The subqueries perform calculations based on a rolling window of 7 days, which requires scanning and aggregating data within that window for each visited_on date. The overall time complexity can be approximated as $$O(n^2)$$, where n is the number of records in the customer table.

- Space complexity:
The space complexity of this query is determined by the amount of memory required to store the intermediate result sets for the subqueries and the final result set for the main query. It does not depend on the size of the customer table itself. The space complexity can be approximated as $$O(n)$$, where n is the number of records in the customer table.

# Code
```
# Write your MySQL query statement below
SELECT
    visited_on,
    (
        SELECT SUM(amount)
        FROM customer
        WHERE visited_on BETWEEN DATE_SUB(c.visited_on, INTERVAL 6 DAY) AND c.visited_on
    ) AS amount,
    ROUND(
        (
            SELECT SUM(amount) / 7
            FROM customer
            WHERE visited_on BETWEEN DATE_SUB(c.visited_on, INTERVAL 6 DAY) AND c.visited_on
        ),
        2
    ) AS average_amount
FROM customer c
WHERE visited_on >= (
        SELECT DATE_ADD(MIN(visited_on), INTERVAL 6 DAY)
        FROM customer
    )
GROUP BY visited_on;

```
***Please Upvote my solution, if you find it helpful ;)***
![6a87bc25-d70b-424f-9e60-7da6f345b82a_1673875931.8933976.jpeg](./images/0.jpeg)

