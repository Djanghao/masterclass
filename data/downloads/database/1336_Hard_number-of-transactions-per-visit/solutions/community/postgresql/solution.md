# TOOK ME 3 HOURS... Solved using tuples. Explanations provided as comments

**Author:** dg1223
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-transactions-per-visit/solutions/6036435/](https://leetcode.com/problems/number-of-transactions-per-visit/solutions/6036435/)

---

Either this is a horrible question, or it is phrased horribly. I don't see a point in explaining it step by step in details because I don't believe any sane person can solve this question in an interview setting. I thought of giving up and moving on to doing more productive things but I was already too deep into the trenches to drag myself out...

Nonetheless, I provided some explanations as comments.

# Code
```postgresql []
-- can a user make multiple visits on the same day? - assuming NO
-- each visit date has a corresponding transaction date, but 
-- each transaction date may not have a corresponding visit date

-- number of transactions that each user made in each visit
WITH visitDatesWithTransactions AS
(
    SELECT
        v.user_id, -- each user
        v.visit_date, -- each visit
        COUNT(*) AS transactions_count
    FROM
        visits v
    JOIN
        transactions t
    ON
        v.visit_date = t.transaction_date
    AND
        v.user_id = t.user_id
    GROUP BY
        1, 2
),
-- the maximum number of transactions that any user made in a single visit
-- column name is transactions_count
allTransactionCounts AS
(
    SELECT
        *
    FROM
        GENERATE_SERIES(
            0,
            (
                SELECT
                    -- if there are no transactions, then MAX will be NULL
                    -- this scenario is the same as visits having no corresponding transactions
                    COALESCE(MAX(transactions_count), 0)
                FROM
                    visitDatesWithTransactions
            )
        ) AS transactions_count
)
,
-- transaction counts for each user for each visit date
userVisitTupleWithTransactions AS
(
    SELECT
        transactions_count,
        COUNT(*) AS visits_count
    FROM
        (
            SELECT
                (v.user_id, v.visit_date) AS user_visit_tuple,
                COUNT(*) AS transactions_count
            FROM
                visits v
            JOIN
                transactions t
            ON
                v.visit_date = t.transaction_date
            AND
                v.user_id = t.user_id
            GROUP BY
                1
        )
    GROUP BY
        1
),
-- users who made 0 transactions on a visit
-- aka user, visit tuple with no corresponding record in transactions table
userVisitTupleWithNoTransactions AS
(
    SELECT
        0 AS transactions_count,
        COUNT(*) AS visits_count
    FROM
        (
            SELECT
                (user_id, visit_date) AS user_visit_tuple
            FROM
                visits
            WHERE
                (user_id, visit_date) NOT IN (
                    SELECT
                        user_id,
                        transaction_date
                    FROM
                        transactions
                )
        ) t
),
allAvailableTransactionsCount AS
(
    SELECT * 
    FROM userVisitTupleWithTransactions

    UNION ALL

    SELECT * 
    FROM userVisitTupleWithNoTransactions
)

SELECT
    transactions_count,
    COALESCE(visits_count, 0) AS visits_count
FROM
    allTransactionCounts
LEFT JOIN
    allAvailableTransactionsCount
USING
    (transactions_count)
ORDER BY
    1
```