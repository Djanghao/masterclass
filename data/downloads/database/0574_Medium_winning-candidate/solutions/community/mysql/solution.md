# ⚡️ Simplest short solution

**Author:** Caro996
**Votes:** 12
**Link:** [https://leetcode.com/problems/winning-candidate/solutions/2480533/](https://leetcode.com/problems/winning-candidate/solutions/2480533/)

---

```
SELECT distinct name
FROM Candidate c
LEFT JOIN Vote v ON v.candidateId = c.id
GROUP BY 1
ORDER BY count(v.id) desc
LIMIT 1
```