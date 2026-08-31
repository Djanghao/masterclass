# ✅ 100% EASY || FAST 🔥|| CLEAN SOLUTION 🌟

**Author:** kartik_ksk7
**Votes:** 124
**Link:** [https://leetcode.com/problems/department-highest-salary/solutions/3827264/](https://leetcode.com/problems/department-highest-salary/solutions/3827264/)

---

# Code
```
/* Write your PL/SQL query statement below */
SELECT DEPT.name AS Department, EMP.name AS Employee, EMP.salary AS 

Salary FROM Department DEPT, Employee EMP WHERE

EMP.departmentId = DEPT.id AND (EMP.departmentId, salary) IN 

(SELECT departmentId, MAX (salary) FROM Employee GROUP BY 

departmentId)
```
IF THIS WILL BE HELPFUL TO YOU,PLEASE UPVOTE !

![5kej8w.jpg](./images/0.jpeg)


