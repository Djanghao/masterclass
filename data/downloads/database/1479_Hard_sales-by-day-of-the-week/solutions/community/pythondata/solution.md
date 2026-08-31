# Pandas - Clean solution using unstack

**Author:** andykolosov
**Votes:** 2
**Link:** [https://leetcode.com/problems/sales-by-day-of-the-week/solutions/4231464/](https://leetcode.com/problems/sales-by-day-of-the-week/solutions/4231464/)

---

```
import pandas as pd

def sales_by_day(orders: pd.DataFrame, items: pd.DataFrame) -> pd.DataFrame:
    # add categorical day_of_week column to the orders data
    days_type = pd.CategoricalDtype(
        categories=["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], 
        ordered=True)
    orders["day_of_week"] = orders["order_date"].dt.strftime("%A").astype(days_type)

    # get order information for all item categories (including the ones for which we do not have orders)
    df = orders.merge(items, on="item_id", how="right").fillna({"quantity":0, "day_of_week":"Monday"})

    # group by category / day of week
    df = df.groupby(["item_category", "day_of_week"])["quantity"].sum()

    # unstack
    df = df.unstack().fillna(0).reset_index()

    # output formatting
    df = df.rename(columns={"item_category":"category"})
    return df
```