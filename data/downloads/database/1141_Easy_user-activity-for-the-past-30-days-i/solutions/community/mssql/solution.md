# 879 ms | Beats 68.46% of users with MySQL

**Author:** bamshankar130295
**Votes:** 11
**Link:** [https://leetcode.com/problems/user-activity-for-the-past-30-days-i/solutions/5028960/](https://leetcode.com/problems/user-activity-for-the-past-30-days-i/solutions/5028960/)

---


# Complexity
Time complexity: O(N)
where N is the number of rows satisfying the conditions.

# Space complexity: O(1)

# Code
```
# Write your MySQL query statement below
select activity_date day ,Count(distinct user_id) active_users
from Activity
where activity_date between '2019-06-28' and '2019-07-27'
group by activity_date
```

![download (1).jpg](./images/0.jpeg)
