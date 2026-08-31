# Beat 94%

**Author:** sankai
**Votes:** 0
**Link:** [https://leetcode.com/problems/suspicious-bank-accounts/solutions/6082847/](https://leetcode.com/problems/suspicious-bank-accounts/solutions/6082847/)

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

def suspicious_bank_accounts(accounts: pd.DataFrame, transactions: pd.DataFrame) -> pd.DataFrame:
    transactions = transactions[transactions.type=='Creditor']
    transactions['month'] = transactions['day'].dt.month
    sum_df = transactions.groupby(['account_id', 'month'])['amount'].sum().reset_index(name='sum_amount')
    merged_df = sum_df.merge(accounts, how='inner', on='account_id')
    merged_df.sort_values(by=['account_id', 'month'], ascending=[1,1], inplace=True)
    df = merged_df[merged_df.sum_amount > merged_df.max_income]
    result_df = df[(df.month == df.month.shift(1) + 1) & (df.account_id == df.account_id.shift(1))]
 
    return result_df[['account_id']].drop_duplicates()
 
   
```