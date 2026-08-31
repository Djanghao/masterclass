# Window function - MSSQL

**Author:** Flash017
**Votes:** 4
**Link:** [https://leetcode.com/problems/running-total-for-different-genders/solutions/847439/](https://leetcode.com/problems/running-total-for-different-genders/solutions/847439/)

---

```
select gender, day, sum(sum(score_points)) over(partition by gender order by day) as total
from Scores
group by gender, day
order by gender, day
```