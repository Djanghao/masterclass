# Solution with windows func

**Author:** Inveterate_Enthusiast
**Votes:** 1
**Link:** [https://leetcode.com/problems/account-balance/solutions/5825528/](https://leetcode.com/problems/account-balance/solutions/5825528/)

---

# Code on Python
```python
import pandas as pd

def grouping(df: pd.DataFrame) -> pd.Series:
    balance_list = list()
    cur_balance = 0
    for index, row in df.iterrows():
        cur_balance += row["amount"] if row["type"] == "Deposit" else -(row["amount"])
        cur_balance = cur_balance if cur_balance >= 0 else 0
        balance_list.append(cur_balance)

    return pd.Series(
        data=[df["day"], balance_list],
        index=["day", "balance"]
    )

def account_balance(transactions: pd.DataFrame) -> pd.DataFrame:
    if transactions.empty:
        return pd.DataFrame({
            "account_id": list(),
            "day": list(),
            "balance": list()
        })
    grouped = transactions.sort_values(by="day", ascending=True).groupby(by="account_id", as_index=True).apply(grouping, include_groups=False).reset_index()
    exploded = grouped.explode(["day", "balance"])
    return exploded.sort_values(by=["account_id", "day"], ascending=[True, True])
```
```python
import pandas as pd

def account_balance(transactions: pd.DataFrame) -> pd.DataFrame:
    transactions.sort_values(by="day", ascending=True, inplace=True)
    transactions["balance_change"] = transactions.apply(lambda x: x["amount"] if x["type"] == "Deposit" else -(x["amount"]), axis=1)
    transactions["balance"] = transactions.groupby(by="account_id", as_index=False)["balance_change"].cumsum()
    return transactions[["account_id", "day", "balance"]].sort_values(by=["account_id", "day"], ascending=[True, True])
```
---
# Code on PostgreSQL
```postgresql []
-- Write your PostgreSQL query statement below
SELECT account_id, day,
SUM(
    CASE
        WHEN type = 'Deposit' THEN amount
        WHEN type = 'Withdraw' THEN -amount
        ELSE 0
    END
) OVER(PARTITION BY account_id ORDER BY day ASC) AS balance
FROM Transactions
ORDER BY account_id ASC, day ASC;
```