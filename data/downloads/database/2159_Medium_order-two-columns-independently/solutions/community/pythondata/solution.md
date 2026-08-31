# Pandas - multiple ways to sort columns independently.

**Author:** piocarz
**Votes:** 2
**Link:** [https://leetcode.com/problems/order-two-columns-independently/solutions/4525393/](https://leetcode.com/problems/order-two-columns-independently/solutions/4525393/)

---

# Intuition
In pandas, it's very easy to sort columns independently, because you can simply replace entire dataframe or individual columns. Here I present multiple ways to do it:

# Approach

1. create new_dataframe from horizontal concatination of two sorted  columns - whats very important - during sorting you have to use parameter `ignore_index = True` - in this way, index wont be sorted , or after sorting, you must `reset_index(drop=True)`. Thats because, in order to 'join' columns properly -> durin horizontal concatenation, rows are matched  based on row id. The same way like during vertical concatenation - by columns.
```
import pandas as pd

def order_two_columns(data: pd.DataFrame) -> pd.DataFrame:
    return pd.concat([  data.first_col.sort_values(ascending = True, ignore_index = True), 
                        data.second_col.sort_values(ascending = False).reset_index(drop=1)], axis=1)
```
2. replace old column with sorted new column - one important thing - just like with concat, you have to `reset_index(drop=True)` of both sorted columns, since assigning is also based on index.
```
import pandas as pd

def order_two_columns(data: pd.DataFrame) -> pd.DataFrame:
    return data.assign( first_col = data["first_col"].sort_values(ascending=True, ignore_index = True), 
                        second_col = data["second_col"].sort_values(ascending=False).reset_index(drop=1) )
```
3. Normal sorting of entire datafrmae, then replacing second column with sorted one.
```
import pandas as pd

def order_two_columns(data: pd.DataFrame) -> pd.DataFrame:
    df = data.sort_values(by = "first_col", ascending=True, ignore_index=True) 
    return df.assign(second_col = data["second_col"].sort_values(ascending=False, ignore_index=True))
```
