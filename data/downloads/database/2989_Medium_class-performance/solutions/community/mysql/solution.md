# MySQL Simiple Two-Line Solution with MIN() and MAX()

**Author:** vanessaaleung
**Votes:** 3
**Link:** [https://leetcode.com/problems/class-performance/solutions/4508617/](https://leetcode.com/problems/class-performance/solutions/4508617/)

---

# Code
```
# Write your MySQL query statement below
SELECT (
    MAX(assignment1 + assignment2 + assignment3)
    - MIN(assignment1 + assignment2 + assignment3)
 ) AS difference_in_score
FROM Scores
```