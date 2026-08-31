# Python Pandas Solution

**Author:** docxeg249
**Votes:** 0
**Link:** [https://leetcode.com/problems/calculate-the-influence-of-each-salesperson/solutions/4886334/](https://leetcode.com/problems/calculate-the-influence-of-each-salesperson/solutions/4886334/)

---

# Code
```
import pandas as pd

def calculate_influence(salesperson: pd.DataFrame, customer: pd.DataFrame, sales: pd.DataFrame) -> pd.DataFrame:
    ans = pd.merge(salesperson,customer,how = "inner",on="salesperson_id")
    ans2 = pd.merge(ans,sales,how = "inner",on="customer_id")
    ans = ans2[["salesperson_id","name","price"]]
    ans3 = ans2.groupby(["salesperson_id","name"])["price"].sum().reset_index()
    ans3 = ans3.rename({"price":"total"},axis=1)
    ans4 = pd.merge(salesperson,ans3,how="left",on="salesperson_id")
    ans5 = ans4[["salesperson_id","name_x","total"]]
    ans5 = ans5.rename({"name_x":"name"},axis=1)
    return ans5.fillna(0)
```