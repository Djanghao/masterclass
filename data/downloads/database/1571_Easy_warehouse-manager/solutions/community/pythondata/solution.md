# Pandas

**Author:** Prachi_404
**Votes:** 0
**Link:** [https://leetcode.com/problems/warehouse-manager/solutions/6039769/](https://leetcode.com/problems/warehouse-manager/solutions/6039769/)

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

def warehouse_manager(warehouse: pd.DataFrame, products: pd.DataFrame) -> pd.DataFrame:
    products['volume']=products['Width']*products['Length']*products['Height']
    merged= products[['product_id','product_name','volume']].merge(warehouse,on='product_id', how='inner')
    merged['total_volume']= merged['volume']*merged['units']
    merged= merged.groupby('name').agg(volume=('total_volume','sum')).reset_index()
    
    merged.rename(columns={'name': 'warehouse_name'}, inplace=True)
    return merged[['warehouse_name', 'volume']]
    
```