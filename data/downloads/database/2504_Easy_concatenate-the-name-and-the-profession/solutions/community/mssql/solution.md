# MSSQL

**Author:** likilikhith87
**Votes:** 0
**Link:** [https://leetcode.com/problems/concatenate-the-name-and-the-profession/solutions/5754007/](https://leetcode.com/problems/concatenate-the-name-and-the-profession/solutions/5754007/)

---


# Code
```mssql []
SELECT person_id,CONCAT(name,'(',SUBSTRING(profession,1,1),')') as name
FROM Person
ORDER BY 1 DESC
```