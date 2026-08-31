# Pandas oneliner: query, count

**Author:** piocarz
**Votes:** 1
**Link:** [https://leetcode.com/problems/second-degree-follower/solutions/4087544/](https://leetcode.com/problems/second-degree-follower/solutions/4087544/)

---

# Intuition
Filter guys that have followers, and count how many times they appear as followee. Rename columns.

# Code
```
import pandas as pd

def second_degree_follower(follow: pd.DataFrame) -> pd.DataFrame:
    return follow.query("followee in follower").groupby("followee",as_index=0).count().rename(columns={"followee":"follower","follower":"num"})
    
```