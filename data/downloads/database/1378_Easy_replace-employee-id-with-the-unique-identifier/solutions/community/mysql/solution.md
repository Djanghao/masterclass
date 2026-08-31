# SQL ✅ || LEFT JOIN || Easy Solution

**Author:** jasurbekaktamov081
**Votes:** 840
**Link:** [https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier/solutions/3549131/](https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier/solutions/3549131/)

---

# Intuition
***The second table was simply joined to the first table***


![e2515d84-99cf-4499-80fb-fe458e1bbae2_1678932606.8004954.png](./images/0.png)


# Code
```
# Write your MySQL query statement below
select 
eu.unique_id as unique_id, e.name as name
from Employees e left join EmployeeUNI eu on e.id = eu.id
```