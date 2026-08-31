# neat and clean Pandas Solution

**Author:** Joooooooooooo
**Votes:** 1
**Link:** [https://leetcode.com/problems/customer-order-frequency/solutions/4683304/](https://leetcode.com/problems/customer-order-frequency/solutions/4683304/)

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

def customer_order_frequency(customers: pd.DataFrame, product: pd.DataFrame, orders: pd.DataFrame) -> pd.DataFrame:
    merged = orders.merge(customers,on='customer_id').merge(product,on='product_id')
    targetDate = ['2020-06','2020-07']
    merged['order_month'] =  merged['order_date'].dt.strftime("%Y-%m") 
    merged['pay'] = merged['quantity'] * merged['price']
    result = merged.query('order_month.isin(@targetDate)').groupby(['customer_id','name','order_month'])['pay'].sum().reset_index()
    return result.query('pay>=100').groupby('customer_id').filter(lambda x:x.shape[0]==2)[['customer_id','name']].drop_duplicates()

    
```