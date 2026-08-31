# rank, pay attention to divide by zero

**Author:** acme
**Votes:** 0
**Link:** [https://leetcode.com/problems/compute-the-rank-as-a-percentage/solutions/5968131/](https://leetcode.com/problems/compute-the-rank-as-a-percentage/solutions/5968131/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```mssql []
/* Write your T-SQL query statement below */
with cte as(
    select student_id,department_id,
    rank() over (partition by department_id order by mark desc) as rn,
    count(*) over ( partition by department_id) as cnt
    from Students
)
select student_id,department_id,
case when cnt>1 then round((rn-1.0)/(cnt-1.0)*100,2) else 0.00 end as percentage

from cte
```