# Solution with windows func

**Author:** Inveterate_Enthusiast
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-transaction-each-day/solutions/5815386/](https://leetcode.com/problems/maximum-transaction-each-day/solutions/5815386/)

---

# Code on Python
```python
import pandas as pd

def find_maximum_transaction(transactions: pd.DataFrame) -> pd.DataFrame:
    transactions["date"] = pd.to_datetime(transactions["day"]).dt.strftime("%Y-%m-%d")
    transactions["our_rank"] = transactions.groupby(by="date", as_index=False)["amount"].rank(method="min", ascending=False)
    return transactions.loc[transactions["our_rank"] == 1, ["transaction_id"]].sort_values(by="transaction_id", ascending=True)
```
---
# Code on PostgreSQL
```postgresql []
-- Write your PostgreSQL query statement below
WITH ranked AS
    (
    SELECT *, RANK() OVER(PARTITION BY day::DATE ORDER BY amount DESC) AS our_rank
    FROM Transactions
    )
SELECT transaction_id
FROM ranked
WHERE our_rank = 1
ORDER BY transaction_id ASC;
```