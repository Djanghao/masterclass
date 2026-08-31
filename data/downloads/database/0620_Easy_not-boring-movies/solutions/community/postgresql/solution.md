# Simple solution by using mod()

**Author:** maya_rabarison
**Votes:** 4
**Link:** [https://leetcode.com/problems/not-boring-movies/solutions/5003974/](https://leetcode.com/problems/not-boring-movies/solutions/5003974/)

---



# Code
```
-- Write your PostgreSQL query statement below
SELECT *
FROM Cinema
WHERE mod(id,2) = 1 
    AND description != 'boring'
ORDER BY rating DESC
```