# Solution with set

**Author:** Inveterate_Enthusiast
**Votes:** 0
**Link:** [https://leetcode.com/problems/customers-who-bought-products-a-and-b-but-not-c/solutions/5705659/](https://leetcode.com/problems/customers-who-bought-products-a-and-b-but-not-c/solutions/5705659/)

---

# Code on Python
```python
import pandas as pd

def find_customers(customers: pd.DataFrame, orders: pd.DataFrame) -> pd.DataFrame:
    grouped = (orders
               .merge(right=customers, on="customer_id", how="left")
               .groupby(by=["customer_id", "customer_name"], as_index=False)
               .agg(product_set=("product_name", lambda x: set(x))))
    return (grouped
            .loc[
            ~(grouped["product_set"] >= set("C")) &
            (grouped["product_set"] >= set(["A", "B"])),
            ["customer_id", "customer_name"]
        ].sort_values(by="customer_id", ascending=True)
    )
```
---
# Code on PostgreSQL
```postgresql []
-- Write your PostgreSQL query statement below
WITH grouped AS
    (SELECT customer_id
    FROM Orders
    GROUP BY customer_id
    HAVING (NOT ARRAY_AGG(DISTINCT product_name)::TEXT[] @> ARRAY['C'])
    AND (ARRAY_AGG(DISTINCT product_name)::TEXT[] @> ARRAY['A', 'B']))
SELECT main.customer_id, sub.customer_name
FROM grouped AS main
LEFT JOIN
Customers AS sub
ON main.customer_id = sub.customer_id
ORDER BY main.customer_id ASC;
```