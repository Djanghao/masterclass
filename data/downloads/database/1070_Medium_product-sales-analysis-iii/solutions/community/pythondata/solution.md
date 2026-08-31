# pandas || 2 lines, rank, merge || T/S: 92% / 99%

**Author:** Spaulding_
**Votes:** 9
**Link:** [https://leetcode.com/problems/product-sales-analysis-iii/solutions/5162503/](https://leetcode.com/problems/product-sales-analysis-iii/solutions/5162503/)

---

```
import pandas as pd

def sales_analysis(sales: pd.DataFrame, product: pd.DataFrame) -> pd.DataFrame:

    sales['rnk'] = sales.groupby(['product_id'])['year'
                       ].rank(method='dense')
                       
    return sales.loc[sales.rnk == 1
               ].merge(product).iloc[:,[1,2,3,4]
               ].rename(columns = {'year': 'first_year'})
```
[https://leetcode.com/problems/product-sales-analysis-iii/submissions/1088479316/](https://leetcode.com/problems/product-sales-analysis-iii/submissions/1088479316/)



I could be wrong, but I think that time complexity is *O*(*N* log *N*)  and space complexity is *O*(*N*), in which *N* ~ `len(sales)`.