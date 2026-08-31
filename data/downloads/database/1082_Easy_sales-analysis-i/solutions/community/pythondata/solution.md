# Pandas Solution

**Author:** docxeg249
**Votes:** 1
**Link:** [https://leetcode.com/problems/sales-analysis-i/solutions/4866336/](https://leetcode.com/problems/sales-analysis-i/solutions/4866336/)

---

# Code
```
import pandas as pd

def sales_analysis(product: pd.DataFrame, sales: pd.DataFrame) -> pd.DataFrame:
    sales = sales.groupby(["seller_id"])["price"].sum().reset_index()
    sales = sales[["seller_id","price"]]
    sales["ranking"]= sales["price"].rank(method = "dense",ascending = False)
    return sales[sales["ranking"] == 1][["seller_id"]]
```