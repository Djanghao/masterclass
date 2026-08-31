# Pandas Solution

**Author:** Zaidi9999
**Votes:** 0
**Link:** [https://leetcode.com/problems/generate-the-invoice/solutions/5791547/](https://leetcode.com/problems/generate-the-invoice/solutions/5791547/)

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

def generate_the_invoice(products: pd.DataFrame, purchases: pd.DataFrame) -> pd.DataFrame:
    merge_df = products.merge(purchases,on='product_id',how='inner')
    merge_df['price'] = merge_df['price']*merge_df['quantity']
    print(merge_df)
    small_df = merge_df.groupby('invoice_id')['price'].sum().reset_index().sort_values(by=['price','invoice_id'], ascending = [False,True])
    small_df['rank_val'] = small_df['price'].rank(method='first', ascending=False)
    print(small_df)
    small_df = small_df[small_df['rank_val']==1]
    print(small_df)
    result = merge_df[merge_df['invoice_id'].isin(small_df['invoice_id'])]
    return result[['product_id','quantity','price']]


```