# [MySQL] WEEKDAY

**Author:** ye15
**Votes:** 4
**Link:** [https://leetcode.com/problems/tasks-count-in-the-weekend/solutions/2854720/](https://leetcode.com/problems/tasks-count-in-the-weekend/solutions/2854720/)

---


```
SELECT 
    SUM(WEEKDAY(submit_date) >= 5) AS weekend_cnt,
    SUM(WEEKDAY(submit_date) <= 4) AS working_cnt
FROM Tasks
```