# Solution beating 100% of users with Oracle using (Submitted on JAN 26, 2024)

**Author:** Ihab-Taher
**Votes:** 1
**Link:** [https://leetcode.com/problems/rolling-average-steps/solutions/4629204/](https://leetcode.com/problems/rolling-average-steps/solutions/4629204/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
I will use analytic functions and OVER clause and no JOINs.

# Approach
<!-- Describe your approach to solving the problem. -->
Use analytic functions to get all we need such as the rolling average, the difference in days with the previous rows and the difference in days with two previous rows.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
725 ms

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/* Write your PL/SQL query statement below */
select t1.user_id, 
       to_char(t1.steps_date, 'YYYY-MM-DD') as steps_date, 
       round(t1.rolling_average, 2) as rolling_average 
from (
select user_id, steps_count, steps_date, 
       avg(steps_count) over(partition by user_id order by steps_date rows between 2 preceding and current row) rolling_average, 
       steps_date - lag(steps_date) over(partition by user_id order by steps_date) diff_with_one_row_prev, 
       steps_date - first_value(steps_date) over(partition by user_id order by steps_date rows between 2 preceding and 2 preceding) diff_with_two_rows_prev
from Steps) t1
where t1.diff_with_one_row_prev=1
      and t1.diff_with_two_rows_prev=2
order by 1, 2;
```