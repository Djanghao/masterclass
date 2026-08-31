# step by step with comment |  merge and count nunique()

**Author:** zhangmanyuzmy
**Votes:** 0
**Link:** [https://leetcode.com/problems/leetcodify-similar-friends/solutions/5127613/](https://leetcode.com/problems/leetcodify-similar-friends/solutions/5127613/)

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

def leetcodify_similar_friends(listens: pd.DataFrame, friendship: pd.DataFrame) -> pd.DataFrame:
    # 1. self merge listens to get user1 and user1
    listens = listens.merge(listens, how = 'inner', on = ['song_id', 'day'])
    # 2. filter based on condition : user1 < user2
    listens = listens[listens['user_id_x'] < listens['user_id_y']]
    # 3. filter basd on condition: count >= 3
    listens = listens.groupby(['user_id_x', 'user_id_y', 'day']).agg(
        same_songs = ('song_id', 'nunique')
    ).reset_index()
    listens = listens[listens['same_songs'] >= 3] 
    # 4. merge with friendship to get final pairs
    friendship = friendship.merge(listens, how = 'inner', left_on = ['user1_id', 'user2_id'], right_on = ['user_id_x', 'user_id_y'])
    return friendship[['user1_id', 'user2_id']].drop_duplicates()
```