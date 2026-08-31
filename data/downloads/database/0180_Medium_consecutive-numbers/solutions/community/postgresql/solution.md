# Easiest way

**Author:** biisal
**Votes:** 11
**Link:** [https://leetcode.com/problems/consecutive-numbers/solutions/5204554/](https://leetcode.com/problems/consecutive-numbers/solutions/5204554/)

---


# Code
```
-- Write your PostgreSQL query statement below
SELECT DISTINCT(l.num) ConsecutiveNums
FROM Logs l
LEFT JOIN Logs l2 ON l.id = l2.id+1
LEFT JOIN Logs l3 ON l.id = l3.id+2
WHERE l.num = l2.num AND l2.num = l3.num
```