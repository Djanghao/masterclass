# Step by Step with comment | Beats 100%

**Author:** zhangmanyuzmy
**Votes:** 1
**Link:** [https://leetcode.com/problems/product-sales-analysis-v/solutions/4554394/](https://leetcode.com/problems/product-sales-analysis-v/solutions/4554394/)

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

def product_sales_analysis(sales: pd.DataFrame, product: pd.DataFrame) -> pd.DataFrame:
    # 1. merge 2 tables
    df = sales.merge(product, how = 'left', on = 'product_id')
    # 2. compute spending of each sale_id
    df['spending'] = df['quantity'] * df['price']
    # 3. group by user_id
    df = df.groupby('user_id')['spending'].sum().reset_index(name = 'spending')
    # 4. order by and return
    return df.sort_values(by = ['spending', 'user_id'], ascending = [False, True])
```