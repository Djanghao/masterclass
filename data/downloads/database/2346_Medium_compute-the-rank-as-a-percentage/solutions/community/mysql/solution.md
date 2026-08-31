# MySQL, PERCENT_RANK

**Author:** blue_sky5
**Votes:** 23
**Link:** [https://leetcode.com/problems/compute-the-rank-as-a-percentage/solutions/2319544/](https://leetcode.com/problems/compute-the-rank-as-a-percentage/solutions/2319544/)

---

```
SELECT student_id, department_id, 
    ROUND(100*PERCENT_RANK() OVER (
          PARTITION BY department_id 
          ORDER BY mark DESC)
    , 2) AS percentage 
FROM Students
```