# Beats  100% (Pandas)

**Author:** Prachi_404
**Votes:** 0
**Link:** [https://leetcode.com/problems/active-businesses/solutions/6111641/](https://leetcode.com/problems/active-businesses/solutions/6111641/)

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

def active_businesses(events: pd.DataFrame) -> pd.DataFrame:
    events['average'] = events.groupby('event_type')['occurrences'].transform('mean')
    events= events[events['occurrences'] >events['average']]
    events= events.groupby('business_id')['event_type'].count().reset_index(name='num_of_events')
    return events[events['num_of_events']>1][['business_id']]
    
```