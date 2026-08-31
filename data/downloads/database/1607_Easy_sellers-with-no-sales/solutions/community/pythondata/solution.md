# Pandas, simple solution

**Author:** Prachi_404
**Votes:** 0
**Link:** [https://leetcode.com/problems/sellers-with-no-sales/solutions/6046397/](https://leetcode.com/problems/sellers-with-no-sales/solutions/6046397/)

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

def sellers_with_no_sales(customer: pd.DataFrame, orders: pd.DataFrame, seller: pd.DataFrame) -> pd.DataFrame:
    orders_2020= orders[orders['sale_date'].dt.year==2020]
    merged = seller.merge(orders_2020,on='seller_id',how='left')
    return merged[merged['order_id'].isna()][['seller_name']].sort_values(by='seller_name',ascending=True)
```