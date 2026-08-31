# Pandas - line by line explanation

**Author:** piocarz
**Votes:** 5
**Link:** [https://leetcode.com/problems/active-users/solutions/4113405/](https://leetcode.com/problems/active-users/solutions/4113405/)

---

# Intuition
It's yet another problem from group of problems, where you have to find consecutive data. Best way to do it is by grouping differential column which is constructed from sorted(unique) data and row number.
```
| column | row_nb | diff |
| ------ | ------ | ---- |
| 1      | 0      | 1    |
| 2      | 1      | 1    |
| 3      | 2      | 1    |
| 7      | 3      | 4    |
| 8      | 4      | 4    |
| 10     | 5      | 5    |
```
As you can see, if sorted column value is consecutive, its difference with row number (which by definition is consecutively incresing) stays the same. 

Here we want consecutive dates, which is not a problem, we just have to convert them to number, by getting difference between our dates, and some fixed date. 
# Approach
1. First we want to drop duplicates of logins - if we had more than one entry per day per user, it will break groups.
2. merge with account to get user name
3. create row number column
4. create date index column - difference between date and one fixed date
5. now creage difference group - difference between date index and row number
6. group by id, name and diff_group, and get each group size
7. query groups that have at least 5 days in group, and drop duplicates


# Code
```
import pandas as pd

def active_users(accounts: pd.DataFrame, logins: pd.DataFrame) -> pd.DataFrame:
    df = logins.drop_duplicates()
    df = df.merge(accounts, on="id").sort_values(["id","login_date"])
    df["row_nb"] = range(len(df))
    df["date_idx"] = (df.login_date - pd.Timestamp("2020-01-01")).dt.days
    df["diff_group"] = df.date_idx - df.row_nb
    df =  df.groupby(["id","name","diff_group"],as_index=0)["row_nb"].count()
    return df.query("row_nb >= 5")[["id","name"]].drop_duplicates()

```
...and shorter version:
```
import pandas as pd

def active_users(accounts: pd.DataFrame, logins: pd.DataFrame) -> pd.DataFrame:
    df = logins.drop_duplicates().assign(D=(logins.login_date - pd.Timestamp("2020-01-01")).dt.days)
    df = df.merge(accounts,on="id").sort_values(["id","D"]).assign(I=range(len(df)))
    return df.groupby(["id","name",df.D-df.I],as_index=0)["D"].count().query("D>4").iloc[:,:2].drop_duplicates()
```