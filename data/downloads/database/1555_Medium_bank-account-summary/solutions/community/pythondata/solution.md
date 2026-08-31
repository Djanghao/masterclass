# Simple Pandas Solution

**Author:** yihan_chen
**Votes:** 1
**Link:** [https://leetcode.com/problems/bank-account-summary/solutions/4281153/](https://leetcode.com/problems/bank-account-summary/solutions/4281153/)

---



# Code
```
import pandas as pd

def bank_account_summary(users: pd.DataFrame, transactions: pd.DataFrame) -> pd.DataFrame:
    # deduct pay
    df = users.merge(transactions,left_on='user_id',right_on='paid_by',how='left').drop(columns=['paid_by','trans_id','paid_to','transacted_on']).groupby(['user_id','user_name','credit']).sum().reset_index()
    df['credit'] = df['credit']-df['amount']
    df.drop(columns=['amount'],inplace=True)
    # add amount in
    df = df.merge(transactions,left_on='user_id',right_on='paid_to',how='left').drop(columns=['paid_by','trans_id','paid_to','transacted_on']).groupby(['user_id','user_name','credit']).sum().reset_index()
    df['credit'] = df['credit']+df['amount']
    df.drop(columns=['amount'],inplace=True)
    # if reaches credit limit
    df['credit_limit_breached'] = df['credit'].apply(lambda x: 'Yes' if x<0 else 'No')
    return df
```