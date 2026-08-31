# Pandas 3 lines - count, rank, query

**Author:** piocarz
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-most-frequently-ordered-products-for-each-customer/solutions/4126146/](https://leetcode.com/problems/the-most-frequently-ordered-products-for-each-customer/solutions/4126146/)

---

# Approach
1. count how many times each customer bought each product
2. assign dense rank to this count - more purchases higher rank
3. leave only those with rank = 1, merge with `products`, to get product name

# Code
```
import pandas as pd

def most_frequently_products(customers: pd.DataFrame, orders: pd.DataFrame, products: pd.DataFrame) -> pd.DataFrame:
    df = orders.groupby(["customer_id","product_id"])["order_id"].count().reset_index()
    df = df.assign(rnk = df.groupby("customer_id").order_id.rank(method="dense",ascending=0))
    return df.query("rnk==1").merge(products, on="product_id").iloc[:,[0,1,4]]
```