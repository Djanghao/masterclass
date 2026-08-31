# SQL Solution

**Author:** pranto1209
**Votes:** 5
**Link:** [https://leetcode.com/problems/rank-scores/solutions/3324093/](https://leetcode.com/problems/rank-scores/solutions/3324093/)

---

# Code
```
select 
    score,
    dense_rank() over (order by score desc) as rank
from Scores;
```