# Pandas Solution

**Author:** mlearngo
**Votes:** 1
**Link:** [https://leetcode.com/problems/reported-posts/solutions/4070037/](https://leetcode.com/problems/reported-posts/solutions/4070037/)

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
```
import pandas as pd

def reported_posts(actions: pd.DataFrame) -> pd.DataFrame:

    df = actions[(actions['action_date']=='2019-07-04')&(actions['action']=='report')]

    result = df.groupby('extra')['post_id'].nunique().reset_index()

    result = result[result['post_id']>0]
    
    return result.rename(columns={'extra':'report_reason','post_id':'report_count'})
```