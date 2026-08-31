# Python 3 || merge & groupby || T/S: 99% / 99%

**Author:** Spaulding_
**Votes:** 10
**Link:** [https://leetcode.com/problems/list-the-products-ordered-in-a-period/solutions/4154981/](https://leetcode.com/problems/list-the-products-ordered-in-a-period/solutions/4154981/)

---


```
import pandas as pd

mnth = pd.to_datetime("2020-02").to_period('M')

def list_products(products: pd.DataFrame, orders: pd.DataFrame) -> pd.DataFrame:

    orders = orders[orders['order_date'].dt.to_period("M") == mnth
                ].merge(products[['product_id','product_name']],  on = 'product_id'
                ).reset_index()[['product_name','unit']
                ].groupby(['product_name'], as_index = False)['unit'].sum()
    
    return orders[orders['unit'] >= 100]
```
[https://leetcode.com/problems/break-a-palindrome/submissions/559838984/](https://leetcode.com/problems/break-a-palindrome/submissions/559838984/)

I could be wrong, but I think that time complexity is *O*(*N*log*N*) and space complexity is *O*(*N*), in which *N* ~ `len(products)`.