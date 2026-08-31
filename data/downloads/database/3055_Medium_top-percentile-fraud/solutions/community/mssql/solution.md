# mssql percentile

**Author:** DE_Sam
**Votes:** 0
**Link:** [https://leetcode.com/problems/top-percentile-fraud/solutions/5858037/](https://leetcode.com/problems/top-percentile-fraud/solutions/5858037/)

---


# Code
```mssql []
/* Write your T-SQL query statement below */

with percentile_builder
AS
(
SELECT percentile_95th
      ,state
FROM 
(
    SELECT PERCENTILE_CONT(0.95) WITHIN GROUP (ORDER BY fraud_score) OVER (PARTITION BY state) percentile_95th
        ,state
    FROM FRAUD 
) x
group by x.state, percentile_95th
)
SELECT f.*
FROM Fraud f 
join percentile_builder p
  on f.state = p.state
 and f.fraud_score >= p.percentile_95th
 order by state, fraud_score desc, policy_id
 
```