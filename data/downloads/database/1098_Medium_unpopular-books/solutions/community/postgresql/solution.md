# PostgreSQL Solution - Beats 97%

**Author:** SidYadav20
**Votes:** 1
**Link:** [https://leetcode.com/problems/unpopular-books/solutions/5055176/](https://leetcode.com/problems/unpopular-books/solutions/5055176/)

---

# Solution
```
-- Write your PostgreSQL query statement below
WITH new AS (
        SELECT
        book_id
    FROM
        Books
    WHERE
        available_from >= '2019-06-23'::date - 30
),
cte AS (
    SELECT
        l.book_id,
        l.name,
        COALESCE(SUM(r.quantity) FILTER (WHERE r.dispatch_date >= '2018-06-23'::DATE),0) AS total_quantity
    FROM
        Books l
    LEFT JOIN
        Orders r
    USING
        (book_id)
    GROUP BY
        1, 2
)
SELECT 
    book_id,
    name
FROM
    cte
WHERE
    total_quantity < 10
AND
    book_id NOT IN (SELECT book_id FROM new)
```