# CTE and LEFT JOIN - beats 100.00%

**Author:** esgranet
**Votes:** 0
**Link:** [https://leetcode.com/problems/year-on-year-growth-rate/solutions/6094516/](https://leetcode.com/problems/year-on-year-growth-rate/solutions/6094516/)

---

# Code
```mssql []
/* Write your T-SQL query statement below */
WITH TotalSpending (product_id, [year], spend) AS (
    SELECT product_id, DATEPART(year, transaction_date), SUM(spend)
    FROM user_transactions
    GROUP BY product_id, DATEPART(year, transaction_date)
)
SELECT A.year, A.product_id, A.spend AS curr_year_spend, B.spend AS prev_year_spend, 
    ROUND((A.spend - B.spend) * 100.0 / B.spend, 2) AS yoy_rate
FROM TotalSpending AS A
LEFT JOIN TotalSpending AS B
ON A.product_id = B.product_id AND A.year = B.year + 1
ORDER BY product_id, A.year
```