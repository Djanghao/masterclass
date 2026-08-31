# Pandas Solution

**Author:** true-detective
**Votes:** 2
**Link:** [https://leetcode.com/problems/fix-product-name-format/solutions/4112927/](https://leetcode.com/problems/fix-product-name-format/solutions/4112927/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Pandas has nice `.str` and `.dt` methods for accessing python-like methods on string and datetime columns. 

# Code
```
import pandas as pd

def fix_name_format(sales: pd.DataFrame) -> pd.DataFrame:
    sales['product_name'] = sales.product_name.str.lower().str.strip()
    sales['sale_date'] = sales['sale_date'].dt.strftime('%Y-%m')
    return sales.groupby(['product_name', 'sale_date']).size().reset_index(name='total')
```