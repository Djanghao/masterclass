# Official Solution

**Link:** [https://leetcode.com/problems/human-traffic-of-stadium/solution/](https://leetcode.com/problems/human-traffic-of-stadium/solution/)

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
We offer two ways to approach this problem of finding consecutive values. One way is to use the functions [`shift()`](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.shift.html) and [`diff()`](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.diff.html) to compare the values between the current row and the previous rows. Another way, inspired by the idea of 'gaps and islands', is to find the islands (consecutive values) from all rows. You can learn more about this [concept](https://www.mssqltips.com/sqlservertutorial/9130/sql-server-window-functions-gaps-and-islands-problem/) if you are interested in this idea. 

<!-- h3 for approaches -->
### Approach 1: Examine Previous Rows Using shift() and diff()
<!-- h4 for sections -->
#### Algorithm

<!-- Describe your approach to solving the problem. -->
For this approach, we find the consecutive `id`s by calculating 1) the differences between the current `id` and the last `id` and 2) the differences between the last `id` and the `id` before the last `id`. If both differences are equal to 1, we find the 3rd  `id` in the three consecutive `id`s.

We start with creating a new DataFrame to store only the records with `people` larger than or equal to 100 from the DataFrame `stadium` since we only need to find consecutive `id`s from these records. 

```python
df = stadium[stadium['people'] >= 100]
```

The new DataFrame is as follows: 

| id | visit_date | people |
| -- | ---------- | ------ |
| 2  | 2017-01-02 | 109    |
| 3  | 2017-01-03 | 150    |
| 5  | 2017-01-05 | 145    |
| 6  | 2017-01-06 | 1455   |
| 7  | 2017-01-07 | 199    |
| 8  | 2017-01-09 | 188    |

Now we can start to identify the consecutive `id`s. For the difference between the current `id` and the `id` of the previous row, we can simply find the difference using `diff()`; for the difference between the `id` of the previous row and the `id` before the previous row, we can use both `diff()` and `shift(1)`. If both differences are equal to 1, the `id` of the current row is the third ID in the three consecutive `id`s, and the new column `flag` created will mark these rows that contain the valid third ID as `True`.

```python
df['flag'] = ((df['id'].diff() == 1) & (df['id'].diff().shift(1) == 1))
```

Here is what the output looks like: 

| id | visit_date | people | flag  |
| -- | ---------- | ------ | ----- |
| 2  | 2017-01-02 | 109    | null  |
| 3  | 2017-01-03 | 150    | null  |
| 5  | 2017-01-05 | 145    | false |
| 6  | 2017-01-06 | 1455   | false |
| 7  | 2017-01-07 | 199    | true  |
| 8  | 2017-01-09 | 188    | true  |

Since the row with `flag` equal to `True` is always the 3rd `id` in any three or more consecutive `id`s group, we only need to figure out how to select not only the rows with `flag` equal to `True`, but also their previous two rows.

```python
df = df[(df['flag'] == True)| (df['flag'].shift(-1) == True) | (df['flag'].shift(-2) == True)]
```

Below are all the records with three or more consecutive `id`s.

| id | visit_date | people | flag  |
| -- | ---------- | ------ | ----- |
| 5  | 2017-01-05 | 145    | false |
| 6  | 2017-01-06 | 1455   | false |
| 7  | 2017-01-07 | 199    | true  |
| 8  | 2017-01-09 | 188    | true  |


So close! We want to clean the output as requested by the problem: we remove the column `flag` from the output, and order the result by the column `visit_date`. 

```python
return df.loc[:, df.columns != 'flag'].sort_values(by='visit_date')
```

<!-- h4 for sections -->
#### Implementation
​​<iframe src="https://leetcode.com/playground/LdDpRuc4/shared" frameBorder="0" width="100%" height="242" name="LdDpRuc4"></iframe>
<!-- an empty line to separate approaches -->

<!-- h3 for approaches -->
### Approach 2: Finding the Islands

<!-- h4 for sections -->
#### Algorithm
​<!-- Describe your approach to solving the problem. -->
The key to identifying the islands (consecutive values) from a column is to calculate the difference between the column (in this problem, it is the column `id`) and a new rank (looks like an index id) we append to all rows. Any islands will be some consecutive rows that share the same result from this calculation. If all `id`s are consecutive, the differences between this new rank and the `id` will be the same for all rows, in other words, all rows belong to this one island. If no `id`s are consecutive, every row will return a different value from this calculation, and no island is identified.

To begin with, we update the original DataFrame to get only the records with `people` larger than or equal to 100 since we only need to find consecutive `id`s from these records.

