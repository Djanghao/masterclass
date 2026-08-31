# Postgres : use rank() and count() and follow the formula for calculating the percentage

**Author:** anuraganand789
**Votes:** 1
**Link:** [https://leetcode.com/problems/compute-the-rank-as-a-percentage/solutions/5238468/](https://leetcode.com/problems/compute-the-rank-as-a-percentage/solutions/5238468/)

---


# Code
```
-- Write your PostgreSQL query statement below

with RankInDept as (
  select student_id, department_id, rank() over(partition by department_id order by mark desc), count(student_id) over(partition by department_id) 
  from students
)
select 
  student_id
  , department_id
  , round((rank - 1) * 100.00 / greatest((count - 1), 1), 2) as percentage
from RankInDept
```