# 2 Lines, Beats 87%!

**Author:** maxwhalen
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-team-size/solutions/6037858/](https://leetcode.com/problems/find-the-team-size/solutions/6037858/)

---

# Code
```postgresql []
-- Write your PostgreSQL query statement below
select employee_id,
    count(*) over(partition by team_id) as team_size
from Employee;
```