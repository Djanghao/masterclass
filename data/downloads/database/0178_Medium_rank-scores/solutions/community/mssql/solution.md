# Ranking Scores Using `DENSE_RANK()` Function in MS SQL Server

**Author:** d_sushkov
**Votes:** 5
**Link:** [https://leetcode.com/problems/rank-scores/solutions/5525059/](https://leetcode.com/problems/rank-scores/solutions/5525059/)

---

# Intuition
The task is to assign ranks to scores in descending order. The highest score should have rank 1, the second highest should have rank 2, and so on. Ties in scores should receive the same rank.

# Approach
We use the `DENSE_RANK()` window function to assign ranks to the scores. The function orders the scores in descending order and assigns ranks accordingly. The `ORDER BY score DESC` clause ensures that higher scores get a lower rank number.

# Complexity
- Time complexity:$$O(n \\log n)$$ due to the sorting operation.

- Space complexity:$$O(n)$$ as the entire result set needs to be stored.

# Code
```
/* Write your T-SQL query statement below */
SELECT score,
    DENSE_RANK() OVER (ORDER BY score DESC) AS "rank"
FROM Scores;
```