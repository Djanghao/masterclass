# ✅ SQL || 100% EASY || FAST 🔥|| CLEAN SOLUTION 🌟

**Author:** ManavTake04
**Votes:** 149
**Link:** [https://leetcode.com/problems/primary-department-for-each-employee/solutions/5129746/](https://leetcode.com/problems/primary-department-for-each-employee/solutions/5129746/)

---

![upvote.png](./images/0.png)

# Code
```
SELECT employee_id, department_id
FROM Employee
WHERE primary_flag='Y' OR 
    employee_id in
    (SELECT employee_id
    FROM Employee
    Group by employee_id
    having count(employee_id)=1)
```