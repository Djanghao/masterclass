# Clear and Beats 100%

**Author:** wulfnovak
**Votes:** 1
**Link:** [https://leetcode.com/problems/friday-purchase-iii/solutions/5990699/](https://leetcode.com/problems/friday-purchase-iii/solutions/5990699/)

---

# Code
```pythondata []
import pandas as pd

def friday_purchases(purchases: pd.DataFrame, users: pd.DataFrame) -> pd.DataFrame:
    
    # create key for join
    join = pd.DataFrame({'week_of_month': [1, 1, 2, 2, 3, 3, 4, 4],
                         'membership': ['Premium', 'VIP']*4,
                         'purchase_date': ['2023-11-03', '2023-11-03', '2023-11-10', '2023-11-10',
                                           '2023-11-17', '2023-11-17', '2023-11-24', '2023-11-24']})
    join['purchase_date'] = pd.to_datetime(join['purchase_date'])

    # get total spend by membership and purchase date     
    total_spend = (purchases.merge(users, how='left', on='user_id')
                            .groupby(['membership', 'purchase_date'])
                            .agg(total_amount = ('amount_spend', 'sum')))

    # join to join key, fill nas
    result = (join.merge(total_spend, how='left', on=['membership', 'purchase_date'])
                  .drop(columns='purchase_date')
                  .fillna(0))
                  
    return result

```