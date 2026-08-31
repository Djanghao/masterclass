# Solution with grouping and windows func

**Author:** Inveterate_Enthusiast
**Votes:** 0
**Link:** [https://leetcode.com/problems/product-sales-analysis-iv/solutions/5900290/](https://leetcode.com/problems/product-sales-analysis-iv/solutions/5900290/)

---

# Code on Python
```python
import pandas as pd

def product_sales_analysis(sales: pd.DataFrame, product: pd.DataFrame) -> pd.DataFrame:
    merged = pd.merge(
        left=sales,
        right=product,
        how="left",
        on="product_id"
    )
    merged["amount"] = merged["quantity"] * merged["price"]
    grouped = merged.groupby(by=["user_id", "product_id"], as_index=False).agg(amount=("amount", "sum"))
    grouped["rank"] = grouped.groupby(by="user_id", as_index=False)["amount"].rank(method="dense", ascending=False)
    return grouped.loc[grouped["rank"] == 1, ["user_id", "product_id"]]
```
# Code on PostgreSQL
```postgresql []
-- Write your PostgreSQL query statement below
WITH merged AS (
    SELECT
        main.user_id,
        main.product_id,
        (main.quantity * sub.price) AS amount
    FROM Sales AS main
    
    LEFT JOIN Product AS sub
    ON sub.product_id = main.product_id
),
grouped AS (
    SELECT
        user_id,
        product_id,
        DENSE_RANK() OVER(PARTITION BY user_id ORDER BY SUM(amount) DESC) AS our_rank
        FROM merged
        GROUP BY user_id, product_id
)
SELECT
    user_id, product_id
FROM grouped
WHERE our_rank = 1;
```