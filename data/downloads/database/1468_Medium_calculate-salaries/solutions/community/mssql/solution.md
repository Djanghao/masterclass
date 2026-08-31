# Using Windown function and cte

**Author:** Ashu7697
**Votes:** 1
**Link:** [https://leetcode.com/problems/calculate-salaries/solutions/4911921/](https://leetcode.com/problems/calculate-salaries/solutions/4911921/)

---

# Code
```
with a as (SELECT *,
MAX(salary)over(partition by company_id order by company_id) as max_salary
FROM Salaries )

select company_id , employee_id , employee_name ,
CASE WHEN max_salary < 1000 THEN salary
     WHEN max_salary >=1000 and max_salary <=10000 THEN round(0.76*salary,0)
     ELSE round(0.51*salary,0) END as salary 
FROM a
```