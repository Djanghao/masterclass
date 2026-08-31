# pandas || groupby || T/S: 96% / 85%

**Author:** Spaulding_
**Votes:** 10
**Link:** [https://leetcode.com/problems/customers-who-bought-all-products/solutions/4722418/](https://leetcode.com/problems/customers-who-bought-all-products/solutions/4722418/)

---

Here's the plan:
1. We filter for redundant rows.

2. For each customer count the number of distinct products purchased by each customer.  
2. We compare these counts with `len(product),` the count of the set of distinct products that can be purchased;
```
import pandas as pd

def find_customers(customer: pd.DataFrame, 
                   product: pd.DataFrame) -> pd.DataFrame:
    
    df = customer.drop_duplicates(keep = 'first'
                ).groupby('customer_id').count().reset_index()

    return df[df.product_key == len(product)][['customer_id']]
```
[https://leetcode.com/problems/customers-who-bought-all-products/submissions/1085527726/?lang=pythondata
](https://leetcode.com/problems/customers-who-bought-all-products/submissions/1085527726/?lang=pythondata
)
I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*U*), in which *N* ~ `len(customer)` and *U* ~ the number of unique customer ids.