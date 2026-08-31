# merge() | groupby()| pandas simple and quick solution

**Author:** dengjr1509
**Votes:** 7
**Link:** [https://leetcode.com/problems/customer-who-visited-but-did-not-make-any-transactions/solutions/4107442/](https://leetcode.com/problems/customer-who-visited-but-did-not-make-any-transactions/solutions/4107442/)

---



# Code
```
import pandas as pd

def find_customers(visits: pd.DataFrame, transactions: pd.DataFrame) -> pd.DataFrame:
    
    df = visits.merge(transactions, how='left')

    df = df[df['transaction_id'].isna()].groupby(['customer_id'], as_index=False).agg(count_no_trans=('visit_id', 'nunique'))

    return df
```