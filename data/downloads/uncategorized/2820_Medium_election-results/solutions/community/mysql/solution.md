# Simple count and join

**Author:** cpcs
**Votes:** 4
**Link:** [https://leetcode.com/problems/election-results/solutions/3922735/](https://leetcode.com/problems/election-results/solutions/3922735/)

---

# Intuition
1. Calculate how many votes each voter has.
Note each voter may have (voter, null) and (voter, candidate), the former still counts one votes. In other word, null is not special and shouldn't be filtered out here.

```
WITH vote_count AS (SELECT voter, COUNT(*) AS vote_count FROM Votes GROUP BY voter),
```

2. Calculate how many votes each candidate has.
If a voter has x votes, the candidate the voter votes should be added by 1./ x.

```
votes AS (
SELECT candidate, SUM(1. / vote_count) AS votes FROM Votes a, vote_count b WHERE a.voter = b.voter AND a.candidate IS NOT NULL GROUP BY candidate
)
```

3. Get candidates with the most votes and sort the names.
```

SELECT candidate FROM votes WHERE votes = (SELECT MAX(votes) FROM votes) ORDER BY candidate
```

# Code
```
# Write your MySQL query statement below
WITH vote_count AS (SELECT voter, COUNT(*) AS vote_count FROM Votes GROUP BY voter),

votes AS (
SELECT candidate, SUM(1. / vote_count) AS votes FROM Votes a, vote_count b WHERE a.voter = b.voter AND a.candidate IS NOT NULL GROUP BY candidate
)

SELECT candidate FROM votes WHERE votes = (SELECT MAX(votes) FROM votes) ORDER BY candidate


```