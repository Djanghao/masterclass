# Solution with grouping or pivot

**Author:** Inveterate_Enthusiast
**Votes:** 1
**Link:** [https://leetcode.com/problems/products-price-for-each-store/solutions/5496919/](https://leetcode.com/problems/products-price-for-each-store/solutions/5496919/)

---

# Code on Python
```python
import pandas as pd

def products_price(products: pd.DataFrame) -> pd.DataFrame:
    return products.pivot(
        index="product_id",
        columns="store",
        values="price"
    ).reset_index()
```

```python
import pandas as pd

def grouping(df: pd.DataFrame) -> pd.Series:
    ans = pd.Series()
    ans["store1"] = x if (x := df.loc[df["store"] == "store1"]["price"].sum()) else pd.NA
    ans["store2"] = x if (x := df.loc[df["store"] == "store2"]["price"].sum()) else pd.NA
    ans["store3"] = x if (x := df.loc[df["store"] == "store3"]["price"].sum()) else pd.NA
    return ans

def products_price(products: pd.DataFrame) -> pd.DataFrame:
    return (products
            .groupby(by="product_id", as_index=True)
            .apply(grouping, include_groups=False)
            .reset_index())
```
---
# Code on PostgreSQL
```sql
SELECT product_id,
SUM(CASE WHEN store = 'store1' THEN price END) AS store1,
SUM(CASE WHEN store = 'store2' THEN price END) AS store2,
SUM(CASE WHEN store = 'store3' THEN price END) AS store3
FROM Products
GROUP BY product_id;
```