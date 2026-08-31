# Using Cross Apply

**Author:** SahithiVemparala
**Votes:** 1
**Link:** [https://leetcode.com/problems/rolling-average-steps/solutions/4197197/](https://leetcode.com/problems/rolling-average-steps/solutions/4197197/)

---

# Code
```
/* Write your T-SQL query statement below */


select s.user_id, s.steps_date,
s2.rolling_average
from steps s
cross apply (
  select count(steps_date) as totalconsecdays,
  round(avg(1.0*steps_count),2) as rolling_average
  from steps s1 
  where s1.user_id = s.user_id
  and datediff(day, s1.steps_date, s.steps_date) between 0 and 2
) s2
where totalconsecdays = 3
order by s.user_id, s.steps_date
```