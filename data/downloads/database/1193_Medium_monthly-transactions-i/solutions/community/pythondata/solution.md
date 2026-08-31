# Pandas simple solution

**Author:** zhakroman
**Votes:** 11
**Link:** [https://leetcode.com/problems/monthly-transactions-i/solutions/4168963/](https://leetcode.com/problems/monthly-transactions-i/solutions/4168963/)

---

# Code
```
import pandas as pd
import numpy as np

def monthly_transactions(transactions: pd.DataFrame) -> pd.DataFrame:
    transactions['approved'] = np.where(transactions['state'] == 'approved', transactions['amount'], np.nan)
    transactions['month'] = transactions['trans_date'].dt.strftime("%Y-%m")
    return transactions.groupby(['month', 'country']).agg(
        trans_count=('state', 'count'),
        approved_count=('approved', 'count'),
        trans_total_amount=('amount', 'sum'),
        approved_total_amount=('approved', 'sum')
    ).reset_index()
    
```