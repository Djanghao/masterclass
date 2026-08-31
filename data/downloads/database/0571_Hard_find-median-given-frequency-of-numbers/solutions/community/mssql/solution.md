# So far the easiest way in mssql

**Author:** miazhang
**Votes:** 46
**Link:** [https://leetcode.com/problems/find-median-given-frequency-of-numbers/solutions/570079/](https://leetcode.com/problems/find-median-given-frequency-of-numbers/solutions/570079/)

---

```
WITH tmp AS (SELECT Number, Frequency,
             SUM(Frequency) OVER (ORDER BY Number ASC) rk1,
             SUM(Frequency) OVER (ORDER BY Number DESC) rk2
             FROM Numbers)
  
SELECT AVG(Number*1.0) AS median
FROM tmp
WHERE ABS(rk1-rk2)<=Frequency
```