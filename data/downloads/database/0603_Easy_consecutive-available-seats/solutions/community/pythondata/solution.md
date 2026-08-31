# Pandas - two 2 line solutions - diff / islands and gaps

**Author:** piocarz
**Votes:** 3
**Link:** [https://leetcode.com/problems/consecutive-available-seats/solutions/4277614/](https://leetcode.com/problems/consecutive-available-seats/solutions/4277614/)

---

# Approach 1 - diff
Since it's easy problem I wanted to add also very straightforward solution - with `diff()` ( `Islands and gaps` is very powerfull - we could easly change it to 5/10/100 consecutive rows - but it is not that intuitive ). 

`diff()` on the other hand, is as simple as its gets - first we filter out only free rows and then check if current with previous or current with next ( both free seats ) have absolute difference of numbers == 1. ( `(1,2) ok` `(1,3) not ok` ).

the only 'trick' here is to use only `seat_id` as `Series` and transform it back to `Data Frame` at the end. What it does? It just shortens code and speeds up a bit. For Series we dont have to specify `by="seat_id"` inside `sort_values`, and in `.loc`we can use `df.diff(1)==1` instead `df.seat_id.diff(1)==1`. 

# Code 1 - diff
```
import pandas as pd

def consecutive_available_seats(cinema: pd.DataFrame) -> pd.DataFrame:
    df = cinema.query("free == 1")["seat_id"].sort_values()
    return df.loc[ (df.diff(1)==1) | (df.diff(-1)==-1) ].to_frame()
```

# Approach 2 - Islands and gaps
This is one of classic SQL problems called `Islands and gaps`. It's alwyas like: count number of cosecutive X things. These problems are always simplest to solve determining size of groups: our cosecutive sorted **MINUS** constantly increasing column (for example index). 

( You can check my other problem solved in this way [601. Human Traffic of Stadium](https://leetcode.com/problems/human-traffic-of-stadium/solutions/4069252/pandas-very-interesting-short-and-flexible-solution-no-joins-no-shifts/) )

**THE TRICK**: if we filter out only relevant rows ( `free == 1` ) our column of cosecutive things to check ( `seat_id` ) is constantly increasing, if its difference with other constantly increasing column( `index` ) stays the same -> `seat_id - index = diff`
```
| seat_id | index | diff | diff_size |
| ------- | ----- | ---- | --------- |
| 1       | 0     | 1    | 1         |
| 3       | 1     | 2    | 3         |
| 4       | 2     | 2    | 3         |
| 5       | 3     | 2    | 3         |                
```
If we `groupby("diff")` and count size of this group, we can specify how big our consecutive group must be - in our example `diff_size >= 2`, which means at least 2 consecutive free seats.

# Code 2 - Islands and gaps
```
import pandas as pd

def consecutive_available_seats(cinema: pd.DataFrame) -> pd.DataFrame:
    df = cinema.query("free == 1").sort_values("seat_id", ignore_index = True)
    return df.loc[df.groupby(df.seat_id - df.index)["free"].transform("count") >= 2][["seat_id"]]
```