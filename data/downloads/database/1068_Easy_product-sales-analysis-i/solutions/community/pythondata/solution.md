# pandas || 1 line, merge and formatting || T/S: 99% / 99%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/product-sales-analysis-i/solutions/5162451/](https://leetcode.com/problems/product-sales-analysis-i/solutions/5162451/)

---

```
import pandas as pd

def sales_analysis(sales: pd.DataFrame, 
                   product: pd.DataFrame) -> pd.DataFrame:

    return pd.merge(sales, product).iloc[:,[5,2,4]]
```
[https://leetcode.com/problems/product-sales-analysis-i/submissions/1069512030/](https://leetcode.com/problems/product-sales-analysis-i/submissions/1069512030/)

I could be wrong, but I think that time complexity is *O*(*MN*)  and space complexity is *O*(*M* + *N*), in which *M* ~ `len(sales)` and *N* ~ `len(product)`.