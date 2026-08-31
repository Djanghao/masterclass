# Pandas succinct code with .melt()

**Author:** piocarz
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-interview-candidates/solutions/4245661/](https://leetcode.com/problems/find-interview-candidates/solutions/4245661/)

---

# Intuition
Its easy how to count 3 winners of gold, but how to count 3 consecutive winners of any medal? Transform 3 consecutive contests into 1, and 3 medals into 1, then group and count. 

Concat 3 contest tables but in every additional table shift contest_id by -1: so grouping by contest_id will in fact group by 3 consecutive contest_id. 

Since player cannot have more than 1 medal in each contest, when we also stack medals into one column, and simultanously group by this stacked medals and prevoiusly created contest_id (3 id in 1), any group of size 3 will represent one guy who got medal in 3 consecutive contests.

It will be best to explain on one small table:
```
| contest_id | gold_medal | silver_medal | bronze_medal |
| ---------- | ---------- | ------------ | ------------ |
| 190        | 1          | 4            | 3            |
| 191        | 1          | 3            | 4            |
| 192        | 1          | 2            | 3            |
```
# Approach
1. First easy part: simply group by `gold medal`, count, and filter guys who got at least 3 golds.
2. create new table from 3 `competitions`, but every table have `contest_id` shifted by -1 compared to previous table:
```
inRow = pd.concat([contests, contests.assign(contest_id=contests["contest_id"]-1), contests.assign(contest_id=contests["contest_id"]-2)])
```
```
| contest_id | gold_medal | silver_medal | bronze_medal |
| ---------- | ---------- | ------------ | ------------ |
| 190        | 1          | 4            | 3            |
| 191        | 1          | 3            | 4            |
| 192        | 1          | 2            | 3            |

| 189 (190-1)| 1          | 4            | 3            |
| 190 (191-1)| 1          | 3            | 4            |
| 191 (192-1)| 1          | 2            | 3            |

| 188 (190-2)| 1          | 4            | 3            |
| 189 (191-2)| 1          | 3            | 4            |
| 190 (192-2)| 1          | 2            | 3            |
```
Instead of `190`(1),`191`(2),`192`(3) we got `189`(1), `190`(2),`191`(3) and `188`(1), `189`(2), `190`(3) - notice that now we can merge first (1) with second (2) and third (3) on the same contest id.
Alse, notice, we even have some contest that didnt exist, but we dont care, since we anyway need 3 consecutive.

3. Now, we have to put all medalists into one column, best way is to use `.melt()`:
```
inRow.melt(id_vars="contest_id")
```
```
| contest_id | variable     | value |
| ---------- | ------------ | ----- |
| 190        | gold_medal   | 1     |
| 191        | gold_medal   | 1     |
| 192        | gold_medal   | 1     |
| 189        | gold_medal   | 1     |
| 190        | gold_medal   | 1     |
| 191        | gold_medal   | 1     |
| 188        | gold_medal   | 1     |
| 189        | gold_medal   | 1     |
| 190        | gold_medal   | 1     |
| 190        | silver_medal | 4     |
| 191        | silver_medal | 3     |
| 192        | silver_medal | 2     |
| 189        | silver_medal | 4     |
| 190        | silver_medal | 3     |
| 191        | silver_medal | 2     |
| 188        | silver_medal | 4     |
| 189        | silver_medal | 3     |
| 190        | silver_medal | 2     |
| 190        | bronze_medal | 3     |
| 191        | bronze_medal | 4     |
| 192        | bronze_medal | 3     |
| 189        | bronze_medal | 3     |
| 190        | bronze_medal | 4     |
| 191        | bronze_medal | 3     |
| 188        | bronze_medal | 3     |
| 189        | bronze_medal | 3     |
| 190        | bronze_medal | 3     |
```

Now if we have all 3 consecutive contest represented as 1, and all medalists as one column, if group at the same time by contest_id and user_id ("value"), every group that equals to 3, represent one medalist of 3 cosecutive contests:
```
inRow = inRow.melt(id_vars="contest_id").groupby(["contest_id","value"], as_index = 0).count()
```

```
| contest_id | value | variable |
| ---------- | ----- | -------- |
| 188        | 1     | 1        |
| 188        | 3     | 1        |
| 188        | 4     | 1        |
| 189        | 1     | 2        |
| 189        | 3     | 2        |
| 189        | 4     | 2        |
| 190        | 1 --- | 3 ------ | <
| 190        | 2     | 1        |
| 190        | 3 --- | 3 ------ | <
| 190        | 4     | 2        |
| 191        | 1     | 2        |
| 191        | 2     | 1        |
| 191        | 3     | 2        |
| 191        | 4     | 1        |
| 192        | 1     | 1        |
| 192        | 2     | 1        |
| 192        | 3     | 1        |
```
as you can see, only user(value) number 1 and 3 have 3 counts.
```
    inRow = inRow.melt(id_vars="contest_id").groupby(["contest_id","value"], as_index = 0).count().query("variable>2")
```
```
| contest_id | value | variable |
| ---------- | ----- | -------- |
| 190        | 1     | 3        |
| 190        | 3     | 3        |
```

4. Finally we simply filter users by guys who either got 3 golds, or 3 consecutive.

# Code
```
import pandas as pd

def find_interview_candidates(contests: pd.DataFrame, users: pd.DataFrame) -> pd.DataFrame:
    golds = contests.groupby("gold_medal",as_index=0).count().query("contest_id>2")
    inRow = pd.concat([contests, contests.assign(contest_id=contests["contest_id"]-1), contests.assign(contest_id=contests["contest_id"]-2)])
    inRow = inRow.melt(id_vars="contest_id").groupby(["contest_id","value"], as_index = 0).count().query("variable>2")
    return users.loc[users["user_id"].isin(golds["gold_medal"]) | users["user_id"].isin(inRow["value"])][["name","mail"]]
```