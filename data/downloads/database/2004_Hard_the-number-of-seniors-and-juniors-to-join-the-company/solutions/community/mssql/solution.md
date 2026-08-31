# Simple running total, beats 99%

**Author:** krmarshal
**Votes:** 3
**Link:** [https://leetcode.com/problems/the-number-of-seniors-and-juniors-to-join-the-company/solutions/1850119/](https://leetcode.com/problems/the-number-of-seniors-and-juniors-to-join-the-company/solutions/1850119/)

---

```
/* Write your T-SQL query statement below */
with seniors as (
select employee_id, salary, sum(salary) over (order by salary asc) as running_salary 
    from candidates 
    where experience = 'Senior'
), hired_seniors as (
    select count(distinct employee_id) as accepted_candidates
    from seniors 
    where running_salary <= 70000
)
, calc_salary as (select max(running_salary) as senior_salaries from
                 seniors where running_salary <= 70000)
, juniors as (
select employee_id, salary, sum(salary) over (order by salary asc) as running_salary 
    from candidates 
    where experience = 'Junior'
),
hired_juniors as (
    select count(distinct employee_id) as accepted_candidates
    from juniors 
    cross join calc_salary c
    where running_salary <= (70000 - isnull(c.senior_salaries,0))
)
select 'Senior' as experience, accepted_candidates from hired_seniors
union all
select 'Junior' as experience, accepted_candidates from hired_juniors
```