# Simplest Oracle Solution !!!

**Author:** Dakshant
**Votes:** 0
**Link:** [https://leetcode.com/problems/class-performance/solutions/5956958/](https://leetcode.com/problems/class-performance/solutions/5956958/)

---

# Code
```oraclesql []
/* Write your PL/SQL query statement below */
select max(assignment1 + assignment2 + assignment3) - min(assignment1 + assignment2 + assignment3) as difference_in_score
from Scores;
```