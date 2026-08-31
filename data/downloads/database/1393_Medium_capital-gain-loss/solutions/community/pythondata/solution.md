# Pandas (Beats 99.3%) + MySQL solution, easy way

**Author:** Sounds_like_a_plan
**Votes:** 6
**Link:** [https://leetcode.com/problems/capital-gainloss/solutions/4206599/](https://leetcode.com/problems/capital-gainloss/solutions/4206599/)

---


# Code
``` Pandas []
import pandas as pd

def capital_gainloss(stocks: pd.DataFrame) -> pd.DataFrame:
    stocks['operation'] = stocks['operation'].apply(lambda x: -1 if x == 'Buy' else 1)
    stocks['price'] *= stocks['operation']
    return stocks.groupby("stock_name")["price"].sum().reset_index().rename(columns={"price":"capital_gain_loss"})
```

``` MySQL []
select stock_name, 
sum(if (operation = 'Buy', price * -1, price)) as capital_gain_loss
from Stocks
group by stock_name

```