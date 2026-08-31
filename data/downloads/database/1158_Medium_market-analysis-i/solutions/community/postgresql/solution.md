# ✅ Simple solution using GROUP BY and CASE WHEN ✅

**Author:** Daniel_Charles_J
**Votes:** 2
**Link:** [https://leetcode.com/problems/market-analysis-i/solutions/5890097/](https://leetcode.com/problems/market-analysis-i/solutions/5890097/)

---


# Approach
<!-- Describe your approach to solving the problem. -->
For in this Scenario we can skip the Items table, We need to JOIN the Users and Orders table.

We should not add the date condition in the WHERE, instead if we use Inside the COUNT function it will count only who bought on '2019'.

We need to GROUP BY the user_id, MAX(join_date) used to get Single value from the join_date.


# Code
```postgresql []
-- Write your PostgreSQL query statement below
SELECT user_id as buyer_id, MAX(join_date) as join_date,
COUNT(CASE WHEN o.order_date BETWEEN '2019-01-01' AND '2019-12-31' THEN 1 ELSE NULL END) AS orders_in_2019 
FROM Users u LEFT JOIN Orders o ON u.user_id = o.buyer_id
GROUP BY user_id

```