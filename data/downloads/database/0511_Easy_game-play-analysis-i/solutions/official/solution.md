# Official Solution

**Link:** [https://leetcode.com/problems/game-play-analysis-i/solution/](https://leetcode.com/problems/game-play-analysis-i/solution/)

---

<!-- Don't delete this -->
[TOC]

# Solution

---

## pandas

### Approach 1: Grouping and Extracting the Minimum

#### Algorithm

1. Group rows into subgroups specific to each player by means of `GROUP BY
   player_id`.
2. Retrieve the *earliest* `event_date` for each subgroup by means of `MIN()`.
3. Return the result set in any order (`ORDER BY` is not necessary here).

We can use `groupby()` function to group the data in `activity` by the `player_id` column, it allows us to perform operations on subsets of the data based on the unique player ID. This step ensures that we can analyze the data on a per-player basis. Once the data is grouped by `player_id`, we select the `event_date` column using and apply the function `min()` to this column, by doing so, we find the minimum (earliest) date within each group of `player_id`. This will give us the first login date for each player.

```python
df = activity.groupby('player_id')['event_date'].min().reset_index()
```

We will have the following DataFrame `df`, where each `event_date` is the first login in date of the corresponding player:

<table>
  <tr>
    <th>player_id</th>
    <th>event_date</th>
  </tr>
  <tr>
    <td>1</td>
    <td>2016-03-01</td>
  </tr>
  <tr>
    <td>2</td>
    <td>2017-06-25</td>
  </tr>
  <tr>
    <td>3</td>
    <td>2016-03-02</td>
  </tr>
</table>


<br>

Note that the final output is a DataFrame with two columns: `player_id` and `first_login`. Hence, we need to rename the column `event_date` as `first_login`. 


#### Implementation

```python
import pandas as pd

def game_analysis(activity: pd.DataFrame) -> pd.DataFrame:
    df = activity.groupby('player_id')['event_date'].min().reset_index()

    return df.rename(columns = {'event_date':'first_login'})
```

We will get the DataFrame as follows.

<table>
  <tr>
    <th>player_id</th>
    <th>first_login</th>
  </tr>
  <tr>
    <td>1</td>
    <td>2016-03-01</td>
  </tr>
  <tr>
    <td>2</td>
    <td>2017-06-25</td>
  </tr>
  <tr>
    <td>3</td>
    <td>2016-03-02</td>
  </tr>
</table>

<br>

---

## Database

### Overview

> **Problem reference:** Report the first login date for 
> each player. Return the result table in any order.

The challenge in this problem is to figure out how to access and report an
extreme value (i.e., *first* login date) for each player. How could we group
all rows by player and report the "smallest" date (i.e., the earliest occurring
date) for each player?

Approach 1 below highlights what is probably the most natural solution, namely
using `GROUP BY` in conjunction with `MIN()`. Approach 2 highlights more
advanced alternative solutions that rely on using window functions.

---

### Approach 1: Grouping and Extracting the Minimum

#### Algorithm
If this is your first time using `GROUP BY` with an aggregate like `MIN()`,
then it may first be beneficial to ponder what kind of aggregate information
you could pull from the following query:

```sql
SELECT
  A.player_id
FROM
  Activity A
GROUP BY
  A.player_id;
```

The result set for this query may not be exciting at first:

```
+-----------+
| player_id |
+-----------+
|         1 |
|         2 |
|         3 |
+-----------+
```

But, using the example in the problem description, once rows have been grouped
by `player_id`, essentially we have the following information at our disposal
for each group (i.e., each `player_id` in this case):

- `1`:
  + `device_id`: `2`, `2`
  + `event_date`: `2016-03-01`, `2016-05-02`
  + `games_played`: `5`, `6`
- `2`:
  + `device_id`: `3`
  + `event_date`: `2017-06-25`
  + `games_played`: `1`
- `3`:
  + `device_id`: `1`, `4`
  + `event_date`: `2016-03-02`, `2018-07-03`
  + `games_played`: `0`, `5`

The breakdown above makes it clear we have three groups in total (one for each
distinct `player_id`). For players with `player_id` values of `1`, `2`, and
`3`, we have 2, 1, and 2 subgroups, respectively. Any aggregate function we use
will be applied to values in the subgroups for each group. Since we are
interested in the *first* login date for each player, we will use the `MIN()`
aggregate function to essentially scan every `event_date` subgroup value for
each group to find the smallest one. The smallest value for each group will be
the `first_login` value reported:

#### Implementation

```sql
SELECT
  A.player_id,
  MIN(A.event_date) AS first_login
FROM
  Activity A
GROUP BY
  A.player_id;
```

---

### Approach 2: Window functions

#### Intuition

The following solutions make use of window functions and should be considered
medium-level solutions for an easy-level problem. It should be said that just
because you *can* use a window function does not mean you *should* use a window
function.

The `FIRST_VALUE()` window function can be used in crafting a
solution to this problem:

```sql
SELECT DISTINCT
  A.player_id,
  FIRST_VALUE(A.event_date) OVER (
    PARTITION BY
      A.player_id
    ORDER BY
      A.event_date
  ) AS first_login
FROM
  Activity A;
```

**Note:** Use of `DISTINCT` is necessary due to the nature of how window
functions work. If we did not use `DISTINCT`, then, using the example in the
problem description, we would end up with the following (incorrect) result set:

```
+-----------+-------------+
| player_id | first_login |
+-----------+-------------+
|         1 | 2016-03-01  |
|         1 | 2016-03-01  |
|         2 | 2017-06-25  |
|         3 | 2016-03-02  |
|         3 | 2016-03-02  |
+-----------+-------------+
```

For those who are curious, it is also possible to craft a solution to this
problem using the `LAST_VALUE()` window function, but care must be taken in
effectively defining the [window function frame
specification](https://dev.mysql.com/doc/refman/8.0/en/window-functions-frames.html).
If we did not provide a frame specification, then, using the example from the
problem description, we would get the following (incorrect) result set:

```
+-----------+-------------+
| player_id | first_login |
+-----------+-------------+
|         1 | 2016-05-02  |
|         1 | 2016-03-01  |
|         2 | 2017-06-25  |
|         3 | 2018-07-03  |
|         3 | 2016-03-02  |
+-----------+-------------+
```

As noted [in the MySQL
docs](https://dev.mysql.com/doc/refman/8.0/en/window-functions-frames.html),
using `ORDER BY` within a window function results in the following default
frame specification:

```sql
RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
```

If `ORDER BY` is not specified, then the default frame specification is as
follows: 

```sql
RANGE BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
```

Hence, an appropriate frame specification when using `LAST_VALUE()` would look
something like the following:

```sql
SELECT DISTINCT
  A.player_id,
  LAST_VALUE(A.event_date) OVER (
    PARTITION BY
      A.player_id
    ORDER BY
      A.event_date DESC RANGE BETWEEN UNBOUNDED PRECEDING
      AND UNBOUNDED FOLLOWING
  ) AS first_login
FROM
  Activity A;
```


An inline view can be used in conjunction with `RANK()`, `DENSE_RANK()`, or
`ROW_NUMBER()`. The choice will not impact the outcome because `(player_id,
event_date)` is the primary key of the `Activity` table (i.e., we do not have
to worry about the possibility of more than a single row having a `rnk` value
of `1` since partitions are created by `player_id` and rows are ordered by
`event_date`, thus guaranteeing unique `rnk` values).

#### Implementation

```sql
SELECT
  X.player_id,
  X.event_date AS first_login
FROM
  (
    SELECT
      A.player_id,
      A.event_date,
      RANK() OVER (
        PARTITION BY
          A.player_id
        ORDER BY
          A.event_date
      ) AS rnk
    FROM
      Activity A
  ) X
WHERE
  X.rnk = 1;
```

---

### Conclusion

We recommend Approach 1 due to its simplicity and how it naturally suggests
itself as a solution to this problem.

Approach 2 is useful in that it highlights many alternative solutions that
would be good to remark on in an interview context. If you encountered this
problem in an interview, then Approach 1 should be sufficient. But utilizing
any solution from Approach 2 should still leave a favorable impression on the
interviewer by suggesting you can find a solution to the problem at hand in
multiple ways, however sophisticated that way may need to be.