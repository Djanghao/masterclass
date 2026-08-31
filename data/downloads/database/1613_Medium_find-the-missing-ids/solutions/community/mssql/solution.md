# MS SQL recursive CTE - Similar to 1336. Number of Transactions per Visit

**Author:** ZzZ_djrteom
**Votes:** 8
**Link:** [https://leetcode.com/problems/find-the-missing-ids/solutions/889227/](https://leetcode.com/problems/find-the-missing-ids/solutions/889227/)

---


```
/* Write your T-SQL query statement below */
WITH r_cte AS (
    SELECT 1 ids, MAX(customer_id) m
    FROM customers
    
    UNION ALL
    
    SELECT ids+1, m
    FROM r_cte
    WHERE ids < m
)
SELECT ids 
FROM r_cte
WHERE ids NOT IN (SELECT customer_id FROM customers)
ORDER BY ids ASC
```