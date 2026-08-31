# ✔✔✔easy and all in 1 code⚡⚡⚡- MySQL || MS SQL Server || Oracle || PostgreSQL

**Author:** anish_sule
**Votes:** 13
**Link:** [https://leetcode.com/problems/count-salary-categories/solutions/4784326/](https://leetcode.com/problems/count-salary-categories/solutions/4784326/)

---

# Code
```
SELECT 'Low Salary' AS category, COUNT(*) AS accounts_count 
FROM Accounts
WHERE income < 20000

UNION

SELECT 'Average Salary' AS category, COUNT(*) AS accounts_count 
FROM Accounts
WHERE income BETWEEN 20000 AND 50000

UNION

SELECT 'High Salary' AS category, COUNT(*) AS accounts_count 
FROM Accounts
WHERE income > 50000
```