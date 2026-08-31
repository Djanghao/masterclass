# Simple solution to 2854. || Beats 100%  ||  Left Join

**Author:** ztt_09
**Votes:** 2
**Link:** [https://leetcode.com/problems/rolling-average-steps/solutions/5905102/](https://leetcode.com/problems/rolling-average-steps/solutions/5905102/)

---

# Note
For each date left join any dates that is in the interval of n consecutive days. 

# Code
```postgresql []
select s1.user_id, s1.steps_date, round(avg(s2.steps_count), 2) as rolling_average
from steps s1 left join steps s2 on s1.user_id = s2.user_id and s2.steps_date between s1.steps_date-2 and s1.steps_date
group by s1.user_id, s1.steps_date
having count(s2.steps_date) = 3
order by s1.user_id, s1.steps_date

```