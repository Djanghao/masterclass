# Window function + group by

**Author:** psathe91
**Votes:** 0
**Link:** [https://leetcode.com/problems/active-businesses/solutions/5875910/](https://leetcode.com/problems/active-businesses/solutions/5875910/)

---

# Code
```postgresql []
-- Write your PostgreSQL query statement below
-- Write your PostgreSQL query statement below

WITH occ_compare AS (
    SELECT 
        event_type,
        business_id,
        CASE 
            WHEN occurrences > AVG(occurrences) OVER (PARTITION BY event_type) THEN 1 
            ELSE 0 
        END AS has_high_occ
    FROM 
        events
)

SELECT 
    business_id
FROM 
    occ_compare
GROUP BY 
    business_id
HAVING 
    SUM(has_high_occ) > 1;

```