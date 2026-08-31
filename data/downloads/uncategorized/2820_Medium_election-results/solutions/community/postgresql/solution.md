# check this solution!!! Upvote if you like!!

**Author:** ravishankar324
**Votes:** 0
**Link:** [https://leetcode.com/problems/election-results/solutions/5913579/](https://leetcode.com/problems/election-results/solutions/5913579/)

---


# Code
```postgresql []
WITH CTE1 AS (SELECT voter, candidate, 1 :: NUMERIC / COUNT(*) OVER(PARTITION BY voter) AS cn
FROm Votes
WHERE candidate IS NOT NULL),

CTE2 AS (SELECT candidate, SUM(cn), DENSE_RANK() OVER(ORDER BY SUM(cn) DESC) AS rk
FROM CTE1
GROUP By candidate)

SELECT candidate
FROM CTE2
WHERE rk = 1
ORDER BY candidate

```