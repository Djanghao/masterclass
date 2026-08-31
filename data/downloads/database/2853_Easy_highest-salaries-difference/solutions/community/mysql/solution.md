# Just ABS and select

**Author:** cpcs
**Votes:** 5
**Link:** [https://leetcode.com/problems/highest-salaries-difference/solutions/4047076/](https://leetcode.com/problems/highest-salaries-difference/solutions/4047076/)

---



# Code
```
# Write your MySQL query statement below
SELECT ABS((SELECT MAX(salary) as salary FROM Salaries WHERE department = "Engineering") 
- (SELECT MAX(salary) as salary FROM Salaries WHERE department = "Marketing")) AS salary_difference 
```