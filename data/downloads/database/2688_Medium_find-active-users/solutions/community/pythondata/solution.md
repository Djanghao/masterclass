# Beat 100% with groupby and shift

**Author:** sankai
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-active-users/solutions/6109851/](https://leetcode.com/problems/find-active-users/solutions/6109851/)

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

def find_active_users(users: pd.DataFrame) -> pd.DataFrame:
    users.sort_values(by=['user_id', 'created_at'], ascending=[1,1], inplace=True)

    users['second_date'] = users.groupby('user_id')['created_at'].shift(-1)

    df = users.loc[(users['second_date'] - users['created_at']).dt.days <= 7, ['user_id']]

    return df.drop_duplicates()
```