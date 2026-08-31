# Official Solution

**Link:** [https://leetcode.com/problems/hopper-company-queries-i/solution/](https://leetcode.com/problems/hopper-company-queries-i/solution/)

---

<!-- Don't delete this -->
[TOC]

# Solution

---

## pandas

<!-- h3 for approaches -->
### Approach: Conditional Joins with Sub DataFrames

<!-- h4 for sections -->
#### Intuition

In this problem we are tasked with reporting the following statistics for each month of 2020:

- The number of drivers currently with the Hopper company by the end of the month (`active_drivers`).
- The number of accepted rides in that month (`accepted_rides`).

Then, we will return the resulting DataFrame by `month` in ascending order, where `month` is the month's number (January is `1`, February is `2`, etc.)

We are given 3 DataFrames:
- `drivers` representing the drivers by their `driver_id` and their `join_date`
- `rides` representing the ride/rides (`ride_id`) taken by some user (`user_id`) at some `requested_at` time
- `accepted_rides` representing the ride/rides (`ride_id`) accepted by some driver (`driver_id`)

Here are the DataFrames with data given to us:

`drivers`:
| driver_id | join_date  |
|-----------|------------|
| 10        | 2019-12-10 |
| 8         | 2020-1-13  |
| 5         | 2020-2-16  |
| 7         | 2020-3-8   |
| 4         | 2020-5-17  |
| 1         | 2020-10-24 |
| 6         | 2021-1-5   |
<br>

`rides`:
| ride_id | user_id | requested_at |
|---------|---------|--------------|
| 6       | 75      | 2019-12-9    |
| 1       | 54      | 2020-2-9     |
| 10      | 63      | 2020-3-4     |
| 19      | 39      | 2020-4-6     |
| 3       | 41      | 2020-6-3     |
| 13      | 52      | 2020-6-22    |
| 7       | 69      | 2020-7-16    |
| 17      | 70      | 2020-8-25    |
| 20      | 81      | 2020-11-2    |
| 5       | 57      | 2020-11-9    |
| 2       | 42      | 2020-12-9    |
| 11      | 68      | 2021-1-11    |
| 15      | 32      | 2021-1-17    |
| 12      | 11      | 2021-1-19    |
| 14      | 18      | 2021-1-27    |
<br>

`accepted_rides`:
| ride_id | driver_id | ride_distance | ride_duration |
|---------|-----------|---------------|---------------|
| 10      | 10        | 63            | 38            |
| 13      | 10        | 73            | 96            |
| 7       | 8         | 100           | 28            |
| 17      | 7         | 119           | 68            |
| 20      | 1         | 121           | 92            |
| 5       | 7         | 42            | 101           |
| 2       | 4         | 6             | 38            |
| 11      | 8         | 37            | 43            |
| 15      | 8         | 108           | 82            |
| 12      | 8         | 38            | 34            |
| 14      | 1         | 90            | 74            |
<br>

<!-- write approach brief here -->
One approach to solving this problem is to create sub-DataFrames and join them based on certain conditions stated above to find the number of accepted rides and active drivers per month.

<!-- Describe your approach to solving the problem. -->
1. `months` sub-DataFrame - a DataFrame representing the months in number form

We will begin by creating a DataFrame representing the months in numerical format. This can be done by iterating and passing in values from 1 to 12 and setting "month" as the column name.

```python
months = pd.DataFrame([num + 1 for num in range(12)], columns=["month"])
```

Here is our `months` DataFrame:

| month |
|-------|
| 1     |
| 2     |
| 3     |
| 4     |
| 5     |
| 6     |
| 7     |
| 8     |
| 9     |
| 10    |
| 11    |
| 12    |
<br>

2. `driver` sub-DataFrame - Conditional filter `drivers` and `.apply()`

Next, we will conditionally filter the `drivers` DataFrame, only keeping entries where the `join_date` is after **January 1, 2021**, but before we filter, we will convert `join_date` in `drivers` to a datetime type with `pd.to_datetime`.

After filtering the column `join_date`, we will utilize the `.apply()` method to conditionally update the row based on the year of `join_date`. The conditions are as follows:
- 1 if `join_date`'s year does not equal to 2020
- `join_date`'s month otherwise (year is equal to 2020)

```python
# convert join_date to datetime
drivers['join_date'] = pd.to_datetime(drivers['join_date'])

# driver table - calculate active drivers that joined in 2020 or before
driver = drivers[drivers['join_date'] < '2021-01-01']

# utilize .apply() lambda function
# -> if year is 2020 -> return 1, else return month
driver['join_date'] = driver['join_date'].apply(lambda x: 1 if x.year != 2020 else x.month)
```

Here is our `driver` DataFrame:

|driver_id |join_date |
|----------|----------|
|10        |1         |
|8         |1         |
|5         |2         |
|7         |3         |
|4         |5         |
|1         |10        |
<br>


3. `driver_count` sub-DataFrame - represents the number of active drivers per month

After creating our `driver` sub-DataFrame, which gives a detailed view on the month (`join_date`) that each driver joined the company, we will create `driver_count`, a sub-DataFrame, which aggregates the number of drivers that joined by month (`join_date`).
To achieve this, we will utilize the `.groupby().size()` method, grouping by `join_date`. We will utilize the method `.reset_index()` with `name='{column name}'` to rename the sized column. In this case, we will use `name='active_drivers'.

```python
 # grab count of each active driver per month
driver_count = driver.groupby('join_date').size().reset_index(name='active_drivers')
```

Here is the `driver_count` DataFrame:

|join_date |active_drivers |
|----------|---------------|
|1         |2              |
|2         |1              |
|3         |1              |
|5         |1              |
|10        |1              |
<br>

4. `driver_months` sub-DataFrame - Left `.merge()` and `.cumsum()`

After creating our `driver_count` DataFrame, we will utilize the method `.merge()`, passing in `how='left'` as a parameter to left join `driver_count` with `months`, which will help create a DataFrame that populates the missing months. The columns to join on are `month` from `months` and `join_date` from `driver_count`.

Next, we will need to aggregate the number of `active_drivers` on a rolling basis by months from January to December. We can utilize `.cumsum()` on the `active_drivers` column which results in a cumulative sum of the `active_drivers` by each month.

```python
# join driver with months to create driver_count, aggregate over months
driver_months = months.merge(driver_count, how='left', left_on='month', right_on='join_date').fillna(0)

driver_months['active_drivers'] = driver_months['active_drivers'].cumsum()
```

Here is the `driver_months` DataFrame (after dropping `join_date` column):

|month  |active_drivers |
|-------|---------------|
|1      |2              |
|2      |3              |
|3      |4              |
|4      |4              |
|5      |5              |
|6      |5              |
|7      |5              |
|8      |5              |
|9      |5              |
|10     |6              |
|11     |6              |
|12     |6              |
<br>

5. `all_rides` sub-DataFrame - Detailed accepted rides in 2020 

We have now completed one condition for the solution. The next condition is finding the accepted rides in each month. To do that, we will create our second to last sub-DataFrame, `all_rides`, which is a DataFrame the gives us the count of accepted rides in 2020 by utilizing the method `.merge()`, where we left join the `rides` DataFrame onto the `accepted_rides` DataFrame on the column `ride_id`.

After merging the two DataFrames to create `all_rides`, we will convert the column `requested_at` to type datetime using `pd.to_datetime()`, passing in `all_rides['requested_at']` and conditionally index the column for dates in 2020. Next, we will conditionally filter `all_rides` given the `driver_id` exists as an active driver. We can utilize the method `.isin()`, passing in `driver['driver_id']` as an argument.

Following this, we can apply the same `.apply()` logic that we used for the sub-DataFrame `driver` to convert `requested_at` into its respective month format. The conditions are as follows:
- 1 if `requested_at`'s year does not equal to 2020
- `requested_at`'s month otherwise (year is equal to 2020)

```python
# join rides with accepted rides -> left join Rides
all_rides = accepted_rides.merge(rides, how='left', on='ride_id')

# convert requested_at to type datetime
all_rides['requested_at'] = pd.to_datetime(all_rides['requested_at'])

# filter for requested year in 2020 and driver_id is currently a driver
all_rides = all_rides[(all_rides['requested_at'] > '2019-12-31') & (all_rides['requested_at'] < '2021-01-01')]
all_rides = all_rides[all_rides['driver_id'].isin(driver['driver_id'])]

# convert requested_at back to string & convert to month only using apply()
all_rides['requested_at'] = all_rides['requested_at'].apply(lambda x: 1 if x.year != 2020 else x.month)
```

Here is the sub-DataFrame `all_rides`, giving us details on each accepted ride by active driver in 2020:

|ride_id |driver_id |ride_distance |ride_duration |user_id |requested_at |
|--------|----------|--------------|--------------|--------|-------------|
|10      |10        |63            |38            |63      |3            |
|13      |10        |73            |96            |52      |6            |
|7       |8         |100           |28            |69      |7            |
|17      |7         |119           |68            |70      |8            |
|20      |1         |121           |92            |81      |11           |
|5       |7         |42            |101           |57      |11           |
|2       |4         |6             |38            |42      |12           |
<br>

6. `accepted_rides` sub-DataFrame - aggregate count of accepted rides by month

With this data from `all_rides`, we can now create our last sub-DataFrame `accepted_rides`, which will show the count of accepted rides by month. We will utilize the method `.merge()`, passing in the parameter `how='left'` to left join `all_rides` onto `driver_months`. The left column to merge on will be `month` and right column to merge on will be `requested_at`.

After the merge, we will utilize the `.groupby().count()` method, grouping by `month` and indexing by `requested_at` to get the count of each accepted ride by `month`. We will also pass `.reset_index()` with the parameter `name='accepted_rides'` to rename the counted column. This completes the last condition needed for our solution.

```python
# create accepted_rides by left joining driver months & all rides
accepted_rides = driver_months.merge(all_rides, how='left', left_on='month', right_on='requested_at')

# gather count of accepted rides by month
accepted_rides = accepted_rides.groupby('month')['requested_at'].count().reset_index(name='accepted_rides')
```

Here is our final sub-DataFrame `accepted_rides`:

|month |accepted_rides |
|------|---------------|
|1     |0              |
|2     |0              |
|3     |1              |
|4     |0              |
|5     |0              |
|6     |1              |
|7     |1              |
|8     |1              |
|9     |0              |
|10    |0              |
|11    |2              |
|12    |1              |
<br>

7. `result` DataFrame - `.merge()` and cleaning data

With both conditions completed for our solution noted as `driver_months` and `accepted_rides` respectively, we will now utilize a `.merge()` to join `accepted_rides` onto `driver_months`, joining on the `month` column. 

Finally, we will filter on the columns needed, `month`, `active_drivers`, and `accepted_rides`, fill in the null values with 0 utilizing the method `.fillna(0)` and convert the data types to integer values utilizing the method `.astype(int)`.

```python
# merge result with accepted_rides - JOIN
result = driver_months.merge(accepted_rides, how='inner', on='month')

# grab necessary columns, clear NaNs, apply as int
result = result[['month', 'active_drivers', 'accepted_rides']].fillna(0).astype(int)
```

Here is the resulting DataFrame `result` and completed code:

|month |active_drivers |accepted_rides |
|------|---------------|---------------|
|1     |2              |0              |
|2     |3              |0              |
|3     |4              |1              |
|4     |4              |0              |
|5     |5              |0              |
|6     |5              |1              |
|7     |5              |1              |
|8     |5              |1              |
|9     |5              |0              |
|10    |6              |0              |
|11    |6              |2              |
|12    |6              |1              |
<br>

<!-- h4 for sections -->
#### Implementation

<iframe src="https://leetcode.com/playground/gc5CH6os/shared" frameBorder="0" width="100%" height="500" name="gc5CH6os"></iframe>

<br>
---


## Database

<!-- h3 for approaches -->
### Approach: LEFT JOIN with CTEs

<!-- h4 for sections -->
#### Intuition
We are tasked with reporting the following statistics for each month of 2020:

- The number of drivers currently with the Hopper company by the end of the month (`active_drivers`).
- The number of accepted rides in that month (`accepted_rides`).

Then, we will return the resulting table by `month` in ascending order, where `month` is the month number (`1` for January, `2` for February, etc.)

We are given 3 tables:
- `Drivers` representing the drivers by their `driver_id` and their `join_date`
- `Rides` representing the ride/rides (`ride_id`) taken by some user (`user_id`) at some `requested_at` time
- `AcceptedRides` representing the ride/rides (`ride_id`) accepted by some driver (`driver_id`)

---

<!-- Describe your approach to solving the problem. -->
1. `Months` table - `RECURSIVE UNION ALL`

We will start by creating a CTE, `Months`, representing our months. We will utilize `RECURSIVE` to create a recursive CTE that loops from 1 to 12, representing January to December, where each query result will append onto each other, creating the table below:

```sql
WITH RECURSIVE Months AS (
    SELECT 
        1 AS month
    UNION ALL
    SELECT 
        month + 1
    FROM 
        Months
    WHERE 
        month < 12
)
```

| month |
| ----- |
| 1     |
| 2     |
| 3     |
| 4     |
| 5     |
| 6     |
| 7     |
| 8     |
| 9     |
| 10    |
| 11    |
| 12    |
<br>

2. `Driver` table - `CASE WHEN` and `WHERE`

Next, we will gather the drivers that joined after 2020 using the `WHERE` clause, passing in the condition `YEAR(join_date) <= 2020`. This will convert evaluate the year of `join_date` and filter accordingly if it is **<= 2020**. We will also utilize the statement `CASE WHEN` to return the month that each driver joined. The month evaluated will be based on these two conditions:
- If the year in `join_date` is not equal to 2020, it will be assigned as 1.
- Otherwise, it will be assigned as the month in `join_date`.

```sql
Driver AS (
    SELECT 
        driver_id, 
	    (CASE WHEN YEAR(join_date) = 2019 THEN '1' ELSE MONTH(join_date) END) AS month
	FROM 
        Drivers 
	WHERE 
        YEAR(join_date) <= 2020
)
```

Here is the `Driver` table:
| driver_id | month |
| --------- | ----- |
| 10        | 1     |
| 8         | 1     |
| 5         | 2     |
| 7         | 3     |
| 4         | 5     |
| 1         | 10    |
<br>

3. `Ride` table - `INNER JOIN` and `WHERE` to find accepted rides in 2020

Our last CTE `Ride` represents the accepted rides in 2020 by `month` and `ride_id`. To find these rides, we will utilize an `INNER JOIN` on `AcceptedRides` and `Rides` on the column `ride_id`. This will create an intersection of matching rides between the two tables, where we are able to conditionally filter the rides in 2020 utilizing the `WHERE` clause, passing in `YEAR(requested_at) = 2020`.

```sql
Ride AS (
    SELECT 
        MONTH(requested_at) AS month, 
        a.ride_id
    FROM 
        AcceptedRides AS a 
    INNER JOIN 
        Rides r
    ON 
        r.ride_id = a.ride_id
    WHERE 
        YEAR(requested_at) = 2020
)
```

Here is our `Ride` table:

| month | ride_id |
| ----- | ------- |
| 3     | 10      |
| 6     | 13      |
| 7     | 7       |
| 8     | 17      |
| 11    | 20      |
| 11    | 5       |
| 12    | 2       |
<br>

4. Result - `LEFT JOIN`, `COUNT DISTINCT`

After creating our CTEs, we are able to utilize `LEFT JOIN` to join our data together. To start, we will `LEFT JOIN` `Driver` onto `Months` based on the following condition, `Driver.month <= Months.month`. This condition allows us to create a forward rolling sum in our `COUNT DISTINCT` clause when aggregating active drivers.

Our next `LEFT JOIN` will join `Ride` onto the previous table based on the following condition, `Months.month = Ride.month`, to obtain the count of rides by month.

We will also utilize the `GROUP BY` clause, grouping by `Months.month` to avoid aggregating to a single value given `COUNT DISTINCT`. Lastly, we will order our table by month utilizing `ORDER BY`, passing in `Months.month`.

```sql
SELECT
    m.month, 
    COUNT(DISTINCT d.driver_id) AS active_drivers,
    COUNT(DISTINCT r.ride_id) AS accepted_rides 
FROM
    Months AS m
LEFT JOIN
    Driver AS d
ON 
    d.month <= m.month
LEFT JOIN
    Ride AS r
ON 
    m.month = r.month
GROUP BY 
    m.month 
ORDER BY 
    m.month 
```

Here is our resulting output and completed code:
| month | active_drivers | accepted_rides |
| ----- | -------------- | -------------- |
| 1     | 2              | 0              |
| 2     | 3              | 0              |
| 3     | 4              | 1              |
| 4     | 4              | 0              |
| 5     | 5              | 0              |
| 6     | 5              | 1              |
| 7     | 5              | 1              |
| 8     | 5              | 1              |
| 9     | 5              | 0              |
| 10    | 6              | 0              |
| 11    | 6              | 2              |
| 12    | 6              | 1              |
<br>

<!-- h4 for sections -->
#### Implementation

```mysql []
WITH RECURSIVE Months AS (
    SELECT 
        1 AS month
    UNION ALL
    SELECT 
        month + 1
    FROM 
        Months
    WHERE 
        month < 12
), Driver AS (
    SELECT 
        driver_id, 
	    (CASE WHEN YEAR(join_date) = 2019 THEN '1' ELSE MONTH(join_date) END) AS month
	FROM 
        Drivers 
	WHERE 
        YEAR(join_date) <= 2020
), Ride AS (
    SELECT 
        MONTH(requested_at) AS month, 
        a.ride_id
    FROM 
        AcceptedRides AS a 
    INNER JOIN 
        Rides r
    ON 
        r.ride_id = a.ride_id
    WHERE 
        YEAR(requested_at) = 2020
)

SELECT
    m.month, 
    COUNT(DISTINCT d.driver_id) AS active_drivers,
    COUNT(DISTINCT r.ride_id) AS accepted_rides 
FROM
    Months AS m
LEFT JOIN
    Driver AS d
ON 
    d.month <= m.month
LEFT JOIN
    Ride AS r
ON 
    m.month = r.month
GROUP BY 
    m.month 
ORDER BY 
    m.month 
```

<!-- an empty line to separate approaches -->
<br>