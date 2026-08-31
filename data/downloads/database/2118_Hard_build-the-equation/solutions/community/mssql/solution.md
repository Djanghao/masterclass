# MS SQL Server with STRING_AGG() WITHIN GROUP (ORDER BY ...)

**Author:** esgranet
**Votes:** 0
**Link:** [https://leetcode.com/problems/build-the-equation/solutions/5842034/](https://leetcode.com/problems/build-the-equation/solutions/5842034/)

---

# Code
```mssql []
/* Write your T-SQL query statement below */
WITH Members (member, power) AS (
    SELECT
        CASE WHEN factor >= 0 THEN '+' + CAST(factor AS nvarchar)
             ELSE CAST(factor AS nvarchar)
        END
        + CASE WHEN power > 1 THEN 'X^' + CAST(power AS nvarchar)
               WHEN power = 1 THEN 'X'
               ELSE ''
          END,
    power
    FROM Terms
    UNION ALL
    SELECT '=0', -1
)
SELECT STRING_AGG(member, '') WITHIN GROUP (ORDER BY power DESC) AS equation
FROM Members
```