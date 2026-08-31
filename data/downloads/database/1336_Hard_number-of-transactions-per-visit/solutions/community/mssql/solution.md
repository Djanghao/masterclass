# Easy CTE methods that outcompeted 96%

**Author:** Daddydanny
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-transactions-per-visit/solutions/5712738/](https://leetcode.com/problems/number-of-transactions-per-visit/solutions/5712738/)

---



# Code
```mssql []
/* Write your T-SQL query statement below */
WITH full_merge AS (
    SELECT V.*, T.user_id AS user_id_2, T.transaction_date, T.amount
    FROM Visits V
    LEFT OUTER JOIN Transactions T
    ON V.user_id = T.user_id AND V.visit_date = T.transaction_date
),
trans_count_t AS (
    SELECT user_id, visit_date, COUNT(amount) AS transactions_count
    FROM full_merge
    GROUP BY user_id, visit_date
),
visit_count_t AS (
    SELECT transactions_count, COUNT(*) AS visits_count
    FROM trans_count_t
    GROUP BY transactions_count
),
max_trans_count AS (
    SELECT MAX(transactions_count) AS max_count
    FROM visit_count_t
),
-- Recursive CTE to generate the sequence
numbers AS (
    SELECT (SELECT max_count FROM max_trans_count) AS transactions_count
    UNION ALL
    SELECT transactions_count - 1
    FROM numbers
    WHERE transactions_count > 0
)
SELECT n.transactions_count, CASE WHEN vc.visits_count is null THEN 0 ELSE vc.visits_count END AS visits_count
FROM numbers n
LEFT OUTER JOIN visit_count_t vc
ON n.transactions_count = vc.transactions_count
ORDER BY transactions_count;

```