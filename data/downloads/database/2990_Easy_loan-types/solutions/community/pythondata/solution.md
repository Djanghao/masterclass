# Beat 85%

**Author:** sankai
**Votes:** 0
**Link:** [https://leetcode.com/problems/loan-types/solutions/6069691/](https://leetcode.com/problems/loan-types/solutions/6069691/)

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

def loan_types(loans: pd.DataFrame) -> pd.DataFrame:
    df = loans.groupby('user_id')['loan_type'].apply(lambda x: set(x)).reset_index()
    return df[df['loan_type'].apply(lambda x: 'Refinance' in x and 'Mortgage' in x)][['user_id']].sort_values(by='user_id')
```