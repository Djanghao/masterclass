# Official Solution

**Link:** [https://leetcode.com/problems/game-play-analysis-v/solution/](https://leetcode.com/problems/game-play-analysis-v/solution/)

---

[TOC]

# Solution
---

### Overview

> **Problem reference:** The *install date* of a player is the first login day of that player. We define *day one retention* of some date `x` to be the number of players whose install date is `x` and they logged back in on the day right after `x`, divided by the number of players whose install date is `x`, rounded to 2 decimal places. Write a SQL query to report, for each install date, the number of players that installed the game on that day and the day one retention. Return the result table in any order.

This problem is a natural extension or follow-up to [part IV](https://leetcode.com/problems/game-play-analysis-iv/) of the five-part Game Play Analysis problem series (this is the last problem in the series). In part IV, the crux of the problem was to figure out how to use each player's first login to determine whether or not the same player logged in the next day (i.e., consecutive logins from the first login date). We then used the total number of players who had such consecutive logins to compute the requested `fraction`, but this problem adds another layer of complexity.

We're not just trying to find the *total number* of players who had consecutive logins from their first login date. We're trying to find, *for each unique first login date*, how many players had consecutive logins starting from that first unique login date -- the additional layer of complexity has to do with how player counts now need to be grouped by first login date as opposed to being computed outright without any sort of date partitioning or grouping.

---

## pandas

### Approach: Data Aggregation and Transformation

#### Intuition

Here are the steps of the approach broken down with the corresponding code snippets:

### Step 1: Define a Custom Rounding Function
In Python, the built-in `round()` function rounds floating-point numbers using the "round halfway to an even number" strategy (also known as "banker's rounding"). In bankers' rounding, if a number is exactly halfway between two possible rounded values, it will round to the nearest even number. For example, using the built-in `round()` function, `round(0.5)` and `round(1.5)` will yield 0 and 2, respectively.

In the provided algorithm, a custom rounding function, `custom_round`, is defined to round numbers using the "round half up" method. In this strategy, if a number is exactly halfway between two possible rounded values, it will round to the nearest number away from zero. This means that 0.5 would round to 1, and 1.5 would also round to 2.

Here’s the implementation of the `custom_round` function:
```python
def custom_round(x, decimals=2):
    offset = 10 ** decimals
    return int(x * offset + 0.5) / offset
```

In this function:
- `x` is the number we want to round.
- `decimals` is the number of decimal places we want to round `x` to.
- `offset` is a scaling factor, which is a power of 10 based on the number of decimal places.
- The expression `x * offset + 0.5` shifts the decimal point to the right and adds 0.5 to the number.
- The `int()` function truncates the decimal part, effectively rounding down the original number.
- Finally, dividing by `offset` shifts the decimal point back to its original position, giving us the rounded number.

This custom rounding function is used in the algorithm to ensure that the Day1_retention values are rounded using the "round half up" strategy, rather than the default "bankers’ rounding" strategy provided by Python's `round()` function.

### Step 2: Compute Install Dates
Group the `activity` DataFrame by `player_id` and calculate the minimum `event_date` for each player to get their install dates.
```python
install_dates = activity.groupby("player_id")["event_date"].min().reset_index()
install_dates.columns = ["player_id", "install_dt"]
```

Of course! Here's a condensed version of the explanation for Step 3:

### Step 3: Find Next Day Activity

In this step we identify players who logged back in immediately after their installation day.

**3.1. Merge to Associate Activity with Install Dates**:
Combine `install_dates` with `activity` on `player_id` to relate each player's activities with their respective install date.
   ```python
   next_day_activity = pd.merge(
       install_dates, activity, on="player_id"
   )
   ```

**3.2. Filter for Next Day Activity**:
Retain only records where the activity date is one day after the install date, representing players who returned the day after installing.
   ```python
   next_day_activity = next_day_activity[
       next_day_activity["event_date"]
       == next_day_activity["install_dt"] + pd.Timedelta(days=1)
   ]
   ```

This step filters out the essential records needed for calculating day one retention.

### Step 4: Calculate Installs
Group the `install_dates` DataFrame by `install_dt` and count the number of installations on each date.
```python
result = install_dates.groupby("install_dt").size().reset_index(name="installs")
```

### Step 5: Calculate Day 1 Retention Counts
Group the `next_day_activity` DataFrame by `install_dt` and count the number of players who logged in the day after installation.
```python
day1_retention = (
    next_day_activity.groupby("install_dt")
    .size()
    .reset_index(name="next_day_count")
)
```

### Step 6: Merge Install Counts with Next-Day Login Counts
After calculating the number of installs and the number of players who logged in the next day, we need to combine this information to determine the day one retention rate. This is achieved by merging the two DataFrames (`result` containing install counts and `day1_retention` containing next-day login counts) on the `install_dt` column. The merge operation aligns the data by installation date, ensuring that each install date has both its installation count and its next-day login count side by side in the same DataFrame.

However, there might be some install dates where no players logged back in the next day. For such dates, the `next_day_count` column would have missing values (`NaN`) after the merge. To address this, the algorithm fills these missing values with 0 using the `fillna(0)` method, indicating that no players returned the next day for those specific install dates.

```python
result = pd.merge(result, day1_retention, on="install_dt", how="left")
result["next_day_count"].fillna(0, inplace=True)
```
This merging step is crucial because it brings together the required data to compute the day one retention rate for each install date in the subsequent steps.


### Step 7: Calculate and Round Day1_retention
Calculate the `Day1_retention` column and apply the `custom_round` function to round the values to two decimal places.
```python
result["Day1_retention"] = result["next_day_count"] / result["installs"]
result["Day1_retention"] = result["Day1_retention"].apply(lambda x: custom_round(x, 2))
```

### Step 8: Format and Return Result
Keep only the relevant columns and return the final `result` DataFrame.
```python
result = result[["install_dt", "installs", "Day1_retention"]]
return result
```

#### Implementation

<iframe src="https://leetcode.com/playground/RP3Qxhys/shared" frameBorder="0" width="100%" height="500" name="RP3Qxhys"></iframe>

---

## Database

### Approach: CTEs, indicator variable, and `LEFT JOIN`

#### Intuition

As noted in the preferred approach for part IV in this problem series, CTEs can be powerful agents of clarity when it comes to tackling difficult SQL problems. We will aim to reshape the sequence of CTEs used in part IV to craft a solution to this fifth and final problem in the Game Play Analysis series.

The "reshaping" referenced above is also a strong selling point for using CTEs -- they can be quite modular. If a complicated problem changes in a minor way, then a chain of CTEs can often be refactored to accommodate the new changes (such is the case in going from the preferred solution to part IV to this solution for part V).

#### Algorithm

1. Identify the first login date for each player.
2. Use an [indicator variable](https://en.wikipedia.org/wiki/Dummy_variable_(statistics)) (also referred to as a "dummy variable" in some statistical contexts), `logged_in_consecutively`, to identify which players from step 1 logged in consecutively starting from their first login date. All players who logged in consecutively will have a value of `1` recorded for `logged_in_consecutively` while all those who did not will have a `0` recorded (the `LEFT JOIN` makes it possible to identify those players who did not login consecutively from their first login date).
3. Group the information obtained in step 2 by first login date to calculate field values as appropriate.

#### Implementation

##### MySQL

```sql
WITH first_logins AS (
  SELECT
    A.player_id,
    MIN(A.event_date) AS first_login
  FROM
    Activity A
  GROUP BY
    A.player_id
), consec_login_info AS (
  SELECT
    F.player_id,
    (CASE
      WHEN A.player_id IS NULL THEN 0
      ELSE 1
    END) AS logged_in_consecutively,
    F.first_login
  FROM
    first_logins F
    LEFT JOIN Activity A ON F.player_id = A.player_id
    AND F.first_login = DATE_SUB(A.event_date, INTERVAL 1 DAY)
)
SELECT
  C.first_login AS install_dt,
  COUNT(C.player_id) AS installs,
  ROUND(
    SUM(C.logged_in_consecutively)
    / COUNT(C.player_id)
  , 2) AS Day1_Retention
FROM
  consec_login_info C
GROUP BY
  C.first_login;
```

**Note:** The last step of the solution above may be easier to understand if we look at the `consec_login_info` CTE for the example in the problem description:

```
+-----------+-------------------------+-------------+
| player_id | logged_in_consecutively | first_login |
+-----------+-------------------------+-------------+
|         1 |                       1 | 2016-03-01  |
|         2 |                       0 | 2017-06-25  |
|         3 |                       0 | 2016-03-01  |
+-----------+-------------------------+-------------+
```

Grouping the rows above by `first_login` makes it possible for us to sum over our indicator variable to effectively report the `Day1_Retention` field value, arguably the most challenging part of this problem.