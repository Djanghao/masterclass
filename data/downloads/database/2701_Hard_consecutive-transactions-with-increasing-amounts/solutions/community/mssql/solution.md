# CTE rank

**Author:** HeyJulie
**Votes:** 1
**Link:** [https://leetcode.com/problems/consecutive-transactions-with-increasing-amounts/solutions/3874316/](https://leetcode.com/problems/consecutive-transactions-with-increasing-amounts/solutions/3874316/)

---

# Intuition\r
<!-- Describe your first thoughts on how to solve this problem. -->\r
\r
# Approach\r
<!-- Describe your approach to solving the problem. -->\r
\r
# Complexity\r
- Time complexity:\r
<!-- Add your time complexity here, e.g. $$O(n)$$ -->\r
\r
- Space complexity:\r
<!-- Add your space complexity here, e.g. $$O(n)$$ -->\r
\r
# Code\r
```\r
WITH transaction_consective AS (\r
SELECT a.customer_id, a.transaction_date \r
FROM Transactions a, Transactions b \r
WHERE a.customer_id = b.customer_id \r
AND b.amount > a.amount AND DATEDIFF(dd,a.transaction_date,b.transaction_date) = 1),\r
\r
transaction_group AS (\r
    SELECT dateadd(dd,-ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY transaction_date),transaction_date) AS base_date, \r
    customer_id, transaction_date \r
    FROM transaction_consective\r
),\r
\r
transaction_final AS (\r
SELECT customer_id, MIN(transaction_date) AS transaction_date, COUNT(*) AS c \r
FROM transaction_group \r
GROUP BY customer_id, base_date\r
)\r
\r
SELECT customer_id, transaction_date AS consecutive_start, dateadd(dd,c,transaction_date) AS consecutive_end \r
FROM transaction_final \r
WHERE c >= 2 ORDER BY customer_id\r
```