# Beats 96% memory

**Author:** oamenmodupe
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-most-recent-orders-for-each-product/solutions/6138885/](https://leetcode.com/problems/the-most-recent-orders-for-each-product/solutions/6138885/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```pythondata []
import pandas as pd

def most_recent_orders(customers: pd.DataFrame, orders: pd.DataFrame, products: pd.DataFrame) -> pd.DataFrame:
    max_dates = orders.groupby('product_id', as_index = False)['order_date'].max()

    merged_v1 = pd.merge(orders, max_dates, suffixes = ('', 'max'), on = 'product_id')

    recent_orders = merged_v1[merged_v1['order_date'] == merged_v1['order_datemax']]

    final_df = pd.merge(products, recent_orders, on = 'product_id')[['product_name', 'product_id', 'order_id', 'order_date']]

    return final_df.sort_values(by = ['product_name', 'product_id', 'order_id'])
```