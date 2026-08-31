# Beginner-friendly solution 😉

**Author:** ProfessionalMonk
**Votes:** 441
**Link:** [https://leetcode.com/problems/second-highest-salary/solutions/3855660/](https://leetcode.com/problems/second-highest-salary/solutions/3855660/)

---


```
select
(select distinct Salary 
from Employee order by salary desc 
limit 1 offset 1) 
as SecondHighestSalary;
```
![1271c6fe-345b-4f3d-959e-d13e791111d7_1677726484.8832572.jpeg](./images/0.jpeg)
