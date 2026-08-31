# df where, np where

**Author:** hirehuidashi
**Votes:** 0
**Link:** [https://leetcode.com/problems/monthly-transactions-ii/solutions/6018444/](https://leetcode.com/problems/monthly-transactions-ii/solutions/6018444/)

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

def monthly_transactions(transactions: pd.DataFrame, chargebacks: pd.DataFrame) -> pd.DataFrame:
    chargebacks = chargebacks.merge(transactions, how='left', left_on='trans_id', right_on='id').rename(columns={'trans_date_x':'trans_date'}).drop(columns=['trans_date_y'])
    chargebacks['state'] = 'chargeback'
    df = pd.concat([chargebacks,transactions])
    df['month'] = df['trans_date'].dt.strftime('%Y-%m')
    df['approved_amount'] = df['amount'].where(df['state']=='approved', 0)
    df['chargeback_amount'] = df['amount'].where(df['state']=='chargeback', 0)
    df['approved_count'] = np.where(df['state']=='approved',1,0)
    df['chargeback_count'] = np.where(df['state']=='chargeback',1,0)
    df = df.groupby(['month','country'])[['approved_count','approved_amount','chargeback_count','chargeback_amount']].sum().reset_index()
    return df.loc[(df.approved_count > 0) | (df.chargeback_count > 0) ]
```