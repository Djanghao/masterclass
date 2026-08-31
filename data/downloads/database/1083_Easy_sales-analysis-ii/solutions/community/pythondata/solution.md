# pandas two solution: 1)not in: 2)groupby

**Author:** cometolife
**Votes:** 6
**Link:** [https://leetcode.com/problems/sales-analysis-ii/solutions/3956868/](https://leetcode.com/problems/sales-analysis-ii/solutions/3956868/)

---

# Solution1
```
import pandas as pd

def sales_analysis(product: pd.DataFrame, sales: pd.DataFrame) -> pd.DataFrame:
  df = pd.merge(product, sales, on='product_id', how='inner')
  iphone_buyer = df[df['product_name']=='iPhone']['buyer_id'].drop_duplicates()
  s8_buyer = df[df['product_name']=='S8'][['buyer_id']].drop_duplicates()
  return s8_buyer[~s8_buyer['buyer_id'].isin(iphone_buyer)]
```

# Solution2
```
import pandas as pd

def sales_analysis(product: pd.DataFrame, sales: pd.DataFrame) -> pd.DataFrame:
  df = pd.merge(product, sales, on='product_id', how='inner')
  df = df.groupby('buyer_id').agg(
    s8_num=('product_name', lambda x:(x=='S8').sum()),
    iphone_num=('product_name', lambda x:(x=='iPhone').sum())
  ).reset_index()
  return df[(df['s8_num']>0)&(df['iphone_num']==0)][['buyer_id']]
```