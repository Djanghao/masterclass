# Official Solution

**Link:** [https://leetcode.com/problems/new-users-daily-count/solution/](https://leetcode.com/problems/new-users-daily-count/solution/)

---

[TOC]

# Solution

---

## pandas

### Approach: Filtering and Counting

Given the input DataFrame `traffic`:

| user_id | activity | activity_date |
| ------- | -------- | ------------- |
| 1       | login    | 2019-05-01    |
| 1       | homepage | 2019-05-01    |
| 1       | logout   | 2019-05-01    |
| 2       | login    | 2019-06-21    |
| 2       | logout   | 2019-06-21    |
| 3       | login    | 2019-01-01    |
| 3       | jobs     | 2019-01-01    |
| 3       | logout   | 2019-01-01    |
| 4       | login    | 2019-06-21    |
| 4       | groups   | 2019-06-21    |
| 4       | logout   | 2019-06-21    |
| 5       | login    | 2019-03-01    |
| 5       | logout   | 2019-03-01    |
| 5       | login    | 2019-06-21    |
| 5       | logout   | 2019-06-21    |

Several filters need to be applied before counting the number of users that logged in for the first time by date:
- only **login** records from all records
- the first login record/date for each user
- the first login record/date within at most 90 days from today; note that this filter needs to be applied last so that users who logged in more than 90 days ago will not be included

All retained records are qualified for the final report, and we only need to count the number of users by each date to get the final output

#### Intuition

Let's start by applying the filters one by one. First, we extract only the login records from all records and save them in a new DataFrame. 

```python
df = traffic[traffic.activity == 'login'].drop_duplicates()
```

This step filters out all records that are not related to login activity.

| user_id | activity | activity_date |
| ------- | -------- | ------------- |
| 1       | login    | 2019-05-01    |
| 2       | login    | 2019-06-21    |
| 3       | login    | 2019-01-01    |
| 4       | login    | 2019-06-21    |
| 5       | login    | 2019-03-01    |
| 5       | login    | 2019-06-21    |

We can then identify the first login date for each user. To do this, we leverage the function `min()` to get the smallest (first) `activity_date` for each user from all login records.

```python
first_login = df.groupby('user_id', as_index=False)['activity_date'].min()
```

This step returns only the first login date for each user. 

| user_id | activity_date |
| ------- | ------------- |
| 1       | 2019-05-01    |
| 2       | 2019-06-21    |
| 3       | 2019-01-01    |
| 4       | 2019-06-21    |
| 5       | 2019-03-01    |

The last filter we need is to include only the first login dates that are within 90 days from today. We can use `between()` to define the timeframe and `timedelta()` to identify the date that is 90 days from today. 

```python
first_login = first_login[first_login.activity_date.between(pd.to_datetime('2019-06-30') - timedelta(days=90), '2019-06-30')]
```

The users that first logged in more than 90 days from today are filtered out after this step. 

| user_id | activity_date |
| ------- | ------------- |
| 1       | 2019-05-01    |
| 2       | 2019-06-21    |
| 4       | 2019-06-21    |

Now we can count the number of users by each first login date. Since there might be multiple users logged in on the same date, the result is grouped at the date level. 

```python
final = first_login.groupby('activity_date', as_index=False)['user_id'].count()
```

| activity_date | user_id |
| ------------- | ------- |
| 2019-05-01    | 1       |
| 2019-06-21    | 2       |


Lastly, we rename the columns to get the final output. 

```python
return final.rename(columns={'activity_date': 'login_date', 'user_id': 'user_count'})
```

#### Implementation

<iframe src="https://leetcode.com/playground/6aGpVZLP/shared" frameBorder="0" width="100%" height="412" name="6aGpVZLP"></iframe>


---

## Database

### Approach 1: Using Aggregate Function

For this SQL approach, we can apply all the filters needed in the subquery before counting the number of users by each date for the final report.

#### Intuition

Let's start by applying all the filters needed in the subquery: 
- We need login records from all records: `activity = 'login'`
- From the login records, we only need the first login date for each user, and we can leverage the function `MIN()` to identify the smallest (first) date: `MIN(activity_date)`
- The first login dates are within at most 90 days from today; in other words, the difference between today and the first login date is smaller than 90: `DATEDIFF('2019-06-30', MIN(activity_date)) <= 90`


```sql
    (
      SELECT 
          user_id, 
          MIN(activity_date) AS login_date 
      FROM 
          Traffic 
      WHERE 
          activity = 'login' 
      GROUP BY 
          user_id 
      HAVING 
          DATEDIFF(
            '2019-06-30', 
            MIN(activity_date)
          ) <= 90
    ) t0
```

This step returns all the qualified records: the `user_id`s and their first-time login date within at most 90 days from today.

| user_id | login_date |
| ------- | ---------- |
| 1       | 2019-05-01 |
| 2       | 2019-06-21 |
| 4       | 2019-06-21 |

We only need to count the number of users by each `login_date` from the subquery to get the final result. Since there might be multiple users logged in on the same date, the result is grouped at the `login_date` level. 

```sql
SELECT 
  login_date, 
  COUNT(DISTINCT user_id) AS user_count 
FROM 
  (
    SELECT 
      user_id, 
      MIN(activity_date) AS login_date 
    FROM 
      Traffic 
    WHERE 
      activity = 'login' 
    GROUP BY 
      user_id 
    HAVING 
      DATEDIFF(
        '2019-06-30', 
        MIN(activity_date)
      ) <= 90
  ) t0 
GROUP BY 
  login_date
```

#### Implementation

```mysql []
SELECT 
  login_date, 
  COUNT(DISTINCT user_id) AS user_count 
FROM 
  (
    SELECT 
      user_id, 
      MIN(activity_date) AS login_date 
    FROM 
      Traffic 
    WHERE 
      activity = 'login' 
    GROUP BY 
      user_id 
    HAVING 
      DATEDIFF(
        '2019-06-30', 
        MIN(activity_date)
      ) <= 90
  ) t0 
GROUP BY 
  login_date

```

### Approach 2: Using the RANK() Window Function

This approach utilizes the `RANK()` window function to identify the first login date for each user. Since this function specifies rank for individual fields as per the categories, it will return the rank for login dates in ascending order by each user.

#### Intuition

In the subquery, we apply the filter to extract only login records and create the rank for login dates in an ascending order.

```sql
(
  SELECT 
    *, 
    RANK() OVER (
      PARTITION BY user_id 
      ORDER BY 
        activity_date ASC
    ) AS rnk 
  FROM 
    Traffic 
  WHERE 
    activity = 'login'
) t0
```

The subquery returns only the login records and an additional rank of log in dates for each user. 

| user_id | activity | activity_date | rnk |
| ------- | -------- | ------------- | --- |
| 1       | login    | 2019-05-01    | 1   |
| 2       | login    | 2019-06-21    | 1   |
| 3       | login    | 2019-01-01    | 1   |
| 4       | login    | 2019-06-21    | 1   |
| 5       | login    | 2019-03-01    | 1   |
| 5       | login    | 2019-06-21    | 2   |

In the main query, we select only the records with a rank of 1 as they are the first login date for each user. We can also add the filter to identify only the records that first logged in within 90 days from today. After applying all the filters, we can count the number of users by each `login_date`. Since there might be multiple users logged in on the same date, the result is grouped at the date level. 
  
```sql
SELECT 
  activity_date AS login_date, 
  COUNT(DISTINCT user_id) AS user_count 
FROM 
  (
    SELECT 
      *, 
      RANK() OVER (
        PARTITION BY user_id 
        ORDER BY 
          activity_date ASC
      ) AS rnk 
    FROM 
      Traffic 
    WHERE 
      activity = 'login'
  ) t0 
WHERE 
  rnk = 1 
  AND DATEDIFF('2019-06-30', activity_date) <= 90 
GROUP BY 
  activity_date
```

#### Implementation

```mysql []
SELECT 
  activity_date AS login_date, 
  COUNT(DISTINCT user_id) AS user_count 
FROM 
  (
    SELECT 
      *, 
      RANK() OVER (
        PARTITION BY user_id 
        ORDER BY 
          activity_date ASC
      ) AS rnk 
    FROM 
      Traffic 
    WHERE 
      activity = 'login'
  ) t0 
WHERE 
  rnk = 1 
  AND DATEDIFF('2019-06-30', activity_date) <= 90 
GROUP BY 
  activity_date
```