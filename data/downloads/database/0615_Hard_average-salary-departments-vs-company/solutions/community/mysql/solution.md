# MySQL solution with explanation

**Author:** olivia612
**Votes:** 4
**Link:** [https://leetcode.com/problems/average-salary-departments-vs-company/solutions/340862/](https://leetcode.com/problems/average-salary-departments-vs-company/solutions/340862/)

---

There are two sub-queries in the solution, the only difference between them is the variables you put in the ```group by``` clause.
1. In the ```dep``` subquery we want to calculate the average salary for each department in every month. So you have go group by two variables: ```pay_month``` and ```department_id```.
2. In the ```comp``` sub-query, we only want to get the average salary every month on the entire company level, so we only group by the ```pay_month```.

Then use left join (in this case, inner join is also not a problem) to join the two subqueries. 
And then add the ```case when``` function to do the comparison.

Hope this explanation helps.

```
select dep.pay_month,
dep.department_id,
(case when dep_avg>com_avg then 'higher'
when dep_avg<com_avg then 'lower'
else 'same' end) as comparison
from
    (select 
    e.department_id,avg(s.amount) as dep_avg,left(s.pay_date,7) as pay_month
    from salary s join employee e
    on s.employee_id = e.employee_id
    group by pay_month,e.department_id) dep
    left join
    (select e.department_id, avg(s.amount) as com_avg, left(s.pay_date, 7) as pay_month
     from salary s join employee e
     on s.employee_id = e.employee_id
     group by pay_month) comp
     on dep.pay_month = comp.pay_month
order by dep.pay_month;
```