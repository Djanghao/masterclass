# Official Solution

**Link:** [https://leetcode.com/problems/average-time-of-process-per-machine/solution/](https://leetcode.com/problems/average-time-of-process-per-machine/solution/)

---

​
[TOC]
​
# Solution
​
---

​

## pandas
We provide two different ways to perform calculations on two sets of data in the same column. One way is to use custom changes to distinguish between the two sets of data. The other way is to split the column into two different columns based on filters. Then we can calculate the aggregate total based on those isolated sets.


### Approach 1: Update Values with lambda and then Calculate

#### Algorithm

<!-- Describe your approach to solving the problem. -->
To calculate the time to complete a process, we need to know the difference between the 'start' `timestamp` and the 'end' `timestamp` for each machine and process. If we set all the 'start' `timestamp` to its negative value, we can get the time difference by using `SUM()`, since `(-start) + end` is equal to `end - start`, which is the time difference. 

We use [`apply()`](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.apply.html) and `lambda` to transform the `timestamp` for all rows that have an `activity_type` equals to 'start'. To convert the `timestamp` to negative, we have the `timestamp` multiplied by -1. We pass the parameter 'axis=1' so the calculation will be applied across rows.  

```python
activity['timestamp'] = activity.apply(lambda x: x.timestamp * -1 if x.activity_type == 'start' else x.timestamp, axis=1)
```

Now we have an updated DataFrame with all start `timestamp`  set to negative. 

| machine_id | process_id | activity_type | timestamp |
| ---------- | ---------- | ------------- | --------- |
| 0          | 0          | start         | -0.712    |
| 0          | 0          | end           | 1.52      |
| 0          | 1          | start         | -3.14     |
| 0          | 1          | end           | 4.12      |


With this updated DataFrame, we can now calculate the time to complete a process for each machine and process by adding the start `timestamp` and the end `timestamp`: 

```python
sum_machine_process = activity.groupby(['machine_id', 'process_id'], as_index=False)['timestamp'].sum()
```

| machine_id | process_id | timestamp |
| ---------- | ---------- | --------- |
| 0          | 0          | 0.808     |
| 0          | 1          | 0.98      |
| 1          | 0          | 1         |
| 1          | 1          | 0.99      |
| 2          | 0          | 0.412     |
| 2          | 1          | 2.5       |

Since we want the average processing time by each machine, that has more than one process, we then calculate the aggregate average for each machine with the same method: 

```python
mean_machine = sum_machine_process.groupby(['machine_id'], as_index=False)['timestamp'].mean()
```

Lastly, we want to round this final calculation to 3 decimal places and rename the column name as requested. We can add the functions `round` and `rename` directly to the code from the previous step: 

```python
mean_machine = sum_machine_process.groupby(['machine_id'], as_index=False)['timestamp'].mean().round(3).rename(columns = {'timestamp': 'processing_time'})
```


#### Final Code

<iframe src="https://leetcode.com/playground/XXLPgdSL/shared" frameBorder="0" width="100%" height="242" name="XXLPgdSL"></iframe>

---


### Approach 2: Split One Column Into Two and then Calculate 


#### Algorithm


In this approach, we split the original column into two separate ones and then calculate the aggregate values using these two columns. 

For this problem, we create two separate `timestamp` columns by splitting the original DataFrame by the values in the column `activity_type`: 

```python
#this DataFrame contains all the records with the start timestamp
start_df = activity[activity['activity_type'] == 'start']
#this DataFrame contains all the records with end timestamp
end_df = activity[activity['activity_type'] == 'end']
```

We then merge the two newly created DataFrames on the two shared columns `machine_id` and `process_id` for the later calculation. 

```python
merge_df = end_df.merge(start_df, on = ['machine_id', 'process_id'])
```

Now we have a DataFrame that contains the start `timestamp` and end `timestamp` for each machine and process in two different columns. Notice we have the `end_df` join the `start_df`, so the `activity_type_x` and `timestamp_x` are the values from `end_df`. 

| machine_id | process_id | activity_type_x | timestamp_x | activity_type_y | timestamp_y |
| ---------- | ---------- | --------------- | ----------- | --------------- | ----------- |
| 0          | 0          | end             | 1.52        | start           | 0.712       |
| 0          | 1          | end             | 4.12        | start           | 3.14        |
| 1          | 0          | end             | 1.55        | start           | 0.55        |
​

Now we can calculate the time to complete a process. We use the function [`assign()`](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.assign.html) to minus start `timestamp` (`timestamp_y`) from the end `timestamp` (`timestamp_x`) and store the calculated value in a new column `processing_time`. 

```python
df = merge_df.assign(processing_time = merge_df['timestamp_x'] - merge_df['timestamp_y'])
```
Below is the output. A new column, `processing_time` has been added to the original DataFrame (`merge_df`). 

| machine_id | process_id | activity_type_x | timestamp_x | activity_type_y | timestamp_y | processing_time |
| ---------- | ---------- | --------------- | ----------- | --------------- | ----------- | --------------- |
| 0          | 0          | end             | 1.52        | start           | 0.712       | 0.808           |
| 0          | 1          | end             | 4.12        | start           | 3.14        | 0.98            |
| 1          | 0          | end             | 1.55        | start           | 0.55        | 1               |
| 1          | 1          | end             | 1.42        | start           | 0.43        | 0.99            |
| 2          | 0          | end             | 4.512       | start           | 4.1         | 0.412           |
| 2          | 1          | end             | 5           | start           | 2.5         | 2.5             |

With the newly created `processing_time`, we can calculate the average processing time for each `machine_id` using `groupby()`. The calculation can be added to the previous step:

```python
 df = merge_df.assign(processing_time = merge_df['timestamp_x'] - merge_df['timestamp_y']).groupby(['machine_id'])['processing_time'].mean()
```

Last but not least, we want to make sure the calculated value is rounded to 3 decimal places by using `round()`. Again, we can add this function to the previous step: 

```python
df = merge_df.assign(processing_time = merge_df['timestamp_x'] - merge_df['timestamp_y']).groupby(['machine_id'], as_index=False)['processing_time'].mean().round(3)
```


#### Implementation

<iframe src="https://leetcode.com/playground/XRjxQZ9c/shared" frameBorder="0" width="100%" height="276" name="XRjxQZ9c"></iframe>

---


## Database


### Approach 1: Transform Values with CASE WHEN and then Calculate


#### Algorithm


To calculate the time to complete a process, we need to know the difference between the 'start' `timestamp` and the 'end' `timestamp` for each machine and process. If we set all the 'start' `timestamp` to its negative value, we can get the time difference by using `SUM()`, since `(-start) + end` is equal to `end - start`, which is the time difference. 

To do this, we use `CASE WHEN` to multiply all the start `timestamp` by -1, so the aggregated total of `timestamp` becomes the time to complete a process for each machine. 

```sql
SUM(CASE WHEN activity_type = 'start' THEN timestamp*-1 ELSE timestamp END)
```

Since we need the average by each `machine_id` and there might be multiple processes for each machine, we manually calculate the average by having the processing time divided by the number of processes. Luckily, for this question, all machines have the same number of processes.

```sql
SUM(CASE WHEN activity_type='start' THEN timestamp*-1 ELSE timestamp END)*1.0/(SELECT COUNT(DISTINCT process_id))
```

Lastly, we round the `processing_time` to 3 decimal places by using the function `ROUND()` and rename the column name. 

```sql
ROUND(SUM(CASE WHEN activity_type='start' THEN timestamp*-1 ELSE timestamp END)*1.0/(SELECT COUNT(DISTINCT process_id)),3) AS processing_time
```


#### Implementation

```sql
SELECT 
    machine_id,
    ROUND(SUM(CASE WHEN activity_type='start' THEN timestamp*-1 ELSE timestamp END)*1.0
    / (SELECT COUNT(DISTINCT process_id)),3) AS processing_time
FROM 
    Activity
GROUP BY machine_id
```
​

### Approach 2: Calling the original Table twice and Calculate as two columns


#### Algorithm


For this approach, we are calling the original table twice, once as the table that stores the start `timestamps` and once as the table that stores the end `timestamps`. To create the table alias, we give the original table `Activity` two different names, and filter each table by the `activity_type`. We also make sure the two tables are joined on the `machine_id` and `process_id`, so the output will have the start `timestamp` and end `timestamp` stored in two different columns for each machine and process. 

```sql
SELECT *
FROM Activity a, 
     Activity b
WHERE 
    a.machine_id = b.machine_id
AND 
    a.process_id = b.process_id
AND 
    a.activity_type = 'start'
AND 
    b.activity_type = 'end'
```

The output looks like this: 

| machine_id | process_id | activity_type | timestamp | machine_id | process_id | activity_type | timestamp |
| ---------- | ---------- | ------------- | --------- | ---------- | ---------- | ------------- | --------- |
| 0          | 0          | start         | 0.712     | 0          | 0          | end           | 1.52      |
| 0          | 1          | start         | 3.14      | 0          | 1          | end           | 4.12      |
| 1          | 0          | start         | 0.55      | 1          | 0          | end           | 1.55      |
| 1          | 1          | start         | 0.43      | 1          | 1          | end           | 1.42      |
| 2          | 0          | start         | 4.1       | 2          | 0          | end           | 4.512     |
| 2          | 1          | start         | 2.5       | 2          | 1          | end           | 5         |

With this table, we can update the calculation for `processing_time` by having all the timestamps from table b (end `timestamp`) to subtract all the `timestamp` in table a (start `timestamp`):

```sql
SELECT (b.timestamp - a.timestamp) AS processing_time
```

Since we want the average `processing_time` at the `machine_id` level, we add AVG() to the `processing_time` calculation and round it to 3 decimal places using the function `ROUND()`. 

```sql
SELECT a.machine_id, 
       ROUND(AVG(b.timestamp - a.timestamp), 3) AS processing_time
```


#### Implementation

```sql
SELECT a.machine_id, 
       ROUND(AVG(b.timestamp - a.timestamp), 3) AS processing_time
FROM Activity a, 
     Activity b
WHERE 
    a.machine_id = b.machine_id
AND 
    a.process_id = b.process_id
AND 
    a.activity_type = 'start'
AND 
    b.activity_type = 'end'
GROUP BY machine_id
```
​
---