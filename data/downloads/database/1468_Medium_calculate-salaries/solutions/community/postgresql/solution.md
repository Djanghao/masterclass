# PostgreSQL solution

**Author:** poluby
**Votes:** 0
**Link:** [https://leetcode.com/problems/calculate-salaries/solutions/5917194/](https://leetcode.com/problems/calculate-salaries/solutions/5917194/)

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
```postgresql []
-- Write your PostgreSQL query statement below
with max_salary_cte as (select company_id,max(salary) as highest_salary
from salaries
group by company_id
order by company_id),
tax_cte as (select company_id,
case 
when highest_salary<1000 then 0
when highest_salary >= 1000 and highest_salary<=10000 then 0.24
else 0.49
end as tax_percent
from max_salary_cte),

cte as (select salaries.company_id,employee_id,employee_name,salary,tax_percent
from salaries
inner join tax_cte on salaries.company_id=tax_cte.company_id)

select company_id,employee_id,employee_name,round((salary-(tax_percent)*salary),0) as salary
from cte 
group by 1,2,3,4
order by company_id


```