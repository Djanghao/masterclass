# Easy to understand solution

**Author:** KunPpBu
**Votes:** 1
**Link:** [https://leetcode.com/problems/page-recommendations/solutions/4436615/](https://leetcode.com/problems/page-recommendations/solutions/4436615/)

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
import numpy as np

def page_recommendations(friendship: pd.DataFrame, likes: pd.DataFrame) -> pd.DataFrame:
    friendship['friends'] = np.where(friendship.user1_id == 1, friendship.user2_id, np.where(friendship.user2_id ==1, friendship.user1_id, 0))
    df = pd.merge(friendship, likes, 'inner', left_on = 'friends', right_on = 'user_id')
    user1_page = likes[likes['user_id']==1][['page_id']]
    result = df[~df['page_id'].isin(user1_page['page_id'])]
    return result[['page_id']].rename(columns = {'page_id':'recommended_page'}).drop_duplicates()
   
```