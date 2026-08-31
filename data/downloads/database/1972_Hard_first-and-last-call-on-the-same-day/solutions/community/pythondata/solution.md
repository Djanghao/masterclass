# Pandas simple solution: .idxmin() nad .idxmax()

**Author:** piocarz
**Votes:** 1
**Link:** [https://leetcode.com/problems/first-and-last-call-on-the-same-day/solutions/4252417/](https://leetcode.com/problems/first-and-last-call-on-the-same-day/solutions/4252417/)

---

# Intuition
Its easier to think about problem when we need to have last calls and first call with the same caller, reciever and day. That means inner join of two dataframes, one with first calls other with last calls on caller, reciever and day.

# Approach
1. since we need last conversation between two people, it doesnt matter if he was caller or reciever - so we need to duplicate rows where caller is reciever and reciever is caller - so we can group only by `caller_id`. It's important to reset_index while concatinaiting, since later we will use `idxmin` and `idxmax`
2. create additional column, `call_day` to be able to group by day.
3. create `first_calls` table, where we have only first calls for each caller and each day - select using `.idxmin()` - it works in a way that return indexes of rows with minimum value of selected column. Basically:
    ```
    df.loc[df.groupby(["call_day","caller_id"])["call_time"].idxmin()]
    ```

    is more convinient way than: 
    ``` 
    df.loc[df["call_time"] == df.groupby(["call_day","caller_id"])["call_time"].transform("min")]
    ```
4. same logic for `last_calls` table, just simply max instead of min
5. merge (default inner) this tables on `caller_id`,`recipient_id`,`call_day` - after merging we have only users who were talking with the same user on the same date on first and last call.
6. select only `caller_id` (but it can also be `recipient_id`) column, drop duplicates, rename to `user_id` and return

# Code
```
import pandas as pd

def same_day_calls(calls: pd.DataFrame) -> pd.DataFrame:
    df = pd.concat([calls, calls.rename(columns={"caller_id":"recipient_id","recipient_id":"caller_id"})],ignore_index=1)
    df["call_day"] = df["call_time"].dt.date
    first_calls = df.loc[df.groupby(["call_day","caller_id"])["call_time"].idxmin()]
    last_calls = df.loc[df.groupby(["call_day","caller_id"])["call_time"].idxmax()]
    df = first_calls.merge(last_calls, on=["caller_id","recipient_id","call_day"])
    return df[["caller_id"]].rename(columns={"caller_id":"user_id"}).drop_duplicates()
```