```python
stadium = stadium[stadium['people'] >= 100]
```
| id | visit_date | people |
| -- | ---------- | ------ |
| 2  | 2017-01-02 | 109    |
| 3  | 2017-01-03 | 150    |
| 5  | 2017-01-05 | 145    |
| 6  | 2017-01-06 | 1455   |
| 7  | 2017-01-07 | 199    |
| 8  | 2017-01-09 | 188    |

Now we can start to identify the islands (consecutive values). To do this, we first create our rank of the records and store it in a separate column `rnk` for future calculations. 

```python
stadium['rnk'] = range(len(stadium))
```
| id | visit_date | people | rnk |
| -- | ---------- | ------ | --- |
| 2  | 2017-01-02 | 109    | 0   |
| 3  | 2017-01-03 | 150    | 1   |
| 5  | 2017-01-05 | 145    | 2   |
| 6  | 2017-01-06 | 1455   | 3   |
| 7  | 2017-01-07 | 199    | 4   |
| 8  | 2017-01-09 | 188    | 5   |

Then we calculate the difference between the column `rnk` and the original column `id`, and save this result in a new column `island`.

```python
stadium['island'] = stadium.id - stadium.rnk
```

We can see from the output that two islands are discovered from the records (the islands are the rows sharing the same values in the new column `island`). 

| id | visit_date | people | rnk | island |
| -- | ---------- | ------ | --- | ------ |
| 2  | 2017-01-02 | 109    | 0   | 2      |
| 3  | 2017-01-03 | 150    | 1   | 2      |
| 5  | 2017-01-05 | 145    | 2   | 3      |
| 6  | 2017-01-06 | 1455   | 3   | 3      |
| 7  | 2017-01-07 | 199    | 4   | 3      |
| 8  | 2017-01-09 | 188    | 5   | 3      |

However, not all islands are qualified for this problem. We want to make sure the island contains three or more rows since we are looking for three or more consecutive `id`s. To get this count, we group the rows by the column `island` and count how many `id`s are contained in each group. We store this aggregated count along with each row in a separate column called `island_cnt`. 

```python
stadium['island_cnt'] = stadium.groupby(['island'], as_index=False).id.transform('count')
```

The output looks like this: 

| id | visit_date | people | rnk | island | island_cnt |
| -- | ---------- | ------ | --- | ------ | ---------- |
| 2  | 2017-01-02 | 109    | 0   | 2      | 2          |
| 3  | 2017-01-03 | 150    | 1   | 2      | 2          |
| 5  | 2017-01-05 | 145    | 2   | 3      | 4          |
| 6  | 2017-01-06 | 1455   | 3   | 3      | 4          |
| 7  | 2017-01-07 | 199    | 4   | 3      | 4          |
| 8  | 2017-01-09 | 188    | 5   | 3      | 4          |

​
Now we can identify the qualified islands, which are records in an island and with a count (`island_cnt`) larger than or equal to 3. 

```python
return stadium[stadium['island_cnt'] >= 3]
```

Last but not least, we select only the needed columns and sort the result by `visit_date` as the problem requested. We can add these steps to the previous step.

```python
return stadium[stadium['island_cnt'] >= 3][['id', 'visit_date', 'people']].sort_values(by='visit_date')
```


<!-- h4 for sections -->
#### Implementation
​<iframe src="https://leetcode.com/playground/E9TdkdEj/shared" frameBorder="0" width="100%" height="242" name="E9TdkdEj"></iframe>

---
​
​
## Database
We provide three different ways to solve this problem of identifying consecutive values. If the problem doesn't require too many consecutive rows (say, 5?), we can create table aliases and manually compare the differences from the rows of each table alias. For better performance, or if the problem is looking for too many consecutive rows, we can use window functions `LEAD()` or `LAG()` to append values from the previous and next rows and calculate the differences between them. If you are interested in a more graceful way to approach this problem, you probably want to learn a bit more about the idea of ['gap and island'](https://www.mssqltips.com/sqlservertutorial/9130/sql-server-window-functions-gaps-and-islands-problem/), and we will also provide an approach using this concept.

