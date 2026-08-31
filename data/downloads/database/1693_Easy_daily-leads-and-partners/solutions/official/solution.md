# Official Solution

**Link:** [https://leetcode.com/problems/daily-leads-and-partners/solution/](https://leetcode.com/problems/daily-leads-and-partners/solution/)

---

<!-- Don't delete this -->
[TOC]

# Solution

---

## pandas

### Approach: Group by and Aggregation

#### Algorithm

For this problem, we want to find the count of unique **lead_id**s and unique **product_id**s for each **date_id** and **make_name** in the `daily_sales` DataFrame. Let us see the original DataFrame `daily_sales`:

| date_id   | make_name | lead_id | partner_id |
|-----------|-----------|---------|------------|
| 2020-12-8 | toyota    | 0       | 1          |
| 2020-12-8 | toyota    | 1       | 0          |
| 2020-12-8 | toyota    | 1       | 2          |
| 2020-12-7 | toyota    | 0       | 2          |
| 2020-12-7 | toyota    | 0       | 1          |
| 2020-12-8 | honda     | 1       | 2          |
| 2020-12-8 | honda     | 2       | 1          |
| 2020-12-7 | honda     | 0       | 1          |
| 2020-12-7 | honda     | 1       | 2          |
| 2020-12-7 | honda     | 2       | 1          |

<br>

Let's begin by employing the `.groupby().agg()` method using **date_id**, **make_name** as the grouping criterion. The DataFrame will be split into groups, where each group represents a unique combination of **date_id** and **make_name**. After grouping, the `.agg()` method will be applied to the grouped data and the **lead_id** and **partner_id** columns will be aggregated using the method `nunique` to compute the unique elements within each group. We will also utilize the method `.reset_index()` to rename the aggregated columns.

```python
# Let us utilize the .groupby() method using 'date_id' and 'make_name'
# as the grouping criterion and aggregate 'lead_id' and 'partner_id'
# with methods 'nunique', which returns the unique elements of a group
df = daily_sales.groupby(['date_id', 'make_name']).agg({
    'lead_id': pd.Series.nunique,
    'partner_id': pd.Series.nunique
}).reset_index()
```
Here is our newly created `df` DataFrame:

| date_id   | make_name | lead_id | partner_id |
|-----------|-----------|---------|------------|
| 2020-12-07 | honda    | 3       | 2          |
| 2020-12-07 | toyota   | 1       | 2          |
| 2020-12-08 | honda    | 2       | 2          |
| 2020-12-08 | toyota   | 2       | 3          |

<br>

After this `.groupby().agg()` method, the resulting `df` DataFrame's columns need to be renamed accordingly: **lead_id** to **unique_leads** and **partner_id** to **unique_partners**.

```python
# Rename resulting DataFrame and rename columns
df = df.rename(columns={
    'lead_id': 'unique_leads',
    'partner_id': 'unique_partners'
})
```

Here is the resulting `df` DataFrame after renaming the columns:

| date_id    | make_name | unique_leads | unique_partners |
| ---------- | --------- | ------------ | --------------- |
| 2020-12-07 | honda     | 3            | 2               |
| 2020-12-07 | toyota    | 1            | 2               |
| 2020-12-08 | honda     | 2            | 2               |
| 2020-12-08 | toyota    | 2            | 3               |

<br>

#### Implementation

<iframe src="https://leetcode.com/playground/juu44JqN/shared" frameBorder="0" width="100%" height="395" name="juu44JqN"></iframe>

<br>

## Database

### Approach: Group by and Aggregation

#### Algorithm

In SQL, we will utilize the `GROUP BY` aggregation clause with **date_id** and **make_name** to group together each similar date_id and make_name row. 

To calculate the unique **lead_id**s and **partner_id**s, we will employ the use of `COUNT(DISTINCT {column_name})` to count the unique occurrences in each specified column. In this case, the column name passed in will be **lead_id** and **partner_id**.

#### Implementation

```sql
SELECT
    date_id,
    make_name,
    COUNT(DISTINCT lead_id) AS unique_leads,
    COUNT(DISTINCT partner_id) AS unique_partners
FROM
    DailySales
GROUP BY date_id, make_name;
```