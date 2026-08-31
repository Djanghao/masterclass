# Pandas

**Author:** Prachi_404
**Votes:** 0
**Link:** [https://leetcode.com/problems/product-sales-analysis-ii/solutions/6018087/](https://leetcode.com/problems/product-sales-analysis-ii/solutions/6018087/)

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

def sales_analysis(sales: pd.DataFrame, product: pd.DataFrame) -> pd.DataFrame:
    total_quantity= sales.groupby('product_id', as_index=False)['quantity'].sum()
    
    total_quantity = total_quantity.rename(columns={'quantity': 'total_quantity'})
    return total_quantity
```