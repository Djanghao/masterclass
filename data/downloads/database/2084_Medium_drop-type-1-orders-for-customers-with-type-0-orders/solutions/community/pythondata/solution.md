# Easy pandas solution

**Author:** okmhygv
**Votes:** 2
**Link:** [https://leetcode.com/problems/drop-type-1-orders-for-customers-with-type-0-orders/solutions/4158964/](https://leetcode.com/problems/drop-type-1-orders-for-customers-with-type-0-orders/solutions/4158964/)

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
```
import pandas as pd

def drop_specific_orders(orders: pd.DataFrame) -> pd.DataFrame:
    id_0 = orders[orders['order_type'] == 0]
    id_non = orders[~orders["customer_id"].isin(id_0["customer_id"]) ]

    df = pd.concat([id_0,id_non])


    return df
```