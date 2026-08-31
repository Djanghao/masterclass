# window function, super easy logic

**Author:** primewuyu
**Votes:** 10
**Link:** [https://leetcode.com/problems/median-employee-salary/solutions/3061419/](https://leetcode.com/problems/median-employee-salary/solutions/3061419/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To find the medium, we need to sort the salary, compare the order of each salary with the total count of salaries in one company. 
This can be done by using two window functions as two columns:
- `row_number()` to sort and label each salary
- `count()` to calculate the total count of salaries in one company

# Approach
<!-- Describe your approach to solving the problem. -->

Both window functions should be partition by `company`, while `row_number()` needs to be ordered by `salary` and `count()` **does not**.
The MySQL implementation for above intuition is
```
select *,
row_number() over(partition by company order by salary) as orders,
count(*) over(partition by company) as counts 
from employee
```
However, we cannot use `where` to filter in window function columns, thus we have to use the above query as a subquery.

To select the median rows, we can use where calculate median by `counts` and `orders` column created by window functions above. 
```
where (counts%2 = 0 and orders = counts/2+1) # even total, take two values
or (counts%2 = 0 and orders = counts/2) # even total, take two values
or (counts%2 = 1 and orders = (counts+1)/2) # odd total, take one value
```
**Note: In MySQL Server, medians are calculated slightly different.**
```
where orders = counts/2 + 1 
# take the median for odd total or upper median for even total
or (counts%2 = 0 and orders = counts/2)
# take the lower median for even total
```

# Code
**MySQL**

```
# Write your MySQL query statement below
with temp as (
    select *,
    row_number() over(partition by company order by salary) as orders,
    count(*) over(partition by company) as counts 
    from employee
)
select id, company, salary
from temp
where (counts%2 = 0 and orders = counts/2+1)
or (counts%2 = 0 and orders = counts/2)
or (counts%2 = 1 and orders = (counts+1)/2)
```

**MySQL Server**

```
/* Write your T-SQL query statement below */
with temp as (
    select *,
    row_number() over(partition by company order by salary) as orders,
    count(*) over(partition by company) as counts 
    from employee
)
select id, company, salary
from temp
where orders = counts/2 + 1
or (counts%2 = 0 and orders = counts/2)
```