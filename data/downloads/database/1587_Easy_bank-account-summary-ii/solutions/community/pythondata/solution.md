# Pandas one-liner 1️⃣ with JOIN

**Author:** alexeylitvak
**Votes:** 5
**Link:** [https://leetcode.com/problems/bank-account-summary-ii/solutions/4733333/](https://leetcode.com/problems/bank-account-summary-ii/solutions/4733333/)

---

# Approach
- Group by `account` and use `sum()` function to get balances.
- Since the `account` column is in index after previous step, I use `join()` function instead of `merge()` to join `transactions` dataframe with `users` dataframe.
- To keep chaining code style I use `query()` function to keep only accounts with amount more than 10000.
- Sort and rename columns to return in needed order.

To make the code easier to read, parentheses and newlines have been added.

# Code
```
import pandas as pd

def account_summary(users: pd.DataFrame, transactions: pd.DataFrame) -> pd.DataFrame:
    return (transactions
            .groupby('account')[['amount']].sum()
            .join(users.set_index('account'))
            .query('amount > 10000')
            [['name', 'amount']].rename(columns={'amount': 'balance'}))
```