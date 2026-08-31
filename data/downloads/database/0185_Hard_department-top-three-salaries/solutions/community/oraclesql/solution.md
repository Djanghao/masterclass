# ✅ 100% EASY || FAST 🔥|| CLEAN SOLUTION 🌟

**Author:** kartik_ksk7
**Votes:** 25
**Link:** [https://leetcode.com/problems/department-top-three-salaries/solutions/3827137/](https://leetcode.com/problems/department-top-three-salaries/solutions/3827137/)

---

# Code
```
/* Write your PL/SQL query statement below */
SELECT DEPT.name AS Department, EMP.name AS Employee, EMP.salary 

AS Salary FROM Department DEPT JOIN Employee EMP ON 

EMP.DepartmentId=DEPT.id WHERE 3 > (SELECT COUNT(DISTINCT EMP1.salary)
 
FROM Employee EMP1 WHERE EMP1.salary > EMP.salary AND 

EMP.departmentId = EMP1.departmentId)
```
IF THIS WILL BE HELPFUL TO YOU,PLEASE UPVOTE!

![5kej8w.jpg](./images/0.jpeg)
