# pandas || 2 lines, groupby and merge || T/S: 99% / 99%

**Author:** Spaulding_
**Votes:** 12
**Link:** [https://leetcode.com/problems/sales-analysis-iii/solutions/5162690/](https://leetcode.com/problems/sales-analysis-iii/solutions/5162690/)

---

```
import pandas as pd

def sales_analysis(product: pd.DataFrame, 
                   sales: pd.DataFrame) -> pd.DataFrame:

    df = sales.groupby(['product_id'], as_index = False
             ).agg(min=('sale_date', 'min'), max=('sale_date', 'max'))

    return df[(df['min'] >='2019-01-01') &
              (df['max'] <='2019-03-31')].merge(product).iloc[:,[0,3]]
```
[https://leetcode.com/problems/sales-analysis-iii/submissions/1079605385/](https://leetcode.com/problems/sales-analysis-iii/submissions/1079605385/)


I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `len(sales)`.