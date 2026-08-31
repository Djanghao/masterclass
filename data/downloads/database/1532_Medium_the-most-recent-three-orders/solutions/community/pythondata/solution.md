# Pandas 2 lines - sort and head

**Author:** piocarz
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-most-recent-three-orders/solutions/4120463/](https://leetcode.com/problems/the-most-recent-three-orders/solutions/4120463/)

---

# Approach
`.head()` is not just some sneak peek function of data we have, but actually very usefull, when combined with `.sort()` and `.groupby()` - it can return top (or bottom, with `.tail()`) rows. 

It's - on par with `.rank()` - but with `head` you dont have to create any additional columns.

# Code
```
import pandas as pd

def recent_three_orders(customers: pd.DataFrame, orders: pd.DataFrame) -> pd.DataFrame:
    df = customers.merge(orders,on="customer_id").sort_values(["name","customer_id","order_date"],ascending=[1,1,0])
    return df.groupby("customer_id").head(3).rename(columns={"name":"customer_name"}).iloc[:,[1,0,2,3]]
```