# Pandas Solution, NO Joins, Diff Min

**Author:** true-detective
**Votes:** 3
**Link:** [https://leetcode.com/problems/shortest-distance-in-a-line/solutions/4177475/](https://leetcode.com/problems/shortest-distance-in-a-line/solutions/4177475/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Cross Joins are $$O(n^2)$$ but the sorting is $$O(nlogn)$$.
Sort by values, then take the mininmum diff.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(nlogn)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(sort)$$

# Code
```
import pandas as pd

def shortest_distance(point: pd.DataFrame) -> pd.DataFrame:
    point.sort_values('x', inplace=True)
    return pd.DataFrame({
        'shortest': [point.x.diff().min()]
    })
```