# PostgreSQL - ROW_NUMBER() - Case statement in where clause

**Author:** vinitgupta4080
**Votes:** 1
**Link:** [https://leetcode.com/problems/median-employee-salary/solutions/5484394/](https://leetcode.com/problems/median-employee-salary/solutions/5484394/)

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
```
-- Write your PostgreSQL query statement below
with cte as
(select id, company, salary,
count(*) over (partition by company) as cnt,
 row_number() over (partition by company order by salary) as row_num
from employee)

select id, company, salary
from cte
where  (case when cnt%2=0 and row_num = cnt/2 then true
             when cnt%2=0 and row_num = cnt/2+1 then true
             when cnt%2=1 and row_num = cnt/2+1 then true
        end);
```