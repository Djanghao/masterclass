# Simple PANDAS solution

**Author:** midttalbe
**Votes:** 10
**Link:** [https://leetcode.com/problems/confirmation-rate/solutions/4092309/](https://leetcode.com/problems/confirmation-rate/solutions/4092309/)

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

def confirmation_rate(signups: pd.DataFrame, confirmations: pd.DataFrame) -> pd.DataFrame:
    confirmations['confirmation_rate'] = confirmations['action'].apply(lambda x:1 if x == 'confirmed' else 0)
    avg_conf = confirmations[['user_id','confirmation_rate']].groupby('user_id')['confirmation_rate'].mean().round(2).reset_index()
    output = pd.merge(signups['user_id'],avg_conf,how='left').fillna(0)  
    return output
```