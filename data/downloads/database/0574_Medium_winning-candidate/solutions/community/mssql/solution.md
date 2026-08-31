# MS SQL, Faster than 98.62%

**Author:** MichaelBryantDS
**Votes:** 1
**Link:** [https://leetcode.com/problems/winning-candidate/solutions/1934151/](https://leetcode.com/problems/winning-candidate/solutions/1934151/)

---

```
SELECT TOP 1 name
FROM(SELECT c.name, COUNT(c.name) AS cnt
        FROM Candidate c
        JOIN Vote v
            ON c.id = v.candidateId
        GROUP BY c.name) tbl
ORDER BY cnt DESC;
```