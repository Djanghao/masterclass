# Pandas, beats 96%

**Author:** Prachi_404
**Votes:** 0
**Link:** [https://leetcode.com/problems/total-traveled-distance/solutions/6073450/](https://leetcode.com/problems/total-traveled-distance/solutions/6073450/)

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

def get_total_distance(users: pd.DataFrame, rides: pd.DataFrame) -> pd.DataFrame:
    df= users.merge(rides,on='user_id',how='left')
    df=df.groupby(['user_id','name'])['distance'].sum().reset_index(name='traveled distance')
    return df.sort_values(by='user_id',ascending=True)
```