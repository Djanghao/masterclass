# Ugly solution, I guess

**Author:** Inveterate_Enthusiast
**Votes:** 0
**Link:** [https://leetcode.com/problems/market-analysis-ii/solutions/5542728/](https://leetcode.com/problems/market-analysis-ii/solutions/5542728/)

---

# Code on Python
```python
import pandas as pd
import numpy as np

def market_analysis(users: pd.DataFrame, orders: pd.DataFrame, items: pd.DataFrame) -> pd.DataFrame:
    orders["our_rank"] = orders.groupby(by="seller_id", as_index=False)["order_date"].rank(method="dense", ascending=True)
    ranked_orders = orders.loc[(orders["our_rank"] == 1) | (orders["our_rank"] == 2), ["seller_id", "our_rank", "item_id"]]
    indices = ranked_orders.groupby(by="seller_id")["our_rank"].idxmax()
    ranked_orders = ranked_orders.loc[indices]
    merged = pd.merge(
        left=users.loc[:,["user_id", "favorite_brand"]].rename(columns={"user_id": "seller_id"}),
        right=(pd.merge(
            left=ranked_orders,
            right=items,
            on="item_id",
            how="left"
        )),
        on="seller_id",
        how="left"
    )
    merged["2nd_item_fav_brand"] = np.where(merged["our_rank"] == 1, "no", np.where(merged["favorite_brand"] == merged["item_brand"], "yes", "no"))
    return merged.loc[:, ["seller_id", "2nd_item_fav_brand"]]
```
---
# Code on PostgreSQL
```sql
WITH ranked AS
    (SELECT seller_id, item_id, DENSE_RANK() OVER (PARTITION BY seller_id ORDER BY order_date ASC) AS our_rank
    FROM Orders),
filtered AS
    (SELECT seller_id, MAX(our_rank) AS our_rank
    FROM ranked
    WHERE our_rank = 1 OR our_rank = 2
    GROUP BY seller_id),
merged AS
    (SELECT end_sub.user_id, COALESCE(main.our_rank, 1) AS our_rank, new_sub.item_brand, end_sub.favorite_brand
    FROM filtered AS main
    LEFT JOIN
    ranked AS sub
    ON main.seller_id = sub.seller_id AND main.our_rank = sub.our_rank
    LEFT JOIN
    Items AS new_sub
    ON sub.item_id = new_sub.item_id
    RIGHT JOIN
    Users AS end_sub
    ON end_sub.user_id = main.seller_id)
SELECT user_id AS seller_id, (
CASE
    WHEN our_rank = 1 THEN 'no'
    WHEN item_brand != favorite_brand THEN 'no'
    ELSE 'yes'
END
) AS "2nd_item_fav_brand"
FROM merged;
```