# subqueries + case statements

**Author:** _jhowlett_
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-winner-university/solutions/5854195/](https://leetcode.com/problems/the-winner-university/solutions/5854195/)

---

# Code
```postgresql []
-- Write your PostgreSQL query statement below
select
    case
        when n.num_students = c.num_students then 'No Winner'
        when n.num_students > c.num_students then 'New York University'
        when n.num_students < c.num_students then 'California University'
    end as winner 
from (
    select
        count(distinct student_id) as num_students
    from newyork
    where score >= 90
) n,
(
    select  
        count(distinct student_id) as num_students
    from california
    where score >= 90
) c


```