# Pandas

**Author:** Prachi_404
**Votes:** 0
**Link:** [https://leetcode.com/problems/bikes-last-time-used/solutions/6073443/](https://leetcode.com/problems/bikes-last-time-used/solutions/6073443/)

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

def last_used_time(bikes: pd.DataFrame) -> pd.DataFrame:
    df= bikes.groupby('bike_number')['end_time'].max().reset_index()
    return df.sort_values(by='end_time',ascending=False)
```