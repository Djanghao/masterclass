# Pandas explanation line by line

**Author:** piocarz
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-transactions-per-visit/solutions/4104298/](https://leetcode.com/problems/number-of-transactions-per-visit/solutions/4104298/)

---

# Approach
1. First we merge visits and transactions `left` on visits, since we also want to include visits without transactions
2. Grouping and counting amount for each visit, will give us number of transaction per visit as `transactions_count`
3. Now, when we have number of transaction per visit, we want to group it again, to get distribution of `transactions_count`
4. Since we want to have all possible number of transaction per visit, up to maximum number we got, we have to create additional table/column with all numbers up to maximum - simply use python range.
5. Finally, merge both tables, left on newly created table, and fill Nulls with 0

# Code
```
import pandas as pd

def draw_chart(visits: pd.DataFrame, transactions: pd.DataFrame) -> pd.DataFrame:
    df = visits.merge(transactions, left_on = ["visit_date","user_id"], right_on = ["transaction_date","user_id"],how = "left")
    df = df.groupby(["visit_date","user_id"], as_index = False).agg(transactions_count = ("amount","count"))
    df = df.groupby("transactions_count", as_index = False).agg(visits_count=("user_id","count"))
    output = pd.DataFrame({"transactions_count" : range(max(df.transactions_count)+1)})
    return output.merge(df, on="transactions_count", how="left").fillna(0)
```