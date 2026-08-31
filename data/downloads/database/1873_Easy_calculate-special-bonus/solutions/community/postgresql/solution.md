# 🌟 Beats 88% of Users -- Using CASE WHEN

**Author:** naufalnashif
**Votes:** 3
**Link:** [https://leetcode.com/problems/calculate-special-bonus/solutions/5380430/](https://leetcode.com/problems/calculate-special-bonus/solutions/5380430/)

---


# Code
```
-- Write your PostgreSQL query statement below
SELECT 
    employee_id,
    CASE
        WHEN employee_id % 2 = 1 AND substring(name FROM 1 FOR 1) != 'M'
        THEN salary
        ELSE 0 
    END AS bonus
FROM Employees
ORDER BY employee_id;
```