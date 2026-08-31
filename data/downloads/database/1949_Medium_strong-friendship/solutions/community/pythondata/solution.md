# Pandas solution, line by line

**Author:** piocarz
**Votes:** 2
**Link:** [https://leetcode.com/problems/strong-friendship/solutions/4307292/](https://leetcode.com/problems/strong-friendship/solutions/4307292/)

---

# Approach
1. creating table where we concat `user1 as user2` and `user2 as user1`, so instead of:
    ```
    | user1_id | user2_id |
    | -------- | -------- |
    | 1        | 2        |
    | 1        | 3        |
    | 2        | 3        |
    ```
    we got:
     ```
    | user1_id | user2_id |
    | -------- | -------- |
    | 1        | 2        |
    | 1        | 3        |
    | 2        | 3        |
    | 2        | 1        |
    | 3        | 1        |
    | 3        | 2        |
    ```
2. duplicate table as `df1` and `df2` where we have:
     ```
    df1                         df2
    | user1_id | friend   |  &  | friend   | user2_id |
    | -------- | -------- |     | -------- | -------- |
    | 1        | 2        |     | 1        | 2        |
    | 1        | 3        |     | 1        | 3        |
    | 2        | 3        |     | 2        | 3        |
    | 2        | 1        |     | 2        | 1        |
    | 3        | 1        |     | 3        | 1        |
    | 3        | 2        |     | 3        | 2        |
    ```
3. merging both tables on `friend`, and additionaly merging with original df, to check if `user1` and `user2` are actualy friends (we could join on common friends people that are not friends themselves, thats why we need this additional merge)

4. grouping by user1 and user2 and by counting (getting lenght of group) to know how many common friends they have

5. finaly filtering rows where `common_friend >= 3 & user1 < user2` ( we need `user1 < user2` becouse we have duplicates `user1,user2 ->user2,user1`, and we needed it to correctly count common friends )
# Code
```
import pandas as pd

def strong_friendship(friendship: pd.DataFrame) -> pd.DataFrame:
    df = pd.concat([friendship,friendship.rename(columns=[{x:y,y:x} for x,y in [friendship]][0])])
    df1,df2 = df.rename(columns={"user2_id":"friend"}), df.rename(columns={"user1_id":"friend"})
    df = df1.merge(df2,on="friend").merge(df, on=["user1_id","user2_id"])
    df = df.groupby(["user1_id","user2_id"],as_index=0).agg(common_friend=("friend","count"))
    return df.query("common_friend >= 3 & user1_id < user2_id")
```