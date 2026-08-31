# step by step comment | pd.to_timedelta()

**Author:** zhangmanyuzmy
**Votes:** 0
**Link:** [https://leetcode.com/problems/customers-with-maximum-number-of-transactions-on-consecutive-days/solutions/5171381/](https://leetcode.com/problems/customers-with-maximum-number-of-transactions-on-consecutive-days/solutions/5171381/)

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

def find_customers(transactions: pd.DataFrame) -> pd.DataFrame:
    # 1. get row number
    transactions['row_number'] = transactions.sort_values(by = ['customer_id', 'transaction_date']).groupby('customer_id')['transaction_date'].rank(ascending = True)
    # 2. transaction_date - row_number to get the same base date as index
    transactions['base_date_index'] = transactions['transaction_date'] - pd.to_timedelta(transactions['row_number'], unit = 'd')
    # 3. groupby base_date_index and count
    transactions = transactions.groupby(['customer_id', 'base_date_index']).agg(
        consecutive_dates = ('transaction_id', 'count')
    ).reset_index()
    # 4. get customer_id with max consecutive_dates
    transactions = transactions[transactions['consecutive_dates'] == max(transactions['consecutive_dates'])]
    return transactions[['customer_id']].sort_values(by = 'customer_id')
```