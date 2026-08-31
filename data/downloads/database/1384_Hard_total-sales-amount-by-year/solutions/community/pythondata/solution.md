# pandas ||| 6 lines,  ||  merge & select || T/S: 99% / 99%

**Author:** Spaulding_
**Votes:** 2
**Link:** [https://leetcode.com/problems/total-sales-amount-by-year/solutions/4631521/](https://leetcode.com/problems/total-sales-amount-by-year/solutions/4631521/)

---


```
import pandas as pd
from datetime import datetime

def total_sales(product: pd.DataFrame, sales: pd.DataFrame) -> pd.DataFrame:

    df = sales.merge(
         pd.DataFrame({'report_year': ['2018', '2019', '2020'],
                       'beg_year':[datetime(2018,1,1),
                                   datetime(2019,1,1),
                                   datetime(2020,1,1)],
                       'end_year':[datetime(2018,12,31),
                                   datetime(2019,12,31),
                                   datetime(2020,12,31)]}),
                      how = 'cross').merge(product)
                      
    df['beg'] = df[["beg_year", "period_start"]].max(axis=1)
    df['end'] = df[["end_year", "period_end"]].min(axis=1)
    df['total_amount'] = ((df.end - df.beg).dt.days + 1)*df.average_daily_sales
               
    return df[df.total_amount > 0].iloc[:,[0,7,4,10]]
```
[https://leetcode.com/problems/total-sales-amount-by-year/submissions/1157731486/](https://leetcode.com/problems/total-sales-amount-by-year/submissions/1157731486/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ the size of the merged dataframe..