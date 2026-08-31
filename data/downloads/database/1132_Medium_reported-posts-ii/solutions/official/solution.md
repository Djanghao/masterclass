# Official Solution

**Link:** [https://leetcode.com/problems/reported-posts-ii/solution/](https://leetcode.com/problems/reported-posts-ii/solution/)

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

<!-- h3 for approaches -->
### Approach: Calculate and Name Multiple Aggregate Values Using NamedAgg

<!-- h4 for sections -->
#### Algorithm

<!-- Describe your approach to solving the problem. -->
For this approach, we calculate the daily percentage of removed spam posts in all spam posts reported by each `action_date` first. Once we have the daily percentage, we can get the overall average for all days. 

Let's start by identifying the spam posts reported. Since there might be spam posts reported more than once in the same `action_date`, we remove the duplicate records using [`drop_duplicates()`](https://pandas.pydata.org/docs/reference/api/pandas.Series.drop_duplicates.html). If there are multiple posts reported within the same `action_date`, the duplicates except for the first occurrence will be dropped (this is the default unless we pass certain parameters).


```python
spam = actions[actions['extra'] == 'spam'].drop_duplicates(['action_date', 'post_id'])
```

The output from this step: 

| user_id | post_id | action_date | action | extra |
| ------- | ------- | ----------- | ------ | ----- |
| 2       | 2       | 2019-07-04  | report | spam  |
| 3       | 4       | 2019-07-04  | report | spam  |
| 4       | 3       | 2019-07-02  | report | spam  |


We then identify the removed spam posts from all reported spam posts. This can be achieved by merging the DataFrame created in the above step to the DataFrame `removals`. Any matched records are spam posts that are reported and removed. Note that we use a left `merge` on the DataFrame of all reported spam posts because we need to keep all of them to compute the daily percentage.

```python
removed_spam = spam.merge(removals, on='post_id', how='left')
```

From the output of this step, we can see that the spam posts removed will have a non-null `remove_date`. 


| user_id | post_id | action_date | action | extra | remove_date |
| ------- | ------- | ----------- | ------ | ----- | ----------- |
| 2       | 2       | 2019-07-04  | report | spam  | 2019-07-20  |
| 3       | 4       | 2019-07-04  | report | spam  | NaT         |
| 4       | 3       | 2019-07-02  | report | spam  | 2019-07-18  |


Now we can calculate the percentage of reported and removed spam posts in all reported spam posts. We leverage the function [`agg(NamedAgg)`](https://pandas.pydata.org/docs/user_guide/groupby.html#groupby-aggregate-named) to calculate and name more than one aggregate value from multiple columns. Specifically, we are interested in obtaining two counts:

- The number of removed spam posts (those with a `remove_date`)
- The number of all spam posts reported

To determine the number of removed spam posts, we employ the `count` aggregation function, which calculates only non-null values. For the total count of all reported spam posts, we utilize the `size` aggregation function, which includes both null and non-null values in its calculations.

```python
df = removed_spam.groupby("action_date", as_index=False).agg(
        removed_spam=('remove_date', 'count'), 
        total_spam=('remove_date', 'size')
    )
```

Below is the output from this step. Now, we have the values necessary for calculating the percentage.

| action_date | removed_spam | total_spam |
| ----------- | ------------ | ---------- |
| 2019-07-02  | 1            | 1          |
| 2019-07-04  | 1            | 2          |

In the next step, we calculate the daily percentage of deleted spam to total spam by dividing the `removed_spam` column by the `total_spam` column in each group. The result is multiplied by 100 and renamed for the final output. 

```python
df = df.assign(average_daily_percent = df['removed_spam']*100/df['total_spam'])
```

| action_date | removed_spam | total_spam | average_daily_percent |
| ----------- | ------------ | ---------- | --------------------- |
| 2019-07-02  | 1            | 1          | 100                   |
| 2019-07-04  | 1            | 2          | 50                    |
​

Now we can calculate the overall average from the daily percentage. We can use the function `agg()` again and round the result to 2 decimal places. 

```python
avg = df.agg({'average_daily_percent': ['mean']}).round(2)
```



<!-- h4 for sections -->
#### Implementation
<iframe src="https://leetcode.com/playground/EvPCypSC/shared" frameBorder="0" width="100%" height="361" name="EvPCypSC"></iframe>
<!-- an empty line to separate approaches -->

-------
​
## Database

<!-- h3 for approaches -->
### Approach: Identifying Matched Records Using CASE WHEN

<!-- h4 for sections -->
#### Algorithm

<!-- Describe your approach to solving the problem. -->
In this approach, we first calculate the daily percentage of removed spam posts from all spam posted reported by each `action_date`. Once we get the daily percentage, we can get the total average of all days.

Since the reported spam posts are stored in the table `Actions` and the reported and removed spam posts are saved in the table `Removals`, we need to join these two tables to know whether a spam post is removed or not. To identify the spam posts in both tables, we leverage the function `CASE WHEN`, and any matched records are spam posts that are reported and removed. 

We can calculate the daily percentage in either a CTE or subquery. `LEFT JOIN` is used here because we also need to know the numbers of reported but not removed spam posts, and these `post_id`s will be shown only in the left table (`Actions`). `DISTINCT` is also necessary when counting the number of `post_id`s in case one post is reported multiple times in the same `action_date`. 


```sql
SELECT action_date, 
    COUNT(DISTINCT CASE WHEN a.post_id = r.post_id THEN r.post_id END) / COUNT(DISTINCT a.post_id) AS daily_rate
FROM Actions a
LEFT JOIN Removals r
ON a.post_id = r.post_id
WHERE a.extra = 'spam'
GROUP BY action_date
```

| action_date | daily_rate |
| ----------- | ---------- |
| 2019-07-02  | 1          |
| 2019-07-04  | 0.5        |


With the daily percentage of removed spam posts out of all spam posts, we can calculate the overall average using the `AVG()` function. To get the final output, we also need to multiply the calculation result by 100, round it to 2 decimal places, and rename the column name in the main query.


<!-- h4 for sections -->
#### Implementation

```mysql []
SELECT ROUND(AVG(daily_rate)*100, 2) AS average_daily_percent
FROM (
    SELECT action_date, 
        COUNT(DISTINCT CASE WHEN a.post_id = r.post_id THEN r.post_id END) / COUNT(DISTINCT a.post_id) AS daily_rate
    FROM Actions a
    LEFT JOIN Removals r
    ON a.post_id = r.post_id
    WHERE a.extra = 'spam'
    GROUP BY action_date
    )t0
```
​
<!-- an empty line to separate approaches -->
-----