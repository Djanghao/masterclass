# Official Solution

**Link:** [https://leetcode.com/problems/active-businesses/solution/](https://leetcode.com/problems/active-businesses/solution/)

---

[TOC]

# Solution

---

## pandas

### Approach 1: Comparing After Merge

This approach starts by calculating the average activity (average `occurrences` across all companies) for each `event_type`. It then compares the `occurrences` from each record to the average activity after merging the calculated average activity to the original DataFrame. After applying the condition to compare the `occurrences` to the average `occurrences`, we can count the number of qualified (larger than average) `event_type`s and use this result to identify the active business. 

#### Intuition

Let's start by calculating the average activity for each `event_type`. Since there might be multiple `occurrences` under one `event_type`, we calculate the average `occurrences` for each `event_type` using `groupby()` and `mean()`. 

```python
avg = events.groupby('event_type', as_index=False)['occurrences'].mean()
```

This step returns the average activity for each `event_type` across all companies, and we can use this result to evaluate businesses.

| event_type | occurrences |
| ---------- | ---------- |
| ads        | 8          |
| page views | 7.5        |
| reviews    | 5          |


To compare each business to the average `occurrences`, we first merge the original DataFrame `events` to the DataFrame `avg` created above by the shared column `event_type`. In the merged DataFrame, we can apply a filter to extract only the records that have `occurrences` larger than the average.

```python
df = events.merge(avg, on='event_type')

df = df[df.occurrences_x - df.occurrences_y > 0]
```

The `merge` function automatically appends `_x` and `_y` to the column names if the column names are the same in both DataFrames being merged. Since both DataFrames (`events` and `avg`) have an `occurrences` column, the `merge` function appends `_x` to the `occurrences` column in the `events` DataFrame and `_y` to the `occurrences` column in the `avg` DataFrame. Therefore, the DataFrame `df` has a column named `occurrences_x` which represents the original `occurrences` from `events`, and a column named `occurrences_y` which represents the average `occurrences` of this type of event calculated in the DataFrame `avg`.

| business_id | event_type | occurrences_x | occurrences_y |
| ----------- | ---------- | ------------ | ------------ |
| 1           | reviews    | 7            | 5            |
| 1           | ads        | 11           | 8            |
| 2           | page views | 12           | 7.5          |


Now we only need to see which businesses have more than one qualified `event_type`. To do this, we first group the results at the business level and count the number of qualified `event_type` associated with this business. 

```python
active_business = df.groupby('business_id', as_index=False)['event_type'].count()
```

This step returns the `business_id` and the total number of qualified `event_type`.

| business_id | event_type |
| ----------- | ---------- |
| 1           | 2          |
| 2           | 1          |

To get the final output, we need to return only the businesses that have more than one qualified `event_type` and the column `business_id`. 

```python
return active_business[active_business.event_type > 1][['business_id']]
```


#### Implementation

<iframe src="https://leetcode.com/playground/VQ3HY89N/shared" frameBorder="0" width="100%" height="276" name="VQ3HY89N"></iframe>

### Approach 2: Comparing Using Lambda

Instead of calculating the average activity (average `occurrences` across all companies) for each `event_type` separately and comparing the `occurrences` from each record to the average activity after merging two DataFrames, this approach achieves both steps directly using `lambda`. This approach also leverages `lambda` to identify active businesses once we create the comparison. 

#### Intuition

We can start by identifying the qualified records for each business, which are the records that have `occurrences` larger than the average `occurrences` of the corresponding `event_type` across all businesses. To do this, we compare each `occurrences` to the average `occurrences` using `lambda`, and this comparison is created on the `event_type` level. 

```python
df = events.groupby('event_type', as_index=False).apply(lambda x: x[x['occurrences'] > x['occurrences'].mean()])
```

The step returns only the business and their `event_type`s that have an `occurrences` larger than the average `occurrences` of the same `event_type`.

| business_id | event_type | occurrences |
| ----------- | ---------- | ---------- |
| 1           | ads        | 11         |
| 2           | page views | 12         |
| 1           | reviews    | 7          |


Now we want to identify the active business from this list. To do this, we need to extract the businesses that have more than one `event_type` from the above result. Since we are looking for the aggregated number of `event_type` for each business, the filter is applied on the `business_id` level using `groupby()`. 

```python
df = df.groupby('business_id', as_index=False).filter(lambda x: x['business_id'].count() > 1)
```

To get the final output, we return only the column `business_id` and drop the duplicated values.

```python
return df[['business_id']].drop_duplicates()
```


#### Implementation

<iframe src="https://leetcode.com/playground/Uk36AT3K/shared" frameBorder="0" width="100%" height="225" name="Uk36AT3K"></iframe>

---

## Database

### Approach 1: Using the Aggregate Function

The SQL approach starts by calculating the average activity (average `occurrences` across all companies) for each `event_type` and  extracts the records that have `occurrences` larger than the average `occurrences`. The qualified records are grouped at the `business_id` level to calculate if the business has more than one such `event_type` in total to identify active businesses. 

#### Intuition

We can start by calculating the average `occurrences` for each `event_type` in a subquery or Common Table Expression (CTE). This result will be used later to identify the records that have `occurrences` larger than average.

```sql
(
  SELECT 
    event_type, 
    AVG(occurrences) AS avg 
  FROM 
    Events 
  GROUP BY 
    event_type
) t0
```

Now we can compare the `occurrences` from each business and `event_type` to the average `occurrences` calculated for the same `event_type`. To do this, in the main query, we `JOIN` the original table `Events` to the subquery created above on the shared column `event_type` and add the filter so that only the records with `occurrences` larger than average will be retained. To identify active businesses, we need to find the businesses that have more than one of the `event_type` from the filtered results. We group the records by `business_id` and apply the filter `HAVING COUNT(*) > 1` to the grouped result. 

#### Implementation

```mysql []
SELECT 
  e.business_id 
FROM 
  Events e 
  JOIN (
    SELECT 
      event_type, 
      AVG(occurrences) AS avg 
    FROM 
      Events 
    GROUP BY 
      event_type
  ) t0 ON e.event_type = t0.event_type 
  AND e.occurrences > t0.avg 
GROUP BY 
  e.business_id 
HAVING 
  COUNT(*) > 1
```

### Approach 2: Using the Window Function

This approach utilizes the window function to generate a new column that contains the average `occurrences` of the corresponding `event_type` for each record. In this way, we can compare and identify the active business in one step without any further `JOIN`.

#### Intuition

We can start by creating this new column using the window function. This step can be saved in a subquery or CTE. Since we want to compare the `occurence` from each record to the average `occurence` of the same `event_type`, we pass `event_type` to the parameter `PARTITION BY` in the function. 

```sql
(
  SELECT 
    business_id, 
    event_type, 
    occurrences, 
    AVG(occurrences) OVER (PARTITION BY event_type) AS avg 
  FROM 
    Events
) t0
```

With the average `occurrences` stored in the new column for each record, we can identify the records that have `occurrences` larger than the average by applying the condition `occurrences > avg` in the main query. Since the active businesses have more than one such `event_type`s, we can `GROUP` the qualified records at the `business_id` level and extract the `business_id`s that have more than one qualified record.
  
```sql
SELECT 
  business_id 
FROM 
  (
    SELECT 
      business_id, 
      event_type, 
      occurrences, 
      AVG(occurrences) OVER (PARTITION BY event_type) AS avg 
    FROM 
      Events
  ) t0 
WHERE 
  occurrences > avg 
GROUP BY 
  business_id 
HAVING 
  COUNT(*) > 1
```

#### Implementation

```mysql []
SELECT 
  business_id 
FROM 
  (
    SELECT 
      business_id, 
      event_type, 
      occurrences, 
      AVG(occurrences) OVER (PARTITION BY event_type) AS avg 
    FROM 
      Events
  ) t0 
WHERE 
  occurrences > avg 
GROUP BY 
  business_id 
HAVING 
  COUNT(*) > 1
```