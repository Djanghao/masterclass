# 🌟 Explained performand PostgreSQL solution 🚀 Beats 98%+ 🌠 without JOIN or IN or NOT IN

**Author:** MathieuSoysal
**Votes:** 7
**Link:** [https://leetcode.com/problems/sales-person/solutions/5079125/](https://leetcode.com/problems/sales-person/solutions/5079125/)

---

![Proof of beats 98%+](./images/0.png)

# Explain

1. `WITH red_company_id AS (...)`: This is a CTE that selects the `com_id` (company ID) from the `Company` table where the company's name is `'RED'`. The result of this CTE is a temporary result set that can be referenced within the subsequent `SELECT` statement.

2. `SELECT name FROM SalesPerson AS s WHERE NOT EXISTS (...)`: This part of the query selects the name of salespeople from the `SalesPerson` table (aliased as `s`) who do not have any matching records in the `Orders` table for the company with the `com_id` found in the CTE.

3. The `NOT EXISTS` subquery checks for the absence of orders made by each salesperson (`s.sales_id = o.sales_id`) for the `'RED'` company (`AND com_id = (SELECT com_id FROM red_company_id)`).


## What is performand in this query


- **Usage of CTE to avoid multiple execution**
    - The use of a CTE for the company ID lookup is efficient if the name column in the Company table is indexed, as it will quickly find the ID for the `'RED'` company.

- **Usage of NOT EXISTS**
    - The `NOT EXISTS` clause is generally efficient for checking non-existence because it stops as soon as it finds a match, meaning it doesn't need to process all rows once it determines that a condition is met. In this case, it's used to ensure that a salesperson has no orders for the 'RED' company.

- **Not have any expensive clause**
    - We do not have any expensive clause like `IN`, `JOIN`, `GROUP BY`, `ORDER BY`.

- **Usage of = instead of IN clause**
    - `=` Operator: This is used for equality comparison between a column and a single value. It is very efficient, especially if the column being compared is indexed. The database engine can quickly locate the row with the matching value using the index.


# Code
``` PostgreSQL []
WITH red_company_id AS (
    SELECT com_id
    FROM Company
    WHERE name = 'RED'
)


SELECT name
FROM SalesPerson AS s
WHERE NOT EXISTS (
    SELECT 1
    FROM Orders AS o
    WHERE s.sales_id = o.sales_id  
            AND com_id = (SELECT com_id FROM red_company_id)
)
```
``` MySQL []
WITH red_company_id AS (
    SELECT com_id
    FROM Company
    WHERE name = 'RED'
)


SELECT name
FROM SalesPerson AS s
WHERE NOT EXISTS (
    SELECT 1
    FROM Orders AS o
    WHERE s.sales_id = o.sales_id  
            AND com_id = (SELECT com_id FROM red_company_id)
)
```
``` Oracle []
WITH red_company_id AS (
    SELECT com_id
    FROM Company
    WHERE name = 'RED'
)


SELECT name
FROM SalesPerson s
WHERE NOT EXISTS (
    SELECT 1
    FROM Orders o
    WHERE s.sales_id = o.sales_id  
            AND com_id = (SELECT com_id FROM red_company_id)
)
```

____

If it was useful don't hesitate to upvote \uD83C\uDF20 Or keep it in your favorite \uD83C\uDF1F
![Upvote invitation](./images/1.png)