# Easy Pandas Solution

**Author:** Siddhant1512
**Votes:** 0
**Link:** [https://leetcode.com/problems/activity-participants/solutions/6063812/](https://leetcode.com/problems/activity-participants/solutions/6063812/)

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

def activity_participants(friends: pd.DataFrame, activities: pd.DataFrame) -> pd.DataFrame:
    merged = pd.merge(friends, activities, left_on='activity', right_on='name')[['name_x','activity']]
    grouped = merged.groupby('activity')['name_x'].count().reset_index(name='count')
    maximum = grouped['count'].max()
    minimum = grouped['count'].min()
    return grouped[(grouped['count']>minimum) & (grouped['count']<maximum)][['activity']]
```