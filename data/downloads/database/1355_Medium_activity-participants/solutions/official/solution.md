# Official Solution

**Link:** [https://leetcode.com/problems/activity-participants/solution/](https://leetcode.com/problems/activity-participants/solution/)

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
### Approach 1: NOT IN Using '~' and 'isin()'

<!-- h4 for sections -->
#### Algorithm

<!-- Describe your approach to solving the problem. -->
For a typical **NOT IN** problem (also known as a left anti-join in SQL), the most straightforward solution is always to remove unwanted group (the activities with the maximum or the minimum number of participants for this problem) from the main group (all activities). 

Let's start with identifying the unwanted group. To get the maximum and minimum number of participants, we group the records in the DataFrame `friends` by the column `activity` and count how many `id`s (participants) each `activity` has. 

```python
df = friends.groupby('activity', as_index=False)['id'].count()
```

Here's the output from this step:  

| activity     | id |
| ------------ | -- |
| Eating       | 3  |
| Horse Riding | 1  |
| Singing      | 2  |

With the number of participants for each activity, we can identify the maximum and minimum number of participants. Here, we use the function `agg()` to get both values.

```python
max_min = df.agg({'id': ['max', 'min']})
```
​
Both the maximum and minimum number of participants from all activities are stored in this new DataFrame `max_min`: 

| id |
| -- |
| 3  |
| 1  |

Now, we can remove the activities with the maximum and minimum number of participants. We first identify the activities that have the same number of participants in the DataFrame `max_min` using `isin()`, and then remove these activities from the list of activities using `~`. For the final output, we select only the column `activity`. 

```python
df = df[~df['id'].isin(max_min['id'])][['activity']]
```

<!-- h4 for sections -->
#### Implementation
​<iframe src="https://leetcode.com/playground/aFAwxCTD/shared" frameBorder="0" width="100%" height="225" name="aFAwxCTD"></iframe>

### Approach 2: Remove Matching Records Using LEFT JOIN Only

<!-- h4 for sections -->
#### Algorithm

<!-- Describe your approach to solving the problem. -->
Another way to remove the unwanted group from the main group is to leverage the function `LEFT JOIN`. If we put the main group in the left table and the unwanted group in the right table, then we can remove the overlap in the left table by evaluating whether the records exist only in the left table.

Similar to the first approach, we can start by calculating how many participants each activity has. 

```python
df = friends.groupby('activity', as_index=False)['id'].count()
```

Here's the output from this step: 

| activity     | id |
| ------------ | -- |
| Eating       | 3  |
| Horse Riding | 1  |
| Singing      | 2  |

With the number of participants for each activity, we can identify the maximum and minimum number of participants, and this result will be used as the unwanted group later (right table for the join). Here, we use `agg()` to get both values. 

```python
max_min = df.agg({'id': ['max', 'min']})
```

Now we can remove the unwanted group from the main group using the left `merge`. The parameter `indicator=True` is passed to the `merge` so we can identify if the records only exist in the left table. These records will have an indicator equal to `left_only`. In other words, they are not in the unwanted group. 

```python
df = df.merge(max_min, on='id', how='left', indicator=True)
```

The column `_merge` shows which rows are in both DataFrames and which rows are in only the left table. 


| activity     | id | _merge    |
| ------------ | -- | --------- |
| Eating       | 3  | both      |
| Horse Riding | 1  | both      |
| Singing      | 2  | left_only |

To get the final output, we select the records with `_merge` equal to `left_only` and the column `activity`.

```python
df2= df[df['_merge']=='left_only'][['activity']]
```

<!-- h4 for sections -->
#### Implementation
​<iframe src="https://leetcode.com/playground/mEEuTaGL/shared" frameBorder="0" width="100%" height="259" name="mEEuTaGL"></iframe>
---

## Database

<!-- h3 for approaches -->
### Approach 1: NOT IN/EXISTS​
<!-- h4 for sections -->
#### Algorithm

<!-- Describe your approach to solving the problem. -->
For this approach, we want to identify the unwanted group (the maximum and minimum number of participants) in a subquery, and make sure these records are `NOT IN` the main query (all activities).

To do this, we can start with creating a CTE with the number of participants for each activity:

```sql
WITH user_by_activity AS
    (
    SELECT activity, COUNT(DISTINCT id) AS user_cnts
    FROM Friends
    GROUP BY activity
    )
```

Here's the output from this step:

| activity     | user_cnts |
| ------------ | --------- |
| Eating       | 3         |
| Horse Riding | 1         |
| Singing      | 2         |

In the main query, we select all `activity` from the CTE created above. 

```sql
SELECT activity
FROM user_by_activity
```

Now we can remove the unwanted values from the main query using `NOT IN`. In the subqueries, we get the maximum and minimum number of participants from the CTE created above, and make sure the activities from the main query does not have the activities that have the number of participants equal to the values from the subquery.

```sql
SELECT activity
FROM user_by_activity
WHERE user_cnts NOT IN (SELECT MAX(user_cnts) FROM user_by_activity)
AND user_cnts NOT IN (SELECT MIN(user_cnts) FROM user_by_activity)
```

<!-- h4 for sections -->
#### Implementation

```mysql []
WITH user_by_activity AS
    (
    SELECT activity, COUNT(DISTINCT id) AS user_cnts
    FROM Friends
    GROUP BY activity
    )
SELECT activity
FROM user_by_activity
WHERE user_cnts NOT IN (SELECT MAX(user_cnts) FROM user_by_activity)
AND user_cnts NOT IN (SELECT MIN(user_cnts) FROM user_by_activity)
```
​

### Approach 2: Using RANK() to Identify the Maximum and Minimum​
<!-- h4 for sections -->
#### Algorithm

<!-- Describe your approach to solving the problem. -->
For this approach, we sort the activities by the number of participants in both an ascending order and a descending order to get the maximum and minimum number of participants. Using these rankings, we can identify activities that do not have a rank of 1 in either list.

Firstly, we rank each activity based on the number of participants (`COUNT(id)`) in ascending order and descending order. 

```sql
SELECT activity, 
    RANK () OVER (ORDER BY(COUNT(id))) AS rank_asc,
    RANK () OVER (ORDER BY(COUNT(id))DESC) AS rank_desc
FROM Friends
GROUP BY activity
```

Below is the output from this step. The activity with a rank equals to 1 in the column `rank_asc` has the minimum number of participants, and the activity with a rank equals to 1 in the column `rank_desc` is has the maximum number of participants. 

| activity     | rank_asc | rank_desc |
| ------------ | -------- | --------- |
| Eating       | 3        | 1         |
| Singing      | 2        | 2         |
| Horse Riding | 1        | 3         |

Now we only need to select the activity that does not rank as 1 in neither rank columns. 

<!-- h4 for sections -->
#### Implementation

```mysql []
SELECT activity 
FROM 
    (
    SELECT activity, 
        RANK () OVER (ORDER BY(COUNT(id))) AS rank_asc,
        RANK () OVER (ORDER BY(COUNT(id))DESC) AS rank_desc
    FROM Friends
    GROUP BY activity
    )t0
WHERE rank_asc != 1 AND rank_desc != 1
```
​

<br>

### Approach 3: Remove the Matching Records Using LEFT JOIN

<!-- h4 for sections -->
#### Algorithm

<!-- Describe your approach to solving the problem. -->
Similar to the second approach in the Pandas section, we can leverage the `LEFT JOIN` to remove the unwanted group (right table, activities with minimum and maximum number of participants) from the main group (left table, all activities) by removing overlapping records between two tables from the left table. 

To begin with, we count the number of participants associated with each activity in a CTE as the result is needed more than once for later steps. 

```sql
WITH user_by_activity AS 
    (
    SELECT activity, COUNT(DISTINCT id) AS user_cnts
    FROM Friends
    GROUP BY activity
    )
```

Here's the output from this step: 

| activity     | user_cnts |
| ------------ | --------- |
| Eating       | 3         |
| Horse Riding | 1         |
| Singing      | 2         |

With the number of participants for each activity, we can start with creating the unwanted group, which is the maximum and minimum number of participants from all activities.

```sql
SELECT MAX(user_cnts) AS user_cnts 
FROM user_by_activity
UNION
SELECT MIN(user_cnts) AS user_cnts 
FROM user_by_activity
```

We then pull all activity names in the main query: 

```sql
SELECT activity
FROM user_by_activity u
```

Lastly, we have the main query `LEFT JOIN` the subquery, and remove the subquery from the main query by setting the key of the subquery as `NULL`. 

```sql
SELECT activity
FROM user_by_activity u
LEFT JOIN 
    (SELECT MAX(user_cnts) AS user_cnts 
    FROM user_by_activity
    UNION
    SELECT MIN(user_cnts) AS user_cnts 
    FROM user_by_activity
    )m
ON u.user_cnts = m.user_cnts
WHERE m.user_cnts IS NULL
```

<!-- h4 for sections -->
#### Implementation


```mysql []
WITH user_by_activity AS 
    (
    SELECT activity, COUNT(DISTINCT id) AS user_cnts
    FROM Friends
    GROUP BY activity
    )
SELECT activity
FROM user_by_activity u
LEFT JOIN 
    (SELECT MAX(user_cnts) AS user_cnts 
    FROM user_by_activity
    UNION
    SELECT MIN(user_cnts) AS user_cnts 
    FROM user_by_activity
    )m
ON u.user_cnts = m.user_cnts
WHERE m.user_cnts IS NULL
```


<!-- an empty line to separate approaches -->
----