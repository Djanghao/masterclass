# EASY SOLUTION | 86% beats

**Author:** ShakhDev
**Votes:** 0
**Link:** [https://leetcode.com/problems/npv-queries/solutions/3080918/](https://leetcode.com/problems/npv-queries/solutions/3080918/)

---


# Code
```
/* Write your T-SQL query statement below */
SELECT a.id, a.year, ISNULL(b.npv,0) as npv
FROM Queries a LEFT JOIN NPV b ON a.id=b.id AND a.year=b.year
ORDER BY a.id
```