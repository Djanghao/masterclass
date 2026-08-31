# Window Function

**Author:** bytchenko
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-latest-salaries/solutions/3490495/](https://leetcode.com/problems/find-latest-salaries/solutions/3490495/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

Yet another way (as an alternative to `group by`) is window function

# Approach
<!-- Describe your approach to solving the problem. -->

Window function to compute `max` and `distinct` to remove duplicates 

# Code
```
# Write your MySQL query statement below

select distinct 
       emp_id,
       firstname,
       lastname,
       max(salary) over (partition by emp_id) salary,
       department_id   
  from Salary
```