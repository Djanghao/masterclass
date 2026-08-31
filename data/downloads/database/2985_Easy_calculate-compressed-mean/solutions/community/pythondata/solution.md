# Pandas, beats 100%

**Author:** Prachi_404
**Votes:** 0
**Link:** [https://leetcode.com/problems/calculate-compressed-mean/solutions/6073571/](https://leetcode.com/problems/calculate-compressed-mean/solutions/6073571/)

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

def compressed_mean(orders: pd.DataFrame) -> pd.DataFrame:
    total_item= (orders['item_count']*orders['order_occurrences']).sum()
    total_orders= orders['order_occurrences'].sum()
    average_items_per_order= round(total_item/total_orders,2)
    return pd.DataFrame({'average_items_per_order': [average_items_per_order]})



```