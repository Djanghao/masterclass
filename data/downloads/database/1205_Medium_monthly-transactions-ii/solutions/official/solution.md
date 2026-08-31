# Official Solution

**Link:** [https://leetcode.com/problems/monthly-transactions-ii/solution/](https://leetcode.com/problems/monthly-transactions-ii/solution/)

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
### Approach: Outer Join

<!-- h4 for sections -->
#### Algorithm

<!-- Describe your approach to solving the problem. -->
The general idea of this approach is to get the chargebacks and approved transactions by month and country separately and then merge the records. 

We can start by combining the two DataFrames to get the amount for both types of transactions. Since chargebacks are part of all transactions, we leverage the left `merge` to keep all information from the DataFrame `transactions`.

```python
df = transactions.merge(chargebacks, left_on='id', right_on='trans_id', how='left')
```

In this new DataFrame, we convert the existing transaction dates from the two transaction date columns to the format of year and month accordingly. 


```python
df['month_chargeback'] = df['trans_date_y'].dt.strftime('%Y-%m')

df['month_transaction'] = df['trans_date_x'].dt.strftime('%Y-%m')
```

Below are part of the output from the above two steps.

| id  | country | state    | amount | trans_date_x | trans_id | trans_date_y | month_chargeback | month_transaction |
| --- | ------- | -------- | ------ | ------------ | -------- | ------------ | ---------------- | ----------------- |
| 101 | US      | approved | 1000   | 2019-05-18   | 101      | 2019-06-30   | 2019-06          | 2019-05           |
| 102 | US      | declined | 2000   | 2019-05-19   | 102      | 2019-05-29   | 2019-05          | 2019-05           |
| 103 | US      | approved | 3000   | 2019-06-10   | null     | NaT          | null             | 2019-06 

<br>

We can calculate the monthly totals for approved transactions first. Since we only need the totals of the transactions with a state equal to 'approved', we add the filter using `isin()` before calculating the aggregate values. Here we use the function `agg` to get two aggregated values and create the column names at the same time. We also rename the column for transaction month (`month_transaction`) to `month` for later use.

```python
df1 = df[df['state'] == 'approved'].groupby(
    ['month_transaction', 'country'], as_index=False
    ).agg(
        approved_count=('amount', 'count'),
        approved_amount=('amount', 'sum')
    ).rename(columns={'month_transaction': 'month'})
```

This step returns the monthly totals for the approved transactions.

| month   | country | approved_count | approved_amount |
| ------- | ------- | -------------- | --------------- |
| 2019-05 | US      | 1              | 1000            |
| 2019-06 | US      | 2              | 8000            |

Similarly, we can calculate the aggregated totals for chargebacks. In this step, we also rename the transaction month for chargebacks (`month_chargeback`) to `month` for later use. 

```python
df2 = df.groupby(
    ["month_chargeback", "country"], as_index=False
    ).agg(
        chargeback_count=('amount', 'count'), 
        chargeback_amount=('amount', 'sum')
    ).rename(columns={'month_chargeback': 'month'})
```

This step returns the monthly totals for all chargebacks.

| month   | country | chargeback_count | chargeback_amount |
| ------- | ------- | ---------------- | ----------------- |
| 2019-05 | US      | 1                | 2000              |
| 2019-06 | US      | 1                | 1000              |
| 2019-09 | US      | 1                | 5000              |

Lastly, we combine the two DataFrames using outer `merge` by the shared column `month` and `country`. Note that we need to display both sets of data in the same table, showing every row from both sets while retaining all valid records. This indicates that we need to use an outer join. After completing this step, there may be some rows with null values, and we will need to use the function `fillna()`  to convert all null values to 0.

```python
df3 = df1.merge(df2, how='outer', on=['month', 'country']).fillna(0)
```

<!-- h4 for sections -->
#### Implementation
​<iframe src="https://leetcode.com/playground/TVVZY728/shared" frameBorder="0" width="100%" height="500" name="TVVZY728"></iframe>
---


## Database

<!-- h3 for approaches -->
### Approach: Combining Two Tables Using UNION ALL
<!-- h4 for sections -->
#### Algorithm

<!-- Describe your approach to solving the problem. -->
The general idea of this approach is to get the chargebacks and approved transactions by month and country separately and then merge the records. 

We can start with getting the monthly chargebacks. Since the transaction `amount` is stored in the table `transactions` and the chargebacks are stored in the table `chargebacks`, we need to join these two tables on the shared column of transaction ids. To get the aggregated totals at the month and country level, we also need to convert the transaction date (`trans_date`) to the format of year and month using `DATE_FORMAT`. We can also create the two columns for approved transactions and set the values as 0 for later use. 


```mysql []
SELECT DISTINCT DATE_FORMAT(c.trans_date, '%Y-%m') AS month,
       t.country,
       0 AS approved_count,
       0 AS approved_amount,
       COUNT(DISTINCT c.trans_id) AS chargeback_count,
       SUM(amount) AS chargeback_amount
FROM Chargebacks c
JOIN Transactions t
ON c.trans_id = t.id
GROUP BY month, country
```
This step returns the monthly totals of chargebacks. 

| month   | country | approved_count | approved_amount | chargeback_count | chargeback_amount |
| ------- | ------- | -------------- | --------------- | ---------------- | ----------------- |
| 2019-05 | US      | 0              | 0               | 1                | 2000              |
| 2019-06 | US      | 0              | 0               | 1                | 1000              |
| 2019-09 | US      | 0              | 0               | 1                | 5000   

Next, we can get all the approved transactions. Similarly, we can create two columns for the chargebacks and set the value as 0 for later use. 

```mysql []
SELECT DATE_FORMAT(trans_date, '%Y-%m') AS month,
    country,
    COUNT(DISTINCT id) AS approved_count,
    SUM(amount) AS approved_amount,
    0 AS chargeback_count,
    0 AS chargeback_amount
FROM Transactions t
WHERE state = 'approved'
GROUP BY month, country
```
This step returns the monthly totals of approved transactions. 

| month   | country | approved_count | approved_amount | chargeback_count | chargeback_amount |
| ------- | ------- | -------------- | --------------- | ---------------- | ----------------- |
| 2019-05 | US      | 1              | 1000            | 0                | 0                 |
| 2019-06 | US      | 2              | 8000            | 0                | 0    

Now we can combine the previous output using the function `UNION ALL`. We can put all previous steps in either a CTE or a subquery. From the below output, we can see that there are duplicates in months. 

| month   | country | approved_count | approved_amount | chargeback_count | chargeback_amount |
| ------- | ------- | -------------- | --------------- | ---------------- | ----------------- |
| 2019-05 | US      | 0              | 0               | 1                | 2000              |
| 2019-06 | US      | 0              | 0               | 1                | 1000              |
| 2019-09 | US      | 0              | 0               | 1                | 5000              |
| 2019-05 | US      | 1              | 1000            | 0                | 0                 |
| 2019-06 | US      | 2              | 8000            | 0                | 0                 |

Therefore, the last step is to get the monthly totals again for all calculations at the month and country level in the main query. 

<!-- h4 for sections -->
#### Implementation

```mysql []
SELECT t0.month,
    t0.country,
    SUM(approved_count) AS approved_count,
    SUM(approved_amount) AS approved_amount,
    SUM(chargeback_count) AS chargeback_count,
    SUM(chargeback_amount) AS chargeback_amount
FROM (
    SELECT DATE_FORMAT(c.trans_date, '%Y-%m') AS month,
        t.country,
        0 AS approved_count,
        0 AS approved_amount,
        COUNT(DISTINCT c.trans_id) AS chargeback_count,
        SUM(amount) AS chargeback_amount
    FROM Chargebacks c
    JOIN Transactions t
    ON c.trans_id = t.id
    GROUP BY month, country
    UNION ALL
    SELECT DATE_FORMAT(trans_date, '%Y-%m') AS month,
       country,
       COUNT(DISTINCT id) AS approved_count,
       SUM(amount) AS approved_amount,
       0 AS chargeback_count,
       0 AS chargeback_amount
    FROM Transactions t
    WHERE state = 'approved'
    GROUP BY month, country) AS t0
GROUP BY month, country
```
​

----