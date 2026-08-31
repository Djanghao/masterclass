# Official Solution

**Link:** [https://leetcode.com/problems/investments-in-2016/solution/](https://leetcode.com/problems/investments-in-2016/solution/)

---

​
[TOC]
​
# Solution

---

## pandas

### Approach 1: Calculating Aggregate Values Using transform()

#### Algorithm

For this approach, we calculate the times that value `tiv_2015` and location (pairs of `lat` and `lon`) of each `pid` show up in all records using the function [`transform()`](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.transform.html) and later use these values as filters to identify the qualified `pid`s. This is very similar to using the window function with MySql (Approach 2 under section database). Here, we call `transform()` on Groupby Objects and store the results in two new columns using the function `assign()`.

```python
df = insurance.assign(
   tiv_2015_cnt = insurance.groupby('tiv_2015')['pid'].transform('count'),
   loc_cnt = insurance.groupby(['lat', 'lon'])['pid'].transform('count')
   )
```

Below is the output from this step. We now have the numbers that how many `pid`s share the same values of `tiv_2015` and the location for each `pid`.

| pid | tiv_2015 | tiv_2016 | lat | lon | tiv_2015_cnt | loc_cnt |
| --- | -------- | -------- | --- | --- | ------------ | ------- |
| 1   | 10       | 5        | 10  | 10  | 3            | 1       |
| 2   | 20       | 20       | 20  | 20  | 1            | 2       |
| 3   | 10       | 30       | 20  | 20  | 3            | 2       |
| 4   | 10       | 40       | 40  | 40  | 3            | 1       |

Next, we select the qualified `pid`s based on the values from these two columns. Since we need the `pid`s that have the same value of `tiv_2015` as other `pid`s, we can select the records that have the `tiv_2015_cnt` larger than 1. Similarly, we can identify the `pid`s that are not located in the same city by selecting the records with `loc_cnt` equal to 1.

```python
df = df[(df['tiv_2015_cnt'] > 1) & (df['loc_cnt'] == 1)]
```

We now have the qualified records from all records.

| pid | tiv_2015 | tiv_2016 | lat | lon | tiv_2015_cnt | loc_cnt |
| --- | -------- | -------- | --- | --- | ------------ | ------- |
| 1   | 10       | 5        | 10  | 10  | 3            | 1       |
| 4   | 10       | 40       | 40  | 40  | 3            | 1       |

Lastly, we return the sum of the column `tiv_2016` from these qualified records and round the final result to two decimal places. We can use the function `agg()` to also rename the result in the same step.

```python
return df.agg(tiv_2016 = ('tiv_2016', 'sum')).round(2)
```

#### Implementation
​<iframe src="https://leetcode.com/playground/WEz6kwd6/shared" frameBorder="0" width="100%" height="259" name="WEz6kwd6"></iframe>
<!-- an empty line to separate approaches -->
### Approach 2: Identifying Duplicates Using duplicated()

#### Algorithm

Since we want to find the policyholders (`pid`) that have the same values of `tiv_2015` as one or more other policyholders (`tiv_2015` have duplicates) and are not located in the same city as any other policyholders (location is distinct), we can leverage the function [`duplicated()`](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.duplicated.html) to achieve this.

To identify the values of `tiv_2015` that have duplicates, we pass the parameters `subset=['tiv_2015']` and `keep=False` to keep all records that have duplicate `tiv_2015` values. To remove the rows with duplicate locations (pairs of `lat` and `lon`), we create a similar filter but put the `~` (not in) at the beginning of the filter.

```python
df = insurance[insurance.duplicated(subset=['tiv_2015'], keep=False) & ~insurance.duplicated(subset=['lat', 'lon'], keep=False)]
```

After applying the conditions, we now have the qualified records.

| pid | tiv_2015 | tiv_2016 | lat | lon |
| --- | -------- | -------- | --- | --- |
| 1   | 10       | 5        | 10  | 10  |
| 4   | 10       | 40       | 40  | 40  |

Lastly, we want to return the total of the column `tiv_2016` from these records, round the result to two decimal places, and rename the column in the same step using function `agg()`.

```python
return df.agg(tiv_2016 = ('tiv_2016', 'sum')).round(2)
```

#### Implementation
​<iframe src="https://leetcode.com/playground/6S5eXJL7/shared" frameBorder="0" width="100%" height="174" name="6S5eXJL7"></iframe>

----

## Database

### Approach 1: Creating Filters in Subqueries

#### Algorithm

In this approach, we identify the qualified values (e.g. all unique locations) in each subquery and then use the subqueries as the filters to identify qualified `pid`s. This approach translates the requirement directly to query without any functions or calculations.

We can start by identifying `tiv_2015` that have duplicates in all records: since we need to find the policyholders that share the same `tiv_2015` with one or more other policyholders, we can group the records by `tiv_2015` and the `tiv_2015` that are associated with more than one policyholder (`pid`).

```sql
SELECT tiv_2015
FROM Insurance
GROUP BY tiv_2015
HAVING COUNT(DISTINCT pid) > 1
```

Below is the `tiv_2015` that is associated with more than one policyholder.

| tiv_2015 |
| -------- |
| 10       |

Next, we can identify the unique location (pair of `lat` and `lon`) from all locations. Since `lat` and `lon` are stored in two separate columns, we can combine these two columns using the function `CONCAT()` for easier calculation.

```sql
SELECT CONCAT(lat, lon) lat_lon
FROM Insurance
GROUP BY CONCAT(lat, lon)
HAVING COUNT(DISTINCT pid) = 1
```

The below locations have only one policyholder.

| lat_lon |
| ------- |
| 1010    |
| 4040    |

With the qualified values from both conditions, we can now select the policyholders (`pid`) that possess both values from these two subqueries in the main query. This approach uses `JOIN` to find the matching records, but you can also use other functions such as `IN` or `NOT IN` instead. To get the final output, we also want to calculate the sum of `tiv_2016` from the qualified records, round the results to two decimal places, and rename the column as requested in the main query.

#### Implementation

```mysql []
SELECT ROUND(SUM(tiv_2016), 2) AS tiv_2016
FROM Insurance i
JOIN
   (
   SELECT tiv_2015
   FROM Insurance
   GROUP BY tiv_2015
   HAVING COUNT(DISTINCT pid) > 1
   )t0
ON i.tiv_2015 = t0.tiv_2015
JOIN
   (
   SELECT CONCAT(lat, lon) lat_lon
   FROM Insurance
   GROUP BY CONCAT(lat, lon)
   HAVING COUNT(DISTINCT pid) = 1
   )t1
ON CONCAT(i.lat, i.lon) = t1.lat_lon
```

### Approach 2: Creating Filters Using Window Function

#### Algorithm

This approach calculates, for each policyholder (`pid`), how many times their values of `tiv_2015` and location show up in all records. This approach is very similar to the first approach under section pandas.

To calculate the aggregate counts for each record, we can leverage the window function, pass the level that we need to calculate by and save the results in separate columns. These two columns will be used later as filters to decide whether we want to keep the record.

```sql
SELECT *,
   COUNT(*)OVER(PARTITION BY tiv_2015) AS tiv_2015_cnt,
   COUNT(*)OVER(PARTITION BY lat, lon) AS loc_cnt
FROM Insurance
```

Below is the output from this step. Each `pid` now has the number of how many times their value of `tiv_2015` and location are shared by `pid`s in the table.

| pid | tiv_2015 | tiv_2016 | lat | lon | tiv_2015_cnt | loc_cnt |
| --- | -------- | -------- | --- | --- | ------------ | ------- |
| 1   | 10       | 5        | 10  | 10  | 3            | 1       |
| 3   | 10       | 30       | 20  | 20  | 3            | 2       |
| 2   | 20       | 20       | 20  | 20  | 1            | 2       |
| 4   | 10       | 40       | 40  | 40  | 3            | 1       |

Based on these two columns, we can apply the filter to keep the `pid`s that have the same `tiv_2015` and are not located in the same city with another `pid`. We can put the previous step in either a subquery or a CTE. In the main query, we can also calculate the sum of `tiv_2016`, round the result to two decimal places, and rename the column as requested.

#### Implementation

```mysql []
SELECT ROUND(SUM(tiv_2016), 2) AS tiv_2016
FROM (
   SELECT *,
       COUNT(*)OVER(PARTITION BY tiv_2015) AS tiv_2015_cnt,
       COUNT(*)OVER(PARTITION BY lat, lon) AS loc_cnt
   FROM Insurance
   )t0
WHERE tiv_2015_cnt > 1
AND loc_cnt = 1
```
----