There are some similar questions you can practice once you have mastered the methodologies: [180](https://leetcode.com/problems/consecutive-numbers/), [603](https://leetcode.com/problems/consecutive-available-seats/), [1454](https://leetcode.com/problems/active-users/)

<!-- h3 for approaches -->
### Approach 1: Using Self-Join

<!-- h4 for sections -->
#### Algorithm

<!-- Describe your approach to solving the problem. -->
The number of consecutive values we need to identify decides how many table aliases we need to create. For this problem, the number is three. Since we are only interested in the records with people greater than or equal to 100, we can also add the filter to all three table aliases in this step. 

```sql
SELECT 
    *
FROM 
    stadium AS a, stadium AS b, stadium AS c
WHERE
    a.people >= 100 AND b.people >= 100 AND c.people >= 100
```
​
Now we can identify the consecutive `id`s by calculating the differences between `id`s from each table alias. 

If the three `id`s are consecutive from table a, b, and c, which means the difference between the two `id`s are 1, we can add filters like below: 

```sql
WHERE (a.id - b.id = 1 AND b.id - c.id = 1)
```

But how can we select all three `id`s from three table aliases and put these `id`s into one column instead of multiple columns? A workaround is to put one table alias, in this approach we select table a, in all possible positions of the three consecutive `id`s. 

When a.`id` is the **minimum** `id` in the three consecutive `id`s (c.`id` > b.`id` > a.`id`):
```sql
(c.id - b.id = 1 AND b.id - a.id = 1)
```

When a.`id` is in the **middle** of the three consecutive `id`s (b.`id` > a.`id` > c.`id`):
```sql
(b.id - a.id = 1 AND a.id - c.id = 1)
```

Now we can just `SELECT` records from table a and `ORDER` the results by `visit_date` as requested. 

<!-- h4 for sections -->
#### Implementation

```mysql []
SELECT 
    DISTINCT a.*
FROM 
    stadium AS a, stadium AS b, stadium AS c
WHERE
     a.people >= 100 AND b.people >= 100 AND c.people >= 100
AND 
    (
       (a.id - b.id = 1 AND b.id - c.id = 1)
    OR (c.id - b.id = 1 AND b.id - a.id = 1)
    OR (b.id - a.id = 1 AND a.id - c.id = 1)
    )
ORDER BY visit_date
```

<br>

<!-- an empty line to separate approaches -->

### Approach 2: Using Window Functions

<!-- h4 for sections -->
#### Algorithm

<!-- Describe your approach to solving the problem. -->
For this approach, we append the values from the previous and next rows by using `LEAD()` and `LAG()` and then compare the differences to find the consecutive values. We can also apply the filter to identify only the records with people greater than or equal to 100 in this step. The output will be stored in a CTE for future use.  

```sql
WITH base AS (
        SELECT *,
            LEAD(id, 1) OVER(ORDER BY id) AS next_id,
            LEAD(id, 2) OVER(ORDER BY id) AS second_next_id,
            LAG(id, 1) OVER(ORDER BY id) AS last_id,
            LAG(id, 2) OVER(ORDER BY id) AS second_last_id
        FROM stadium
        WHERE people >= 100 
        )
```

Below is what the CTE `base` looks like. Notice the new `id` columns created by `LEAD()` and `LAG()` do not include the records that are filtered out, which is exactly what we are looking for. 

| id | visit_date | people | next_id | second_next_id | last_id | second_last_id |
| -- | ---------- | ------ | ------- | -------------- | ------- | -------------- |
| 2  | 2017-01-02 | 109    | 3       | 5              | null    | null           |
| 3  | 2017-01-03 | 150    | 5       | 6              | 2       | null           |
| 5  | 2017-01-05 | 145    | 6       | 7              | 3       | 2              |
| 6  | 2017-01-06 | 1455   | 7       | 8              | 5       | 3              |



Now we can start to identify the consecutive `id`s. Since we want to return all the records with three or more consecutive `id`s, we want to make sure the `id` from the current is in any of the possible positions within the three consecutive `id`s. 

When `id` is in the **middle** of the three consecutive `id`s and the order is `next_id` > `id` > `last_id`:
```sql
WHERE (next_id - id = 1 AND id - last_id = 1)
```

When `id` is the **minimum** `id` of the three consecutive `id`s and the order is `second_next_id` > `next_id` > `id`:
```sql
OR (second_next_id - next_id = 1 AND next_id - id = 1)
```

When `id` is the **maximum** `id` of the three consecutive `id`s and the order is `id` > `last_id` > `second_last_id`: 
```sql
OR (id - last_id = 1 AND last_id - second_last_id = 1)
```

Now the only thing left us to do is to update the output by selecting the required columns and order the result by `visit_date` in the main query.

```sql
SELECT DISTINCT id, visit_date, people
FROM base 
WHERE (next_id - id = 1 AND id - last_id = 1)
    OR (second_next_id - next_id = 1 AND next_id - id = 1)
    OR (id - last_id = 1 AND last_id - second_last_id = 1)
ORDER BY visit_date
```

<!-- h4 for sections -->
#### Implementation

```mysql []
WITH base AS (
        SELECT *,
            LEAD(id, 1) OVER(ORDER BY id) AS next_id,
            LEAD(id, 2) OVER(ORDER BY id) AS second_next_id,
            LAG(id, 1) OVER(ORDER BY id) AS last_id,
            LAG(id, 2) OVER(ORDER BY id) AS second_last_id
        FROM stadium
        WHERE people >= 100 
        )
SELECT DISTINCT id, visit_date, people
FROM base 
WHERE (next_id - id = 1 AND id - last_id = 1)
    OR (second_next_id - next_id = 1 AND next_id - id = 1)
    OR (id - last_id = 1 AND last_id - second_last_id = 1)
ORDER BY visit_date
```

<br>

<!-- an empty line to separate approaches -->

### Approach 3: Finding the Islands

<!-- h4 for sections -->
#### Algorithm

<!-- Describe your approach to solving the problem. -->
The key to identifying the islands (consecutive values) from a column is to calculate the difference between the column (in this problem, it is the column `id`) and a new rank (looks like an index id) we append to all rows. Any islands will be the rows that share the same result from this calculation. If all `id`s are consecutive, the differences between this new rank and the `id` will be the same for all rows, in other words, all rows belong to this one island. If no `id`s are consecutive, every row will return a different value from this calculation, and no island is identified.

For this problem, we want to identify the islands (consecutive values) from all the records. To do this, we need to create a new rank for all the qualified records, which are the records of people greater than or equal to 100. Either `RANK()` or `ROW_NUMBER()` works for this purpose. 

```sql
SELECT id, visit_date, people, RANK()OVER(ORDER BY id) AS rnk
FROM Stadium
WHERE people >= 100
```

Now we have a new column, `rnk`, in addition to the original `id`:

| id | visit_date | people | rnk |
| -- | ---------- | ------ | --- |
| 2  | 2017-01-02 | 109    | 1   |
| 3  | 2017-01-03 | 150    | 2   |
| 5  | 2017-01-05 | 145    | 3   |

​
With these new ranks for the records, we can identify the islands by calculating the differences between `id` and `rnk`. We store the result of this calculation in a new column called `island` and save the output in a CTE, `stadium with rnk`, for future use. 

```sql
WITH stadium_with_rnk AS
(
    SELECT id, visit_date, people, rnk, (id - rnk) AS island
    FROM (
        SELECT id, visit_date, people, RANK() OVER(ORDER BY id) AS rnk
        FROM Stadium
        WHERE people >= 100) AS t0
)
```

The records sharing the same value in the column `island` are the ones with consecutive `id`s:

| id | visit_date | people | rnk | island |
| -- | ---------- | ------ | --- | ------ |
| 2  | 2017-01-02 | 109    | 1   | 1      |
| 3  | 2017-01-03 | 150    | 2   | 1      |
| 5  | 2017-01-05 | 145    | 3   | 2      |
| 6  | 2017-01-06 | 1455   | 4   | 2      |
| 7  | 2017-01-07 | 199    | 5   | 2      |
| 8  | 2017-01-09 | 188    | 6   | 2      |


However, we only want islands with three or more consecutive `id`s. To identify these islands, we group the record by the column `island`, and filter the aggregated groups to get the qualified islands.  

```sql
SELECT island 
FROM stadium_with_rnk
GROUP BY island
HAVING COUNT(*) >= 3
```

| island |
| ------ |
| 2      |

Now With the qualified islands identified, we can select all records associated with these islands. We put the previous step in a subquery and use it as a filter. In the main query, we only select the requested columns from the island and sort the result by `visit_date`. 

```sql
SELECT id, visit_date, people 
FROM stadium_with_rnk
WHERE island IN (SELECT island 
                 FROM stadium_with_rnk 
                 GROUP BY island 
                 HAVING COUNT(*) >= 3)
ORDER BY visit_date
```

<!-- h4 for sections -->

#### Implementation

```mysql []
WITH stadium_with_rnk AS
(
    SELECT id, visit_date, people, rnk, (id - rnk) AS island
    FROM (
        SELECT id, visit_date, people, RANK() OVER(ORDER BY id) AS rnk
        FROM Stadium
        WHERE people >= 100) AS t0
)
SELECT id, visit_date, people 
FROM stadium_with_rnk
WHERE island IN (SELECT island 
                 FROM stadium_with_rnk 
                 GROUP BY island 
                 HAVING COUNT(*) >= 3)
ORDER BY visit_date
```
<!-- an empty line to separate approaches -->
<br>