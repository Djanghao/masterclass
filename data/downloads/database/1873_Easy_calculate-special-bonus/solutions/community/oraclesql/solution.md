# Oracle Simple & Fastest Solution

**Author:** ruthvikc27-dev
**Votes:** 12
**Link:** [https://leetcode.com/problems/calculate-special-bonus/solutions/2295745/](https://leetcode.com/problems/calculate-special-bonus/solutions/2295745/)

---

# Please upvote if you find it helpful, thank you.
```
/* Write your PL/SQL query statement below */


SELECT 
employee_id AS "employee_id",
(
    CASE  
    WHEN MOD(employee_id, 2) = 1 AND name NOT LIKE 'M%' THEN salary
    ELSE 0 END
) AS "bonus"
FROM
employees
ORDER BY employee_id;
```