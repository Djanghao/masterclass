# ✔✔✔very easy - LEFT JOIN - beats 99%⚡⚡⚡MySQL || MS SQL Server || PostgreSQL⚡⚡⚡

**Author:** anish_sule
**Votes:** 5
**Link:** [https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier/solutions/4784715/](https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier/solutions/4784715/)

---

# Code - MySQL || MS SQL Server || PostgreSQL
```
SELECT e2.unique_id, e1.name
FROM Employees AS e1
LEFT JOIN EmployeeUNI AS e2
ON e1.id = e2.id
```