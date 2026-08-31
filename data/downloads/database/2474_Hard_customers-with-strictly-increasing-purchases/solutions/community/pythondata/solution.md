# Diff and simple solution

**Author:** batraaa
**Votes:** 0
**Link:** [https://leetcode.com/problems/customers-with-strictly-increasing-purchases/solutions/4916295/](https://leetcode.com/problems/customers-with-strictly-increasing-purchases/solutions/4916295/)

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

def find_specific_customers(orders: pd.DataFrame) -> pd.DataFrame:
    orders['order_year'] = orders['order_date'].dt.year
    df = orders.groupby(['customer_id','order_year']).price.sum().rename('over_val').reset_index()
    df.sort_values(by=['customer_id','order_year'], inplace = True)
    df['diff_prev'] = df.groupby('customer_id').over_val.transform('diff')
    df['diff_prev_year'] = df.groupby('customer_id').order_year.transform('diff')
    removed= df.query("diff_prev_year>1|diff_prev<=0").customer_id.unique()
    return df[~df.customer_id.isin(removed)][['customer_id']].drop_duplicates()
    # return df[df.customer_id == 6]

```