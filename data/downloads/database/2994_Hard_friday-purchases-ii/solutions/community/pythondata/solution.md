# change to day name then group by

**Author:** tal009
**Votes:** 0
**Link:** [https://leetcode.com/problems/friday-purchases-ii/solutions/5470665/](https://leetcode.com/problems/friday-purchases-ii/solutions/5470665/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
beats %100 -- O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import pandas as pd

def friday_purchases(purchases: pd.DataFrame) -> pd.DataFrame:
    purchases["day"] = purchases["purchase_date"].dt.day_name()
    purchases = purchases.loc[purchases["day"] == "Friday"]
    gro = purchases.groupby("purchase_date", as_index=False)["amount_spend"].sum()
    new = pd.DataFrame({"week_of_month": [1, 2, 3, 4], "purchase_date": ["2023-11-03", "2023-11-10", "2023-11-17", "2023-11-24"]})
    new["purchase_date"] = pd.to_datetime(new["purchase_date"])
    mer = pd.merge(new, gro, how="left").fillna(0)
    return mer.rename(columns={"amount_spend": "total_amount"})
```