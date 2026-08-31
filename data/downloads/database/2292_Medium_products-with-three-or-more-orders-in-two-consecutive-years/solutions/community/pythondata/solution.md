# 4 lines Pandas

**Author:** true-detective
**Votes:** 1
**Link:** [https://leetcode.com/problems/products-with-three-or-more-orders-in-two-consecutive-years/solutions/4096021/](https://leetcode.com/problems/products-with-three-or-more-orders-in-two-consecutive-years/solutions/4096021/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
first separate a `year` column to be able to work easily with year difference. 

use the `diff` trick on `year` column, whenever the `diff` is `1` it means there is a consecutive year.
# Code
```
import pandas as pd

def find_valid_products(orders: pd.DataFrame) -> pd.DataFrame:
    orders['year'] = orders['purchase_date'].dt.year
    orders = orders.groupby(['product_id', 'year'])['quantity'].count().reset_index(name='quantity')
    orders = orders.groupby('product_id').apply(lambda g: (g[g['quantity'] >= 3]['year'].diff() == 1).any())
    return orders[orders].reset_index()[['product_id']]

```