# Solution with windows func

**Author:** Inveterate_Enthusiast
**Votes:** 0
**Link:** [https://leetcode.com/problems/orders-with-maximum-quantity-above-average/solutions/5841255/](https://leetcode.com/problems/orders-with-maximum-quantity-above-average/solutions/5841255/)

---

# Code on Python
```python
import pandas as pd

def orders_above_average(orders_details: pd.DataFrame) -> pd.DataFrame:
    orders_details["our_rank"] = orders_details.groupby(by="order_id", as_index=False)["quantity"].rank(method="dense", ascending=False)
    orders_details["avg"] = orders_details.groupby(by="order_id", as_index=False)["quantity"].transform("mean")
    orders_details["max_avg"] = orders_details["avg"].max()
    orders_details["bool"] = orders_details["max_avg"] < orders_details["quantity"]
    return orders_details.loc[(orders_details["our_rank"] == 1)
                              &
                              (orders_details["bool"]), ["order_id"]]
```
---
# Code on PostgreSQL
```postgresql []
-- Write your PostgreSQL query statement below
WITH ranked AS
    (
    SELECT *,
    DENSE_RANK() OVER(PARTITION BY order_id ORDER BY quantity DESC) AS our_rank,
    AVG(quantity) OVER(PARTITION BY order_id) AS avg
    FROM OrdersDetails
    )
SELECT order_id
FROM ranked
WHERE our_rank = 1 AND quantity > (SELECT MAX(avg) FROM ranked);
```