# Solution works for SQL and PostgreSQL

**Author:** iloabachie
**Votes:** 5
**Link:** [https://leetcode.com/problems/triangle-judgement/solutions/5457564/](https://leetcode.com/problems/triangle-judgement/solutions/5457564/)

---

# Code
```mysql
SELECT *,
    CASE 
        WHEN GREATEST(x, y, z) < (x + y + z - GREATEST(x, y, z)) THEN 'Yes'
        ELSE 'No'
    END AS triangle
FROM Triangle;

```