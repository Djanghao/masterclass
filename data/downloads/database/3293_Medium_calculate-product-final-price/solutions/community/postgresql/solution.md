# Easy solution

**Author:** Inveterate_Enthusiast
**Votes:** 1
**Link:** [https://leetcode.com/problems/calculate-product-final-price/solutions/6034829/](https://leetcode.com/problems/calculate-product-final-price/solutions/6034829/)

---

# Code on Python
```python
import pandas as pd

def calculate_final_prices(products: pd.DataFrame, discounts: pd.DataFrame) -> pd.DataFrame:
    merged = pd.merge(
        left=products,
        right=discounts,
        how="left",
        on="category"
    ).fillna(0)
    merged["final_price"] = merged["price"] - (merged["price"] * merged["discount"] / 100)
    return merged[["product_id", "final_price", "category"]].sort_values(by="product_id", ascending=True)
```
---
# Code on PostgreSQL
```postgresql []
-- Write your PostgreSQL query statement below
SELECT
    main.product_id,
    (main.price - (main.price * COALESCE(sub.discount::NUMERIC / 100, 0))) AS final_price,
    main.category
FROM Products AS main
LEFT JOIN Discounts AS sub
ON sub.category = main.category
ORDER BY product_id ASC;
```