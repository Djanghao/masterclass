# Oracle | Max | Partition by | Case

**Author:** kunalc_14
**Votes:** 2
**Link:** [https://leetcode.com/problems/calculate-salaries/solutions/5518064/](https://leetcode.com/problems/calculate-salaries/solutions/5518064/)

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
/* Write your PL/SQL query statement below */
select
    company_id,
    employee_id,
    employee_name,
   round((case 
        when max(salary) over (partition by company_id order by company_id) < 1000 then salary
        when max(salary) over (partition by company_id order by company_id) > 10000 then salary*0.51
        else salary*0.76
    end),0)salary
from
    salaries

```