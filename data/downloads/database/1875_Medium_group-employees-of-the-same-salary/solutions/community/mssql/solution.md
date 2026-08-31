# DENSE_RANK - easy

**Author:** PeterHontaru
**Votes:** 3
**Link:** [https://leetcode.com/problems/group-employees-of-the-same-salary/solutions/1378517/](https://leetcode.com/problems/group-employees-of-the-same-salary/solutions/1378517/)

---

```
SELECT employee_id, name, salary, 
    DENSE_RANK() OVER(ORDER BY salary) as team_id
FROM Employees
WHERE salary IN (SELECT salary FROM Employees GROUP BY salary HAVING COUNT(salary)>1)
ORDER BY team_id, employee_id
```