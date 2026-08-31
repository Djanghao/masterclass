# Oracle solution using groupby and connect by

**Author:** c0dem0nger
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-transactions-per-visit/solutions/6087937/](https://leetcode.com/problems/number-of-transactions-per-visit/solutions/6087937/)

---

# Code
```oraclesql []
/* Write your PL/SQL query statement below */
WITH t_merge AS (
    SELECT  v.user_id,
            v.visit_date,
            t.transaction_date,
            t.amount
    FROM    visits v
    LEFT JOIN
            transactions t
    ON      v.user_id       =   t.user_id
    AND     v.visit_date    =   t.transaction_date
),
t_visit_count AS (
    SELECT  user_id,
            visit_date,
            COUNT(amount) transactions_count
    FROM    t_merge
    WHERE   amount IS NOT NULL
    GROUP BY
            user_id,
            visit_date
),
t_trans_count AS (
    SELECT  transactions_count,
            COUNT(1)    visits_count
    FROM    t_visit_count
    GROUP BY
            transactions_count
),
t_range AS (
    SELECT  LEVEL   transactions_count
    FROM    DUAL
    WHERE   (SELECT NVL(MAX(transactions_count),0) FROM t_trans_count) <> 0
    CONNECT BY LEVEL <= (SELECT NVL(MAX(transactions_count),0) FROM t_trans_count)
)
SELECT  tr.transactions_count   AS transactions_count,
        NVL(tt.visits_count,0)  AS visits_count
FROM    t_range tr
LEFT JOIN
        t_trans_count tt
ON      tr.transactions_count   =   tt.transactions_count
UNION ALL
SELECT  0                       AS transactions_count,
        COUNT(1)                AS visits_count
FROM    t_merge 
WHERE   amount IS NULL
ORDER BY
        1,2;
```