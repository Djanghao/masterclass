# Pandas || Simplest solution || Four lines || Only uses .groupby(), .loc[] and .astype("category")

**Author:** Kasuyai
**Votes:** 1
**Link:** [https://leetcode.com/problems/user-purchase-platform/solutions/5485020/](https://leetcode.com/problems/user-purchase-platform/solutions/5485020/)

---

# Approach

1. You want to identify users and spend dates where it occurs across platforms. To do so, sum all values when grouping by `"spend_date"` and `"user_id"`. Your resulting dataframe will look like this:

```
  spend_date  user_id       platform  amount
0 2019-07-01        1  mobiledesktop     200
1 2019-07-01        2         mobile     100
2 2019-07-01        3        desktop     100
3 2019-07-02        2         mobile     100
4 2019-07-02        3        desktop     100
```

2. Then we want to change all non-desktop and non-mobile into "both", resulting in a dataframe like this:

```
  spend_date  user_id platform  amount
0 2019-07-01        1     both     200
1 2019-07-01        2   mobile     100
2 2019-07-01        3  desktop     100
3 2019-07-02        2   mobile     100
4 2019-07-02        3  desktop     100
```

3. Then, you want to set "platform" as a category so that it will output `0` where other categories have dates. If you try to do it without setting categories your result will look like:

```
  spend_date platform  total_amount  total_users
0 2019-07-01     both           200            1
1 2019-07-01  desktop           100            1
2 2019-07-01   mobile           100            1
3 2019-07-02  desktop           100            1
4 2019-07-02   mobile           100            1
```

4. Finally, perform the groupby aggregation to return the desired result:

```
  spend_date platform  total_amount  total_users
0 2019-07-01  desktop           100            1
1 2019-07-01   mobile           100            1
2 2019-07-01     both           200            1
3 2019-07-02  desktop           100            1
4 2019-07-02   mobile           100            1
5 2019-07-02     both             0            0
```

# Code
```
import pandas as pd

def user_purchase(spending: pd.DataFrame) -> pd.DataFrame:
    # Step 1: Identify spending by platform.
    df = spending.groupby(
        ["spend_date", "user_id"], observed=False, as_index=False
    ).sum()

    # Step 2: Replace "desktopmobile" or "mobiledesktop" with "both".
    df.loc[(df["platform"] != "mobile") & (df["platform"] != "desktop"), "platform"] = (
        "both"
    )

    # Step 3: Set platform as category to show "0" results.
    df["platform"] = (
        df["platform"]
        .astype("category")
        .cat.set_categories(["desktop", "mobile", "both"])
    )

    # Step 4: Return dataframe using final groupby aggregations.
    return (
        df.groupby(["spend_date", "platform"], observed=False)
        .agg(total_amount=("amount", "sum"), total_users=("user_id", "count"))
        .reset_index()
    )
```