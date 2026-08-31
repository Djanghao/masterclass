# Official Solution

**Link:** [https://leetcode.com/problems/biggest-window-between-visits/solution/](https://leetcode.com/problems/biggest-window-between-visits/solution/)

---

​
<!-- Don't delete this -->
[TOC]
​
# Solution
​
---
​
## pandas
​
To find out the largest window of days between each visit and the one right after it, there are several things need to be done: 

- for each `user_id`, we need to sort the `visit_date` in an ascending order to later identify the next `visit_date`
- today's date needs to be added as the last `visit_date` for each `user_id` 
- for each `user_id`, we need to calculate the differences between the current `visit_date` and the next `visit_date`, which is the window of days between each visit 
- from all windows of days, we need to identify the maximum window for each `user_id`

<!-- h3 for approaches -->
### Approach 1: Using shift() to put two consecutive visits together.

<!-- h4 for sections -->
#### Algorithm
​<!-- Describe your approach to solving the problem. -->
This approach strictly follows the bullets above. We start by sorting the `visit_date` for each `user_id`.

```python
user_visits.sort_values(by=['user_id', 'visit_date'], inplace=True)
```

Once the `visit_date` is sorted in ascending order for each `user_id`, we can create another column to append the next `visit_date` for each `user_id` and its current `visit_date` using `shift()`. The parameter `periods=1` is passed to the function so all `visit_date` move up by one cell in this column; this way, we have the current `visit_date` and the next `visit_date` for each `user_id` in one row. Since there is no value after the last `visit_date`, we replace the `NULL` with today's date using the parameter `fill_value`.

```python
ser_visits['next_visit'] = user_visits.groupby(['user_id']).shift(periods=-1, fill_value='2021-01-01')
```

We now achieved the first two bullet points from the list. 

| user_id | visit_date | next_visit |
| ------- | ---------- | ---------- |
| 1       | 2020-10-20 | 2020-11-28 |
| 1       | 2020-11-28 | 2020-12-03 |
| 1       | 2020-12-03 | 2021-01-01 |
| 2       | 2020-10-05 | 2020-12-09 |
| 2       | 2020-12-09 | 2021-01-01 |
| 3       | 2020-11-11 | 2021-01-01 |

Now we can calculate the window of days between the current `visit_date` and the next `visit_date` for each visit. The calculation is saved in a new column called `window`.

```python
user_visits['window'] = (user_visits.next_visit - user_visits.visit_date).dt.days
```

With all the windows of days for each `user_id`, we can identify the maximum window for each `user_id` using `groupby`. 

```python
biggest_window = user_visits.groupby(['user_id'], as_index=False).window.max()
```

| user_id | window |
| ------- | ------ |
| 1       | 39     |
| 2       | 65     |
| 3       | 51     |

To get the final output, we also need to rename the column. 
​
<!-- h4 for sections -->
#### Implementation
​<iframe src="https://leetcode.com/playground/eUT5u2gu/shared" frameBorder="0" width="100%" height="276" name="eUT5u2gu"></iframe>
<!-- an empty line to separate approaches -->

<!-- h3 for approaches -->
### Approach 2: Using diff() on sorted visit dates

<!-- h4 for sections -->
#### Algorithm

<!-- Describe your approach to solving the problem. -->
Unlike the previous approach, we don't need to create a separate column using `shift` to compare adjacent visits. Here, we use the `diff` method directly on the column `visit_date` to calculate the date intervals between each two adjacent visits.

Note that, to calculate the interval from the last day to the current day, we need to add a record of the current day for each user. Therefore, we first append today's date for each `user_id` manually, and then sort all values by `user_id` and `visit_date` in ascending order.

To do this, we first create a new DataFrame with all unique `user_id` from the DataFrame `user_visits` and append today's date to a new column called `visit_date` for all `user_id`s.

```python
#getting unique user_ids from user_visits
today = user_visits[['user_id']].drop_duplicates()
#append today's date to all user_ids
today['visit_date'] = pd.to_datetime('2021-01-01')
```

We then combine this new DataFrame with the original DataFrame into a new DataFrame `df` and sort the values by `user_id` and `visit_date`. Now, each user has an additional record for the current day, and their visit dates are sorted so that we can calculate the date interval between neighboring visits in the next step.

```python
df = pd.concat([user_visits, today]).sort_values(by=['user_id', 'visit_date'])
```

We now achieved the first two bullets in the list, and get a new DataFrame with all original `visit_date` and today's date sorted by each `user_id` in an ascending order. 

| user_id | visit_date |
| ------- | ---------- |
| 1       | 2020-10-20 |
| 1       | 2020-11-28 |
| 1       | 2020-12-03 |
| 1       | 2021-01-01 |
| 2       | 2020-10-05 |
| 2       | 2020-12-09 |
| 2       | 2021-01-01 |
| 3       | 2020-11-11 |
| 3       | 2021-01-01 |

Since we have all the `visit_date`s in one column (the first approach puts the current `visit_date` and next `visit_date` in two separate columns), we can use the function `diff()` to calculate the difference in days between the `visit_date` and the last `visit_date`. Notice we also need `groupby` for this step, so we won't compare two `visit_date`s from two different users.

```python
df['window'] = df.groupby('user_id').visit_date.diff().dt.days
```

Below is the output from this step. We now have the window of days between each `visit_date` and the one right after it for all `user_id`s. 

| user_id | visit_date | window |
| ------- | ---------- | ------ |
| 1       | 2020-10-20 | null   |
| 1       | 2020-11-28 | 39     |
| 1       | 2020-12-03 | 5      |
| 1       | 2021-01-01 | 29     |
| 2       | 2020-10-05 | null   |
| 2       | 2020-12-09 | 65     |
| 2       | 2021-01-01 | 23     |
| 3       | 2020-11-11 | null   |
| 3       | 2021-01-01 | 51     |

Lastly, we can identify the maximum window for each `user_id` using `groupby`. To get the final output, we also need to rename the column. 

```python
biggest_window = df.groupby(['user_id'], as_index=False).window.max()
```

<!-- h4 for sections -->
#### Implementation
​<iframe src="https://leetcode.com/playground/frmRGCZT/shared" frameBorder="0" width="100%" height="310" name="frmRGCZT"></iframe>
---
​
## Database
​
To find out the largest window of days between each visit and the one right after it, there are several things need to be done: 

- for each `user_id`, we need to sort the `visit_date` in an ascending order to later identify the next `visit_date`
- today's date needs to be added as the last `visit_date` for each `user_id` 
- for each `user_id`, we need to calculate the differences between the current `visit_date` and the next `visit_date`, which is the window of days between each visit 
- from all windows of days, we need to identify the maximum window for each `user_id`

<!-- h3 for approaches -->
### Approach 1: Find Next Using LEAD() + Append Value Using IFNULL()

<!-- h4 for sections -->
#### Algorithm

<!-- Describe your approach to solving the problem. -->

In this approach, the first three bullet points can be achieved together using: 
- `LEAD(visit_date, 1) OVER (PARTITION BY user_id ORDER BY visit_date)` This `LEAD` function is used to retrieve the next value of a specified column. Here, it fetches the next date in the sorted order of the `visit_date` column since we use `ORDER BY visited_date`, partitioned by `user_id` so that we will handle each user separately. This means that for each user, it finds the next visit date.
- `IFNULL(..., '2021-01-01')` This `IFNULL` function will check whether the first expression is NULL and return the value of the second expression if it is. Here, it checks the result of the previous `LEAD` function. If the result is NULL, meaning there is no next visit date, it will return the default value '2021-01-01'. This step ensures that we always have a default date value for further calculations.
- `DATEDIFF(..., visit_date)` This `DATEDIFF` function calculates the difference in days between two dates from the result of the previous step. Here, it computes the number of days between two dates, where the first date is the result of the preceding `IFNULL` step (either the next visit date or our default date '2021-01-01'), and the second date is the current visit_date. This will determine the number of days between the current visit date and the next visit date.

```sql
SELECT user_id, visit_date,
       DATEDIFF(IFNULL(LEAD(visit_date, 1)OVER(PARTITION BY user_id ORDER BY visit_date), '2021-01-01'), visit_date) AS w
FROM UserVisits
```

We now have the window of days between each visit and the one right after it for each `user_id`.

| user_id | visit_date | w  |
| ------- | ---------- | -- |
| 1       | 2020-10-20 | 39 |
| 1       | 2020-11-28 | 5  |
| 1       | 2020-12-03 | 29 |
| 2       | 2020-10-05 | 65 |
| 2       | 2020-12-09 | 23 |
| 3       | 2020-11-11 | 51 |

To get the final output, we only need to identify the maximum window for each `user_id` and rename the column in the main query, the above step can be placed in either a subquery or CTE. 

<!-- h4 for sections -->
#### Implementation
```mysql []
SELECT user_id, MAX(w) AS biggest_window
  FROM(
SELECT user_id, visit_date,
    DATEDIFF(IFNULL(LEAD(visit_date, 1) OVER(PARTITION BY user_id ORDER BY visit_date), '2021-01-01'), visit_date) AS w
FROM UserVisits) AS a
GROUP BY user_id
```


### Approach 2: Find the Next Visit Using RANK()

<!-- h4 for sections -->
#### Algorithm

<!-- Describe your approach to solving the problem. -->

In this approach, to calculate the interval from the last day to the current day, we need to add a record of the current day for each user. We first manually append today's date for each `user_id`, which is the second bullet point from the list. 

```sql
WITH all_dates AS (
    SELECT user_id, visit_date
    FROM UserVisits
    UNION
    SELECT user_id, '2021-01-01' AS visit_date
    FROM UserVisits)
```
​
We then sort all the `visit_dates`s for each `user_id` in an ascending order. Since all `visit_date`s are stored in the same column, we can add a rank for each `visit_date` per `user_id` for later calculation. Both goals can be achieved by the function `RANK()`.

```sql
SELECT *, 
    RANK()OVER(PARTITION BY user_id ORDER BY visit_date) AS date_rnk
FROM all_dates
```

After these two steps, we now have today's date added to the column `visit_date` and a rank column for the `visit_date`s by each `user_id`.

| user_id | visit_date | date_rnk |
| ------- | ---------- | -------- |
| 1       | 2020-10-20 | 1        |
| 1       | 2020-11-28 | 2        |
| 1       | 2020-12-03 | 3        |
| 1       | 2021-01-01 | 4        |
| 2       | 2020-10-05 | 1        |
| 2       | 2020-12-09 | 2        |
| 2       | 2021-01-01 | 3        |
| 3       | 2020-11-11 | 1        |
| 3       | 2021-01-01 | 2        |

Now we can calculate and identify the biggest window between two dates in the main query. For this approach, we compare the current `visit_date` and the next `visit_date` using table alias as all `visit_date` are stored in the same column: we define one table alias as the table that stores the current `visit_date` (`date_rnk`) and the other as the table that stores the next `visit_date` (`date_rnk`+1). We also added the filter to make sure the two table alias are comparing the `visit_date` for the same `user_id`. We use the function `DATEDIFF()` to compare the difference in days between two dates, and identify the biggest window of days using `MAX()`. The result is grouped at the `user_id` level.

```sql
SELECT a.user_id, MAX(DATEDIFF(b.visit_date, a.visit_date)) AS biggest_window
FROM rnk a, rnk b
WHERE a.user_id = b.user_id
AND b.date_rnk = a.date_rnk + 1
GROUP BY a.user_id
```

<!-- h4 for sections -->

#### Implementation
```mysql []
WITH all_dates AS(
    SELECT user_id, visit_date
    FROM UserVisits
    UNION
    SELECT user_id, '2021-01-01' AS 'visit_date'
    FROM UserVisits)
, rnk AS(
    SELECT *, 
        RANK()OVER(PARTITION BY user_id ORDER BY visit_date) AS date_rnk
    FROM all_dates
)
SELECT a.user_id, MAX(DATEDIFF(b.visit_date, a.visit_date)) AS biggest_window
FROM rnk a, rnk b
WHERE a.user_id = b.user_id
AND b.date_rnk = a.date_rnk + 1
GROUP BY a.user_id
```
<!-- an empty line to separate approaches -->

----