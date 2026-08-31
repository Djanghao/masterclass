# step by step with comment

**Author:** zhangmanyuzmy
**Votes:** 1
**Link:** [https://leetcode.com/problems/immediate-food-delivery-iii/solutions/4626951/](https://leetcode.com/problems/immediate-food-delivery-iii/solutions/4626951/)

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

def immediate_delivery(delivery: pd.DataFrame) -> pd.DataFrame:
    # 1. create an immediate column
    delivery['immediate'] = np.where(delivery['order_date'] == delivery['customer_pref_delivery_date'], 1, 0)
    # 2. group by and compute
    delivery = delivery.groupby('order_date').agg(
        immediate_orders = ('immediate', 'sum'),
        total_orders = ('delivery_id', 'count')
    ).reset_index()
    # 3. compute rate and return
    delivery['immediate_percentage'] = round(delivery['immediate_orders'] / delivery['total_orders'] * 100, 2)
    return delivery[['order_date', 'immediate_percentage']].sort_values(by = 'order_date', ascending = True)
```