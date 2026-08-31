# ✅ 100% EASY || FAST 🔥|| CLEAN SOLUTION 🌟

**Author:** kartik_ksk7
**Votes:** 44
**Link:** [https://leetcode.com/problems/the-number-of-employees-which-report-to-each-employee/solutions/3865526/](https://leetcode.com/problems/the-number-of-employees-which-report-to-each-employee/solutions/3865526/)

---

IF THIS WILL BE HELPFUL TO YOU, PLEASE UPVOTE !
# Code
```
/* Write your PL/SQL query statement below */
SELECT E1.employee_id, E1.name, COUNT(E2.employee_id) reports_count,

ROUND(AVG(E2.age)) average_age FROM Employees E1 INNER JOIN Employees 

E ON E1.employee_id = E2.reports_to GROUP BY E1.employee_id, E1.name 

ORDER BY employee_id

```
![5kej8w.jpg](./images/0.jpeg)
