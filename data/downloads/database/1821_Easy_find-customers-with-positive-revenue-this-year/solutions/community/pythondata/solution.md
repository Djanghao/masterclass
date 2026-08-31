# Pandas simplest solution

**Author:** piocarz
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-customers-with-positive-revenue-this-year/solutions/4266134/](https://leetcode.com/problems/find-customers-with-positive-revenue-this-year/solutions/4266134/)

---

# Intuition
Since question is contructed in a way that customer_id and year are composite key (unique identifier, no duplicates) we dont have to group sum or anything. Data is already grouped and summed. Only thing that is left is to get customers with positive reveneu in 2021.

# Approach
Many people use `.loc` and while it's not wrong, I find .query() much more cleaner and straightforward, so instead:
```
.loc[ (customers["year"] == 2021) & (customers["revenue"] > 0) ]
```
use:
```
.query("year == 2021 & revenue > 0")
```
# Code
```
import pandas as pd

def find_customers(customers: pd.DataFrame) -> pd.DataFrame:
    return customers.query("year==2021 & revenue>0")[["customer_id"]]
```