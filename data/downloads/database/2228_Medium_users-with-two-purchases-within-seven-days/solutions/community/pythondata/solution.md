# Shift (aka 'lag')

**Author:** jonnyz
**Votes:** 0
**Link:** [https://leetcode.com/problems/users-with-two-purchases-within-seven-days/solutions/4931034/](https://leetcode.com/problems/users-with-two-purchases-within-seven-days/solutions/4931034/)

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

def find_valid_users(purchases: pd.DataFrame) -> pd.DataFrame:
    
    # Create a lag for the previous purchase date of each user, purchase dat asc
    purchases['lag'] = purchases.sort_values(by='purchase_date',ascending=True)\\
    .groupby(['user_id'])['purchase_date'].shift(1)

    purchases['date_diff'] = (purchases['purchase_date'] - purchases['lag']).dt.days.abs()

    return purchases[purchases['date_diff'] <= 7][['user_id']].drop_duplicates().sort_values(by='user_id',ascending=True)
    
```