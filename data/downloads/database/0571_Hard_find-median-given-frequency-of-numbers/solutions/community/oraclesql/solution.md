# Oracle Solution with CONNECT BY

**Author:** Scoriss
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-median-given-frequency-of-numbers/solutions/2178402/](https://leetcode.com/problems/find-median-given-frequency-of-numbers/solutions/2178402/)

---

```
WITH data AS (
    SELECT num, frequency
    FROM Numbers
    CONNECT BY PRIOR num = num 
       AND PRIOR dbms_random.value IS NOT NULL
       AND LEVEL <= frequency
    ORDER BY num
)
SELECT ROUND(median(num), 1) AS median FROM data 
;
```