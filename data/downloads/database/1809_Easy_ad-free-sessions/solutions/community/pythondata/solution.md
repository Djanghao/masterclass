# Pandas

**Author:** Prachi_404
**Votes:** 0
**Link:** [https://leetcode.com/problems/ad-free-sessions/solutions/6070440/](https://leetcode.com/problems/ad-free-sessions/solutions/6070440/)

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

def ad_free_sessions(playback: pd.DataFrame, ads: pd.DataFrame) -> pd.DataFrame:
    merged= playback.merge(ads,on='customer_id',how='left')
    df=merged[(merged['timestamp']>=merged['start_time']) & (merged['timestamp']<=merged['end_time'])]
    result=playback[~playback['session_id'].drop_duplicates().isin(df['session_id'])][['session_id']]
    return result
```