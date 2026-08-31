# SIMPLE SOLUTION WITH CASE | 90% beats

**Author:** ShakhDev
**Votes:** 1
**Link:** [https://leetcode.com/problems/tasks-count-in-the-weekend/solutions/3061998/](https://leetcode.com/problems/tasks-count-in-the-weekend/solutions/3061998/)

---


# Code
```
SELECT
SUM(CASE WHEN DATEPART(WEEKDAY,submit_date)=1 OR DATEPART(WEEKDAY,submit_date)=7 THEN 1 ELSE 0 END) AS weekend_cnt,
SUM(CASE WHEN DATEPART(WEEKDAY,submit_date)!=1 AND DATEPART(WEEKDAY,submit_date)!=7 THEN 1 ELSE 0 END) AS working_cnt
FROM Tasks 
```