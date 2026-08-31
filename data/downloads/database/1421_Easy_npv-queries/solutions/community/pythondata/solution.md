# Pandas

**Author:** Prachi_404
**Votes:** 0
**Link:** [https://leetcode.com/problems/npv-queries/solutions/6035835/](https://leetcode.com/problems/npv-queries/solutions/6035835/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```pythondata []
import pandas as pd

def npv_queries(npv: pd.DataFrame, queries: pd.DataFrame) -> pd.DataFrame:
    return pd.merge(
        left=queries,
        right=npv,
        how="left",
        on=["id", "year"]
    ).assign(npv=lambda x: x["npv"].fillna(0))[["id", "year", "npv"]]
    
```