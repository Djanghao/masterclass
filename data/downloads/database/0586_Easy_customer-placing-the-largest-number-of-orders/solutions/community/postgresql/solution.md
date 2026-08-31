# PostgreSQL 100% working solution

**Author:** d_sushkov
**Votes:** 15
**Link:** [https://leetcode.com/problems/customer-placing-the-largest-number-of-orders/solutions/5657841/](https://leetcode.com/problems/customer-placing-the-largest-number-of-orders/solutions/5657841/)

---

# Code
```
-- Write your PostgreSQL query statement below
SELECT customer_number
FROM Orders
GROUP BY customer_number
ORDER BY COUNT(*) DESC
LIMIT 1;
```