# Simple Oracle solution

**Author:** Soni5143
**Votes:** 2
**Link:** [https://leetcode.com/problems/median-employee-salary/solutions/821012/](https://leetcode.com/problems/median-employee-salary/solutions/821012/)

---

```
select id, company, salary
from
(select id, 
       company, 
       salary, 
       row_number() over(partition by company order by salary) row_num,
       count(*) over(partition by company) emp_count
from employee)
where row_num in (ceil(emp_count/2), floor(emp_count/2)+1);
```