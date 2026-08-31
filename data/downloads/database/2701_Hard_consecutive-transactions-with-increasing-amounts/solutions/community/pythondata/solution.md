# Pandas succint code: line by line explanation

**Author:** piocarz
**Votes:** 2
**Link:** [https://leetcode.com/problems/consecutive-transactions-with-increasing-amounts/solutions/4093501/](https://leetcode.com/problems/consecutive-transactions-with-increasing-amounts/solutions/4093501/)

---

# Approach
1. One of the requirements is to return sorted by `'customer_id'`, but we also need transactions in order, and additionaly, another column (index) which we will use later - it have to be in order, so thats why two times `.reset_index()`
2. First group is created as difference between index and date as integer:
    - (date is converted to integer, by substracting it from random date: so instead of 2023.01.01, 2023.01.02, 2023.01.03 list of dates we got 101,102,103 - list of consecutive integers)
    - whats important here: if days(now integers) are consecutive by 1, just like new index column we created by reseting index - their difference stays the same - creating groups of the same differences.
      
        ```
        2023_01_01 - 2023-01-01 => 0   index:  0  diff:  0-0 = 0
        2023_01_02 - 2023-01-01 => 1           1         1-1 = 0
        2023_01_03 - 2023-01-01 => 2           2         2-2 = 0
        2023_01_06 - 2023-01-01 => 5           3         5-3 = 2
        ```
3. Similarly we create second group, but now using different method. We create additional column True/False => 1/0 of logic: previous day value is smaller or equal as todays value. It's opposite of what we want and that's why: if prev value is larger we get 0, which in cumulative sum, gives the same number as previous = our new group.
    ```
    100     no prev             = null    cumsum:   0 <= (fillna(0))
    110     larger than prev    = 0                 0
    120     larger than prev    = 0                 0
    195     larger than prev    = 0                 0
    195     equal prev          = 1                 1
    110     smaller than prev   = 1                 2
    400     larger than prev    = 0                 2
    100     smaller than prev   = 1                 3    
    ```
    Notice, that at the end we fill first value with 0, so there are 4 zeros at the begin. If next value would be smaller than first, this second would get value of 1, and it wouldn't be in the same group anyway.

4. Finally, group by this created groups + `customer_id`, count their size, minimum date and maximum date = if count is less than 3: ignore, else: return customer_id, start and end.
# Code
```
import pandas as pd

def consecutive_increasing_transactions(transactions: pd.DataFrame) -> pd.DataFrame:
    df = transactions.sort_values(["customer_id","transaction_date"]).reset_index(drop=True).reset_index()
    df["group1"] = (df["transaction_date"]-pd.to_datetime("2023-01-01")).dt.days - df.index
    df["group2"] = (df.amount <= df.amount.shift(1)).cumsum().fillna(0)
    return (  df.groupby(["customer_id","group1","group2"])
                .agg(cnt=("index","count"),consecutive_start=("transaction_date","min"),consecutive_end=("transaction_date","max"))
                .reset_index().query("cnt>2").iloc[:,[0,4,5]]  )
```