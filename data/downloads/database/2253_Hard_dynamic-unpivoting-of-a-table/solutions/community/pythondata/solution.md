# [Pandas] melt, dropna

**Author:** cdyn17
**Votes:** 0
**Link:** [https://leetcode.com/problems/dynamic-unpivoting-of-a-table/solutions/5008804/](https://leetcode.com/problems/dynamic-unpivoting-of-a-table/solutions/5008804/)

---


# Code
```
import pandas as pd

def find_valid_users(products: pd.DataFrame) -> pd.DataFrame:

    df = products.melt(id_vars='product_id', var_name='store', value_name='price')
    return df.dropna()
    
```