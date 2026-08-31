# POSTGRESQL clean solution with window functions

**Author:** nadavst
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-third-transaction/solutions/6026382/](https://leetcode.com/problems/find-third-transaction/solutions/6026382/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```postgresql []
-- Write your PostgreSQL query statement below
WITH a AS (
SELECT
user_id,
spend,
transaction_date,
DENSE_RANK() OVER(PARTITION BY user_id order by transaction_date ASC) as transation_number,
COUNT(*) OVER(PARTITION BY user_id order by transaction_date ASC) as total_transactions,
MAX(spend) OVER(PARTITION BY user_id order by transaction_date ASC ROWS BETWEEN 2 Preceding AND 1 Preceding) as max_prev_transactions
FROM Transactions t)


SELECT
user_id, 
spend AS third_transaction_spend,
transaction_date AS third_transaction_date
FROM a
WHERE total_transactions >=3
AND transation_number = 3
AND spend > max_prev_transactions

ORDER BY user_id ASC
```