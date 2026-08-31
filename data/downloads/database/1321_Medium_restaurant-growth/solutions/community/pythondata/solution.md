# Pandas 3 lines of code with .rolling()

**Author:** piocarz
**Votes:** 13
**Link:** [https://leetcode.com/problems/restaurant-growth/solutions/4083376/](https://leetcode.com/problems/restaurant-growth/solutions/4083376/)

---

# Intuition
In pandas there is dedicated method to deal with rolling sum, max, mean etc. Just like in SQL where you have `SUM(x) OVER (ORDER BY y)`, in pandas we got `rolling`. It makes operation based on neraby rows, kind of similar to `.cumsum()` but with much more flexibility. One of many of its features is window, which sets for what offset we want our calculations. This period is based on `index`, which must be monotically increasing or decreasing (`0,1,2,3`,`0,1,2,5` ok, `5,0,2,3` not ok).

# Approach
After we realize this simple rules, writing code is really simple. We have to set our index as sorted dates. We also have to group by date and sum values, since we want only one value for one date.
```
df = customer.sort_values("visited_on").groupby("visited_on")[["amount"]].sum()
```
.. and then we just need to use rolling methof with offset set to 7. 

But whats important here is that we can set this offset as integer or period. If we set this offset as integer, it will calculate sum for last `7 rows`, if we set this offset as date, it will calculate offset by last `7 days`, which means, for example it will have to add 0 for days that are missing - which is exactly what we need in our examples. To set offsets as time periods we need to use string syntax => `"7D"` `"1Y"` etc. (You can find all possibilities [here](https://pandas.pydata.org/pandas-docs/stable/user_guide/timeseries.html#offset-aliases) )

```
df = df.assign(amount = df.rolling("7D").sum(), average_amount = round(df.rolling("7D").sum()/7,2))
```
In our example they want output starting on 7th day (since less than that wouldnt be comparable? or becouse in SQL its very hard to show such result? ). We can use min(date) +  pd.DateOffset(6) to do it. Finally we want to reset index, to have dates as column.

```
return df.loc[df.index >= df.index.min() + pd.DateOffset(6)].reset_index()
```
# Code
```
import pandas as pd

def restaurant_growth(customer: pd.DataFrame) -> pd.DataFrame:
    df = customer.sort_values("visited_on").groupby("visited_on")[["amount"]].sum()
    df = df.assign(amount = df.rolling("7D").sum(), average_amount = round(df.rolling("7D").sum()/7,2))
    return df.loc[df.index >= df.index.min() + pd.DateOffset(6)].reset_index()

```

# P.S
there are some solutions that use normal `.rolling(7)` instead of `.rolling('7D')` - and they pass just beacouse test cases simply suck - they are sorted by default and there is no gap between dates.

Try such test case, literally one date changed (`02 -> 12`) from default :
```
| customer_id | name    | visited_on | amount |
| ----------- | ------- | ---------- | ------ |
| 1           | Jhon    | 2019-01-01 | 100    |
| 2           | Daniel  | 2019-01-12 | 110    |
| 3           | Jade    | 2019-01-03 | 120    |
| 4           | Khaled  | 2019-01-04 | 130    |
| 5           | Winston | 2019-01-05 | 110    |
| 6           | Elvis   | 2019-01-06 | 140    |
| 7           | Anna    | 2019-01-07 | 150    |
| 8           | Maria   | 2019-01-08 | 80     |
| 9           | Jaze    | 2019-01-09 | 110    |
| 1           | Jhon    | 2019-01-10 | 130    |
| 3           | Jade    | 2019-01-10 | 150    |
```
Try this with both solutions.















