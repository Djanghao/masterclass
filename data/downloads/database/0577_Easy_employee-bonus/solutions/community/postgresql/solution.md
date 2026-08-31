# PostgreSQL 100% working solution

**Author:** d_sushkov
**Votes:** 11
**Link:** [https://leetcode.com/problems/employee-bonus/solutions/5652493/](https://leetcode.com/problems/employee-bonus/solutions/5652493/)

---

# Code
```
-- Write your PostgreSQL query statement below
SELECT name, bonus
FROM Employee
LEFT JOIN Bonus ON Employee.empId = Bonus.empId
WHERE bonus < 1000 OR bonus IS NULL;
```