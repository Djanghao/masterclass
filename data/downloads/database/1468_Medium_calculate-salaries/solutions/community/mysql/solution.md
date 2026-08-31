# Simple, easy MySql sol fast 99%, memory 100%, Using case and Join

**Author:** jitenderphogat
**Votes:** 29
**Link:** [https://leetcode.com/problems/calculate-salaries/solutions/673411/](https://leetcode.com/problems/calculate-salaries/solutions/673411/)

---

Simple MySQL using Case and Join!!

Please upvote if it's useful!!

```
select s.company_id, s.employee_id, s.employee_name,
round(
		case when x.max_sal between 1000 and 10000 then salary * 0.76
		when x.max_sal > 10000 then salary * 0.51 else salary end, 0) as salary

from salaries s inner join
(select company_id, max(salary) max_sal from salaries group by company_id) x

on s.company_id = x.company_id;
```