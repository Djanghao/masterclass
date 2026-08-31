# Pandas, very interesting, short and flexible solution: no joins, no shifts.

**Author:** piocarz
**Votes:** 16
**Link:** [https://leetcode.com/problems/human-traffic-of-stadium/solutions/4069252/](https://leetcode.com/problems/human-traffic-of-stadium/solutions/4069252/)

---

# Intuition
We have to find 3+ consecutive days with more than 100 people. (ordered by id! not date). So right of the bat we dont need rows with less than 100 people. Now we want to find groups with 3+ consecutive days(id's). But how to group it? The trick is to use difference between id(or any ordering row) and newly created row number.
# Approach
First we have to drop days with less than 100 people.  
Then we have to create new row_number column.  
Calculate difference between id and new row_nb.
Transform to get the size of group in each row. 

```
stadium = stadium.sort_values("id").query("people >= 100")
stadium["row_nb"] = range(len(stadium))
stadium["id_rownb_diff"] = stadium.id - stadium.row_nb
stadium["size_of_consecutive_group"] = stadium.groupby("id_rownb_diff")["id"].transform("count")
```
Now, notice that if id's are consecutive, difference between id and newly created row_nb stays the same. 
```
5-2 = 3
6-3 = 3
7-4 = 3 
etc...
```
now if we group the same difference of id-row_nb and get the size of this group, we will get number of consecutive days. If this number is >= than 3, that's our answer.
```
| id | visit_date | people | row_nb | id_rownb_diff | size_of_consecutive_group |
| -- | ---------- | ------ | ------ | ------------- | ------------------------- |
| 2  | 2017-01-02 | 109    | 0      | 2             | 2                         |
| 3  | 2017-01-03 | 150    | 1      | 2             | 2                         |
| 5  | 2017-01-05 | 145    | 2      | 3             | 4                         |
| 6  | 2017-01-06 | 1455   | 3      | 3             | 4                         |
| 7  | 2017-01-10 | 199    | 4      | 3             | 4                         |
| 8  | 2017-01-09 | 188    | 5      | 3             | 4                         |
```
Finally just filter out rows with size of consecutive gropus >=3 and keep only relevant columns. That's it.

# Conclusion
Notice, that this approach is way more flexible than shifting or joining with difference of 1 and 2. Imagine if we had to find 100 consecutive days. Approach different than this would be ridiculous, becouse you would have to make 100 joins or 100 shifts. Here, we simply count group sizes.


# Complexity
- Time complexity: O(N log N) - sorting id
- Space complexity: O(N) - we need only 1 additional column - group size, we dont need to create row_nb or id_rownb_diff - here it's only for clarity.

# Code
```
import pandas as pd

def human_traffic(stadium: pd.DataFrame) -> pd.DataFrame:
    stadium = stadium.sort_values("id").query("people >= 100")
    stadium["row_nb"] = range(len(stadium))
    stadium["id_rownb_diff"] = stadium.id - stadium.row_nb
    stadium["size_of_consecutive_group"] = stadium.groupby("id_rownb_diff")["id"].transform("count")
    return stadium[stadium.size_of_consecutive_group >= 3][["id","visit_date","people"]]
```
... and much shorter version:
```
import pandas as pd

def human_traffic(stadium: pd.DataFrame) -> pd.DataFrame:
    df=stadium.sort_values("id").query("people>=100").reset_index(drop=1)
    return df.loc[df.groupby(df.id-df.index)["id"].transform("count")>=3]


```
