# Pandas Solution

**Author:** true-detective
**Votes:** 2
**Link:** [https://leetcode.com/problems/apples-oranges/solutions/4178608/](https://leetcode.com/problems/apples-oranges/solutions/4178608/)

---



# Code
```
import pandas as pd

def apples_oranges(sales: pd.DataFrame) -> pd.DataFrame:
    sales['sold_num'] = np.where(sales['fruit'] == 'apples', sales['sold_num'], -sales['sold_num'])
    return sales.groupby('sale_date')['sold_num'].sum().reset_index(name='diff')
```