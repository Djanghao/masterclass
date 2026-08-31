# step by step with comment

**Author:** zhangmanyuzmy
**Votes:** 0
**Link:** [https://leetcode.com/problems/popularity-percentage/solutions/5038273/](https://leetcode.com/problems/popularity-percentage/solutions/5038273/)

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

def popularity_percentage(friends: pd.DataFrame) -> pd.DataFrame:
    # 1. get all relationships (both sides)
    all_friends = pd.concat([friends, friends[['user2', 'user1']].rename(columns = {'user2':'user1', 'user1':'user2'})])
    # 2. groupby each user1 and count friends
    all_friends = all_friends.drop_duplicates().groupby('user1').agg(
        num_friends = ('user2', 'count')).reset_index()
    # 3. get ttl num and compute pct
    ttl_num = len(all_friends)
    all_friends['percentage_popularity'] = round(100 * all_friends['num_friends'] / ttl_num, 2)
    return all_friends[['user1', 'percentage_popularity']].sort_values(by = 'user1')
```