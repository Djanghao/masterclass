# Very Easy MS SQL Server Solution using WHERE + GROUP BY + HAVING

**Author:** Vaishnav-Dahake
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-candidates-for-data-scientist-position/solutions/5834017/](https://leetcode.com/problems/find-candidates-for-data-scientist-position/solutions/5834017/)

---

# Code
```mssql []
SELECT  candidate_id
FROM Candidates
WHERE skill IN ('Python','Tableau','PostgreSQL')
GROUP BY candidate_id
HAVING count(skill) = 3
ORDER BY candidate_id
```