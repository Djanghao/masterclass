# SQL || DEPARTMENT TOP THREE SALARIES

**Author:** KarthikPrabhu2541
**Votes:** 187
**Link:** [https://leetcode.com/problems/department-top-three-salaries/solutions/3203554/](https://leetcode.com/problems/department-top-three-salaries/solutions/3203554/)

---

# Intuition 

The question asks us to find the details of the employees that earn in the top 3 unique salaries in a department. It is the salary that has to be unique not the person. so lets say top salaries are 50k, 43k and 28k, then if there happen to be people who have the same salary of 43k. both would be the top earners. 

So i had to find if there are people who earn unique salaries higher than each person and if it is <3 then that person is a high earner.

# Approach

Lets break down each clause

### Select

``select d.name as department , e1.name as employee, e1.salary as Salary``

- Displays the department , the name of the employee and the salary of the employee. simple as that

### From

``from Employee e1 join Department d on e1.DepartmentId = d.Id``

- It specifies the tables to be used , employee and department with the alias e and d respectively.
- It joins the employee and the department based on the join condition that department id in employee table is same as the department id in department table.
- It effectively joins the tables to have access to employee details and the corresponding department name of the employee.

### Subquery

``select count(distinct (e2.Salary))``
            ``from  Employee e2``
            ``where e2.Salary > e1.Salary``
            ``and e1.DepartmentId = e2.DepartmentId ``

- It being a subquery has access to the values in the main query
- it creates a copy of the employee table and returns the number of unique salaries in employee table that are higher the salary of the employee being checked in the main query.

### Where 

``Where  3 > (select count(distinct (e2.Salary))`` 

- The where clause provides a condition on the employee details that are to be displayed.
- since the subquery returns count of the unique salaries in a department higher than current employee in the main query.
- the condition is that if this count of unique salary higher than in a department returned by subquery is lower than 3, then the employee is a high earner.

#### the condition does not make sense yet?.. lets break it down a bit more. 

If i have to check if an employee is a top 3 high earners in a department i can do it by checking all the employees in a department and rank them and the one in the top 3 are high earners. 

An effective way to do this would be to check if there are people who earn more than the employee.
- If a person is rank 3 then there would be only 2 people above.
- If a person is rank 2 then there would be only 1 person above.
- If a person is rank 1 then there would be no one above him.
so checking for number of people above him to be less than 3 (less than or equal to 2 works too) solves the problem.

#### But...
the problem states that it needs to be a unique salary so we need the count of people with unique salaries.
if we just return 
``count(salaries) where e2.salary>e1.salary``
it would work if all salaries were already unique

but imagine there were salaries as so
- A - 25k
- B - 25k
- C - 25k
- D - 13k
- E - 17k
- F - 12k

doing ``count(salaries) where e2.salary>e1.salary`` would lead to 
only a b and c being high earners but top 3 unique salaries would mean 25k 13k and 17k are the top 3 unique salaries and the earners of these salaries do not have to be just 3. 
it just means all the earners who earn the top 3 unique salaries.
it is the top 3 salaries that need to be unique which are 25k, 17k and 13k.

## The solution essentially is doing this..


lets say an employee e belongs to department A
subquery checks returns the count of unique salaries in department in that is more than salary of e.
if this count is less than 3 it means that e has a salary that is a top 3 unique salary in the department.
if the condition is true it displays the details of the employee 
it does this for all the employees in the employee table.

# Code
```
Select d.name as department , e1.name as employee, e1.salary as Salary
From Employee e1 join Department d on e1.DepartmentId = d.Id
Where  3 > (select count(distinct (e2.Salary))
            from  Employee e2
            where e2.Salary > e1.Salary
            and e1.DepartmentId = e2.DepartmentId)
```
POV : you took a lot of time and some help from solutions to do this and now contemplating life decisions

# a like would be appreciated