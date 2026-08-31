# Solution with grouping

**Author:** Inveterate_Enthusiast
**Votes:** 0
**Link:** [https://leetcode.com/problems/immediate-food-delivery-iii/solutions/5922502/](https://leetcode.com/problems/immediate-food-delivery-iii/solutions/5922502/)

---

# Code on Python
```python
import pandas as pd

def immediate_delivery(delivery: pd.DataFrame) -> pd.DataFrame:
    delivery["bool"] = delivery["order_date"] == delivery["customer_pref_delivery_date"]
    grouped = delivery.groupby(by="order_date", as_index=False).agg(
        immediate=("bool", "sum"),
        all=("delivery_id", "count")
    )
    grouped["immediate_percentage"] = (grouped["immediate"] / grouped["all"] * 100 + 1e-9).round(2)
    return grouped[["order_date", "immediate_percentage"]].sort_values(by="order_date", ascending=True)
```
---
# Code on PostgreSQL
```sql
WITH bool AS (
    SELECT
        *,
        (CASE WHEN order_date = customer_pref_delivery_date THEN 1 ELSE 0 END) AS bool
    FROM Delivery
)
SELECT
    order_date,
    ROUND((SUM(bool)::NUMERIC / COUNT(delivery_id)::NUMERIC) * 100, 2) AS immediate_percentage
FROM bool
GROUP BY order_date
ORDER BY order_date ASC;
```