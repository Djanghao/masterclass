# Official Solution

**Link:** [https://leetcode.com/problems/rising-temperature/solution/](https://leetcode.com/problems/rising-temperature/solution/)

---

[TOC]

# Solution
---

### Overview

**Problem Statement Reference**
> Write a solution to find all dates' Id with higher temperatures compared to its previous dates (yesterday). Return the result table in any order.

Let's further elaborate on the given example to deepen our understanding of the problem at hand.

If we conduct a time series analysis of the temperature data, we would notice distinct points where there is a rise in temperature compared to the previous day. This phenomenon is precisely what we are interested in identifying.

By analyzing the given data:

<table>
  <header>
    <tr>
      <th>id</th>
      <th>recordDate</th>
      <th>temperature</th>
    </tr>
  </header>
  <tbody>
    <tr>
      <td>1</td>
      <td>2015-01-01</td>
      <td>10</td>
    </tr>
    <tr>
      <td>2</td>
      <td>2015-01-02</td>
      <td>25</td>
    </tr>
    <tr>
      <td>3</td>
      <td>2015-01-03</td>
      <td>20</td>
    </tr>
    <tr>
      <td>4</td>
      <td>2015-01-04</td>
      <td>30</td>
    </tr>
  </tbody>
</table>

We can graphically represent the temperature readings across the consecutive dates. When we plot these points on a graph, with the `recordDate` on the X-axis and the `temperature` on the Y-axis, we observe a graphical representation of the temperature variations over the specified period.

![fig](../Figures/197/197-1.png)

From this graphical analysis, we notice two instances where there is a rise in the temperature compared to the day before:

1. **January 2, 2015 (id: 2)**: On this day, the temperature is recorded to be 25, which is higher than the 10 recorded on January 1st.
   
2. **January 4, 2015 (id: 4)**: Here, the temperature escalated to 30, surpassing the temperature of 20 noted on January 3rd.

Thus, based on our criteria of identifying days with a temperature rise compared to the immediate preceding day, we should return the ids for January 2nd and January 4th, which are 2 and 4 respectively.

---

## pandas

### Approach 1: Shifted Dataframe Merge on Record Date

#### Intuition

We are creating a new DataFrame that represents the data shifted by one day and merging it with the original DataFrame based on the `recordDate`. This way, for each record, we will have information on both the current day and the previous day in the same row, enabling easy comparison of temperatures across consecutive days.

Let's break this down step by step:

**Step 1: Converting `recordDate` to Datetime Type**

```python
# Ensure the 'recordDate' column is a datetime type
weather['recordDate'] = pd.to_datetime(weather['recordDate'])
```

- Before working with date data, it is good practice to ensure that the date column is of the datetime data type to facilitate date-based operations correctly.
  
**Step 2: Creating a Shifted DataFrame**

```python
# Create a copy of the weather DataFrame with a 1 day shift 
weather_shifted = weather.copy()
weather_shifted['recordDate'] = weather_shifted['recordDate'] + pd.to_timedelta(1, unit='D')
```

- A copy of the original DataFrame is created, where the `recordDate` for each entry is shifted forward by one day. This allows us to later merge this DataFrame with the original one to compare the temperatures of each day with the previous day.

**Step 3: Merging the Original and Shifted DataFrames**

```python
# Merging the DataFrames on the 'recordDate' column to find consecutive dates
merged_df = pd.merge(weather, weather_shifted, on='recordDate', suffixes=('_today', '_yesterday'))
```

- The original and shifted DataFrames are merged based on the `recordDate` column, which now contains consecutive dates. This merge operation forms pairs of consecutive days so that we can directly compare the temperatures of each day with the previous day.

**Step 4: Identifying Days with Higher Temperatures than the Previous Day**

```python
# Finding rows where the temperature is greater on the current day compared to the previous day
result = merged_df[merged_df['temperature_today'] > merged_df['temperature_yesterday']][['id_today']].rename(columns={'id_today': 'Id'})
```

- Within the merged DataFrame, we apply a condition to retain only those rows where the temperature of the current day (`temperature_today`) is greater than that of the previous day (`temperature_yesterday`). This effectively identifies all the days where the temperature was higher than the previous day.
- We select only the ID column corresponding to the days that satisfy this condition, renaming it to `Id` to meet the output specification.

**Step 5: Returning the Result**

```python
return result
```

- The final step is to return the DataFrame containing the IDs of the days where the temperature was higher than on the previous day.


#### Implementation

<iframe src="https://leetcode.com/playground/H8hou3Zo/shared" frameBorder="0" width="100%" height="361" name="H8hou3Zo"></iframe>


### Approach 2: Shift Function with Precise Date Match

#### Intuition

In this approach, we sort the DataFrame by `recordDate` and then use the shift function to create new columns that hold the data for the previous day. After that, we filter the DataFrame to only include the rows where the temperature is greater than that of the previous day and the dates are precisely one day apart.

Let's break this down step by step:

**Step 1: Converting `recordDate` to Datetime Type**

```python
weather['recordDate'] = pd.to_datetime(weather['recordDate'])
```
- Before performing operations based on dates, we first ensure that the `recordDate` column is of datetime type. This allows us to easily perform date-specific operations later in the function.

**Step 2: Sorting the DataFrame**

```python
weather.sort_values('recordDate', inplace=True)
```
- We sort the data based on the `recordDate` to maintain a chronological order. This step is crucial because the next steps involve operations that are dependent on the order of the dates.

**Step 3: Creating Columns for Previous Day's Data**

```python
weather['PreviousTemperature'] = weather['temperature'].shift(1)
weather['PreviousRecordDate'] = weather['recordDate'].shift(1)
```
- We create two new columns in the `weather` DataFrame:
  - `PreviousTemperature`: This column is constructed by shifting the `temperature` column down by one row using `shift(1)`. This means that the value in each row of `PreviousTemperature` is the temperature value from the immediately preceding row in the DataFrame, not necessarily from the immediately preceding day in terms of time.
  - `PreviousRecordDate`: Similarly, this column is formed by shifting the `recordDate` column down by one row. Hence, each value in `PreviousRecordDate` corresponds to the date from the immediately preceding row, not necessarily the day immediately before the current `recordDate`.

By having these new columns, we align each row with the temperature and record date of its preceding row in the DataFrame, allowing for comparisons between a day's temperature and that of the previous row. It’s crucial to note that these “previous” values come from the DataFrame's order and do not always represent the chronological day before, as there might be gaps in the dates within the data.

**Step 4: Filtering for Days with Higher Temperature than the Previous Day**

```python
result = weather[
    (weather['temperature'] > weather['PreviousTemperature']) & 
    (weather['recordDate'] == weather['PreviousRecordDate'] + pd.Timedelta(days=1))
][['id']].rename(columns={'id': 'Id'})
```

- We are filtering the DataFrame for rows where the temperature is higher than the previous day's temperature: `(weather['temperature'] > weather['PreviousTemperature'])`.
- We also ensure that the record date is exactly one day more than the previous record date: `(weather['recordDate'] == weather['PreviousRecordDate'] + pd.Timedelta(days=1))`. This is done using `pd.Timedelta(days=1)` to add a day to the previous record date and checking if it equals the current record date.

**Step 5: Returning the Result**

```python
return result
```
- Finally, we return the filtered DataFrame which contains only the `Id` column that satisfies both conditions specified in step 4. This DataFrame represents all the dates where the temperature was higher than the temperature of the previous day.

#### Implementation

<iframe src="https://leetcode.com/playground/gkesEsMj/shared" frameBorder="0" width="100%" height="429" name="gkesEsMj"></iframe>


---

## Database

### Approach 1: Using `JOIN` and `DATEDIFF()` 

#### Intuition

By doing a self-join on the `Weather` table, we create a Cartesian product of the table with itself, creating pairs of days. We then use the `DATEDIFF` function to restrict these pairs to only include consecutive days. Lastly, we filter these pairs of consecutive days further to only include pairs where the temperature is higher on the second day. The resulting ids represent the days where the temperature was higher than the previous day.

Let's break this down step by step:

**Step 1: Defining the Main Query Structure**

```sql
SELECT 
    w1.id
FROM 
    Weather w1
JOIN 
    Weather w2
```

Here, we are setting up a query to retrieve the `id` from the `Weather` table aliased as `w1`. To find the records where the temperature is greater than the previous day, we are performing a self-join on the `Weather` table, creating a second alias `w2`. This allows us to compare each record in `w1` with each record in `w2`.

**Step 2: Join Condition**

```sql
ON 
    DATEDIFF(w1.recordDate, w2.recordDate) = 1
```

In the join condition, we are using the `DATEDIFF` function to find pairs of records where the `recordDate` differs by exactly one day. This condition ensures that we are comparing each day's temperature with the temperature of the previous day.

**Step 3: Filter Records with Higher Temperature**

```sql
WHERE 
    w1.temperature > w2.temperature;
```

After finding pairs of days that are consecutive, we apply a filter in the `WHERE` clause to only get the records where the temperature on a day (represented by a record in `w1`) is greater than the temperature on the previous day (represented by a record in `w2`). This is the main condition to fulfill the requirement of finding the ids where the temperature is higher than the previous day.


#### Implementation



```mysql []
SELECT 
    w1.id
FROM 
    Weather w1
JOIN 
    Weather w2
ON 
    DATEDIFF(w1.recordDate, w2.recordDate) = 1
WHERE 
    w1.temperature > w2.temperature;

```

### Approach 2: Using `LAG()` Function

#### Intuition

Let's break this down step by step:

**Step 1: Creating a Common Table Expression (CTE) with Lag Function**

```sql
WITH PreviousWeatherData AS
(
    SELECT 
        id,
        recordDate,
        temperature, 
        LAG(temperature, 1) OVER (ORDER BY recordDate) AS PreviousTemperature,
        LAG(recordDate, 1) OVER (ORDER BY recordDate) AS PreviousRecordDate
    FROM 
        Weather
)
```

In this step, we create a Common Table Expression (CTE) named `PreviousWeatherData` using a `WITH` clause. Inside this CTE, we are selecting all the rows from the "Weather" table along with two additional columns:

1. `PreviousTemperature`: The temperature from the previous day, which is obtained using the `LAG()` function with an offset of 1, ordered by `recordDate`.
2. `PreviousRecordDate`: The record date of the previous day, similarly obtained using the `LAG()` function with an offset of 1, ordered by `recordDate`.

This setup helps us associate each record with the respective details from the previous day in the same row.

**Step 2: Selecting IDs with Conditions on Temperature and Date**

```sql
SELECT 
    id 
FROM 
    PreviousWeatherData
WHERE 
    temperature > PreviousTemperature
AND 
    recordDate = DATE_ADD(PreviousRecordDate, INTERVAL 1 DAY);
```

In this step, we execute a query on the `PreviousWeatherData` CTE with two conditions in the WHERE clause to filter the required IDs:

1. `temperature > PreviousTemperature`: This condition filters for the days where the temperature was higher than the previous day's temperature.
2. `recordDate = DATE_ADD(PreviousRecordDate, INTERVAL 1 DAY)`: This condition ensures that we are comparing consecutive days. It uses the `DATE_ADD()` function to add an interval of 1 day to the `PreviousRecordDate` and checks if it equals the current `recordDate`.

By combining these two conditions with an `AND` clause, we ensure that we only select the IDs where both conditions are met, which are the days when the temperature is higher than the day before.


#### Implementation


```mysql []
WITH PreviousWeatherData AS
(
    SELECT 
        id,
        recordDate,
        temperature, 
        LAG(temperature, 1) OVER (ORDER BY recordDate) AS PreviousTemperature,
        LAG(recordDate, 1) OVER (ORDER BY recordDate) AS PreviousRecordDate
    FROM 
        Weather
)
SELECT 
    id 
FROM 
    PreviousWeatherData
WHERE 
    temperature > PreviousTemperature
AND 
    recordDate = DATE_ADD(PreviousRecordDate, INTERVAL 1 DAY);

```

### Approach 3: Using Subquery

#### Intuition

Let's break this down step by step:

**Step 1: Inner Subquery to Get the Previous Day’s Temperature**

```sql
        SELECT 
            w2.temperature
        FROM 
            Weather w2
        WHERE 
            w2.recordDate = DATE_SUB(w1.recordDate, INTERVAL 1 DAY)
```

The inner query is responsible for retrieving the temperature of the day before the date currently under consideration in the outer query. 

It utilizes the `DATE_SUB` function to find the date one day before the `recordDate` in the outer query (`w1.recordDate`) and then fetches the temperature recorded on that previous date from the same Weather table (alias `w2`).

**Step 2: Outer Query to Find Days with Higher Temperature**

```sql
SELECT 
    w1.id
FROM 
    Weather w1
WHERE 
    w1.temperature > (
        -- ... (inner subquery)
    );
```

The outer query iterates over each row (each day) in the Weather table (alias `w1`) and checks if the temperature on that day is greater than the temperature on the previous day, the latter being obtained from the inner subquery.

**Step 3: Comparing Temperatures**

```sql
    w1.temperature > (
        -- ... (inner subquery)
    )
```

Here, we have the crucial comparison that serves our goal. For each day in the outer query, it checks whether the temperature is greater than the temperature fetched from the inner subquery (which is the temperature of the previous day).

**Step 4: Selecting the ID**

```sql
SELECT 
    w1.id
```

If the condition in the `WHERE` clause is satisfied (today’s temperature is greater than yesterday’s), we select the ID of the current day (from the outer query’s perspective). This ID indicates a day where the temperature was higher than the temperature on the previous day.

#### Implementation



```mysql []
SELECT 
    w1.id
FROM 
    Weather w1
WHERE 
    w1.temperature > (
        SELECT 
            w2.temperature
        FROM 
            Weather w2
        WHERE 
            w2.recordDate = DATE_SUB(w1.recordDate, INTERVAL 1 DAY)
    );

```

### Approach 4: Using Cartesian Product and `WHERE` Clause

#### Intuition

Let's break this down step by step:

**Step 1: Cartesian Product**
```sql
FROM 
    Weather w1, Weather w2
```

In this step, we are performing a Cartesian product (or cross join) of the `Weather` table with itself. This means we create a new table where each row from `w1` (first instance of the Weather table) is paired with every row from `w2` (second instance of the Weather table), resulting in a table with n² rows (where n is the number of rows in the Weather table).

**Step 2: Filtering Based on Date Difference**
```sql
WHERE 
    DATEDIFF(w2.recordDate, w1.recordDate) = 1 
```

Next, we use the `DATEDIFF` function to find pairs of rows where the difference between the 'recordDate' in w2 and w1 is exactly 1 day. This effectively filters down to pairs of rows representing consecutive days.

**Step 3: Filtering Based on Temperature Difference**
```sql
AND 
    w2.temperature > w1.temperature;
```

In this step, we are filtering the pairs further to retain only those where the temperature on the second day (`w2.temperature`) is greater than the temperature on the first day (`w1.temperature`). This finds the days where the temperature is rising compared to the previous day.

**Step 4: Selecting the Result**
```sql
SELECT 
    w2.id
```

Finally, from all the pairs that satisfy the conditions set in the WHERE clause, we select the ID of the day from the w2 table (i.e., the ID of the day with the higher temperature).


#### Implementation



```mysql []
SELECT 
    w2.id
FROM 
    Weather w1, Weather w2
WHERE 
    DATEDIFF(w2.recordDate, w1.recordDate) = 1 
AND 
    w2.temperature > w1.temperature;

```