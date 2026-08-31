# Pandas

**Author:** Prachi_404
**Votes:** 0
**Link:** [https://leetcode.com/problems/products-worth-over-invoices/solutions/6046886/](https://leetcode.com/problems/products-worth-over-invoices/solutions/6046886/)

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

def analyze_products(product: pd.DataFrame, invoice: pd.DataFrame) -> pd.DataFrame:
    merge= product.merge(invoice, on='product_id',how='left')
    merge= merge.groupby('product_id').agg(name=('name', 'first'),
                                          rest=('rest','sum'),
                                           paid=('paid','sum'),
                                           canceled=('canceled','sum'),
                                            refunded=('refunded','sum'))
    result= merge.sort_values(by='name', ascending=True)
    return result
```