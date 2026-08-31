# Easy solution

**Author:** Inveterate_Enthusiast
**Votes:** 1
**Link:** [https://leetcode.com/problems/drop-type-1-orders-for-customers-with-type-0-orders/solutions/5832965/](https://leetcode.com/problems/drop-type-1-orders-for-customers-with-type-0-orders/solutions/5832965/)

---

# Code on Python
```python
import pandas as pd

def drop_specific_orders(orders: pd.DataFrame) -> pd.DataFrame:
    orders["min"] = orders.groupby(by="customer_id", as_index=False)["order_type"].transform("min")
    return orders.loc[((orders["min"] == 0) & (orders["order_type"] == 0))
                      |
                      (orders["min"] != 0)].drop(labels="min", axis=1)
```
---
# Code on PostgreSQL
```postgresql []
-- Write your PostgreSQL query statement below
WITH added AS
    (
    SELECT *, MIN(order_type) OVER(PARTITION BY customer_id) AS our_min
    FROM Orders
    )
SELECT order_id, customer_id, order_type
FROM added
WHERE (our_min = 0 AND order_type = 0)
OR (our_min <> 0);
```