# Pandas easy understand

**Author:** LLFC_LL
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-third-transaction/solutions/4807686/](https://leetcode.com/problems/find-third-transaction/solutions/4807686/)

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

def find_third_transaction(transactions: pd.DataFrame) -> pd.DataFrame:
    
    df = transactions.sort_values(['user_id', 'transaction_date'])

    df = df.groupby('user_id').head(3)

    df = df[(df['spend'] > df.shift(1)['spend']) & (df['user_id'] == df.shift(1)['user_id']) &
            (df['spend'] > df.shift(2)['spend']) & (df['user_id'] == df.shift(2)['user_id'])]

    return df.rename(columns={'spend': 'third_transaction_spend', 'transaction_date': 'third_transaction_date'})[['user_id', 'third_transaction_spend', 'third_transaction_date']].sort_values('user_id')
```