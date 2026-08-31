# Python 3 || 3 lines, Divide and conquer  ||

**Author:** Spaulding_
**Votes:** 9
**Link:** [https://leetcode.com/problems/odd-and-even-transactions/solutions/5492795/](https://leetcode.com/problems/odd-and-even-transactions/solutions/5492795/)

---

Here's the plan:
1. Filter for *odd* and *even* transactions.
2. Use *groupby* on each of these dataframes to find the daily sums.
3. Merge the dataframes, sort, fix the nulls, and rename the columns.
```
import pandas as pd

def sum_daily_odd_even(transactions: pd.DataFrame) -> pd.DataFrame:
    
    odds  = transactions[transactions.amount%2 == 1
             ].groupby(['transaction_date']).sum().reset_index()

    evens = transactions[transactions.amount%2 == 0
             ].groupby(['transaction_date']).sum().reset_index()

    return  pd.merge(odds, evens, how = 'outer', on = 'transaction_date'
             ).sort_values('transaction_date').fillna(0).iloc[:,[0,2,4]
             ].rename(columns = {'amount_x':'odd_sum', 'amount_y':'even_sum'})
```