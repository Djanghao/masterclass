# BEST EXPLAINATION!! --> Step By Step Guide!

**Author:** CarterMacLennan
**Votes:** 41
**Link:** [https://leetcode.com/problems/consecutive-transactions-with-increasing-amounts/solutions/3576917/](https://leetcode.com/problems/consecutive-transactions-with-increasing-amounts/solutions/3576917/)

---

# Welcome to my Solution Blog!
![Copy of Copy of Copy of 617 ALG (4).png](./images/0.png)

## Dataset 1
**Description:** 
To minimize our dataset let's filter for Customers + Dates with at least 1 valid consecutive day!

**Query:**
```
SELECT 
    a.customer_id, 
    a.transaction_date 
FROM 
    Transactions a, 
    Transactions b 
WHERE 
    a.customer_id = b.customer_id 
    AND b.amount > a.amount 
    AND DATEDIFF(b.transaction_date, a.transaction_date) = 1
```

**Output:**
```
+-------------+------------------+
| customer_id | transaction_date |
+-------------+------------------+
| 101	      | 2023-05-01       |
| 101	      | 2023-05-02       |
| 102	      | 2023-05-03       |
| 105	      | 2023-05-01       |
| 105	      | 2023-05-02       |
| 105	      | 2023-05-03       |
| 105	      | 2023-05-12       |
| 105	      | 2023-05-13       |
+-------------+------------------+
```

## Dataset 2
**Description:** 
Now, let's expand those customers to get Row Numbers of all their transactions! 

- *Hint: In the next step you'll see why we do this...*

**Query:**
```
SELECT 
  customer_id, 
  transaction_date,
  ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY transaction_date) AS rn
FROM dataset_1
```

**Output:**
```
+-------------+------------------+----+
| customer_id | transaction_date | rn |
+-------------+------------------+----+
| 101	      | 2023-05-01       |  1 |
| 101	      |	2023-05-02       |	2 |
| 102	      |	2023-05-03       |	1 |
| 105	      |	2023-05-01       |	1 |
| 105	      |	2023-05-02       |	2 |
| 105	      |	2023-05-03       |	3 |
| 105	      |	2023-05-12       |	4 |
| 105	      |	2023-05-13       |	5 |
+-------------+------------------+----+
```

## Dataset 3
**Description:** 
With this enriched dataset we can now collect those rows into groups based on their row numbers.

**This is the confusing part! But it's a very popular pattern!**

Essentially the dates can have gaps between them, so by subtracting the current date by the row number we can get a unique date for each group!!!

**Query:**
```
SELECT 
    customer_id, 
    transaction_date, 
    DATE_SUB(transaction_date, INTERVAL rn DAY) AS date_group
FROM dataset_2
```

**Output:**
```
+-------------+------------------+------------+
| customer_id |	transaction_date | date_group |
+-------------+------------------+------------+
| 101	      |	2023-05-01       | 2023-04-30 |
| 101	      |	2023-05-02       | 2023-04-30 | 
| 102	      |	2023-05-03       | 2023-05-02 |
| 105	      |	2023-05-01       | 2023-04-30 |
| 105	      |	2023-05-02       | 2023-04-30 |
| 105	      |	2023-05-03       | 2023-04-30 |
| 105	      |	2023-05-12       | 2023-05-08 |
| 105	      |	2023-05-13       | 2023-05-08 |
+-------------+------------------+------------+
```
## Dataset 4
**Description:** 
Now we simply count the # rows in that group to determine their size. 

**Note:** We can't use `MAX(transaction_date)` here as the last date in every group is not included due to the `DATEDIFF(b.transaction_date, a.transaction_date) = 1` line in `dataset1`.

**Query:**
```sql
SELECT 
    customer_id, 
    MIN(transaction_date) AS consecutive_start, 
    COUNT(*) AS cnt
FROM dataset_3 
GROUP BY customer_id, date_group
```

**Output:**
```
+-------------+-------------------+-----+
| customer_id |	consecutive_start | cnt |
+-------------+-------------------+-----+
| 101         |	2023-05-01        |	2   |
| 102         |	2023-05-03        |	1   |
| 105         |	2023-05-01        |	3   |
| 105         |	2023-05-12        |	2   |
+-------------+-------------------+-----+
```

## Dataset 5
**Description:** 
Congrats! You made it! Now all we have to do is prettify the output!

**Query:**
```sql
SELECT 
    customer_id, 
    consecutive_start,
    DATE_ADD(consecutive_start, INTERVAL cnt DAY) AS consecutive_end 
FROM dataset_4 
WHERE cnt > 1 
ORDER BY customer_id
```

**Output:**
```
+-------------+-------------------+-----------------+
| customer_id |	consecutive_start |	consecutive_end |
+-------------+-------------------+-----------------+
| 101	      | 2023-05-01        |	2023-05-03      |
| 105	      |	2023-05-01        |	2023-05-04      |
| 105	      |	2023-05-12        |	2023-05-14      |
+-------------+-------------------+-----------------+
```

# MySQL Code
```
# 1. To minimize our dataset filter for Customers + Dates with at least 1 valid consecutive day!
WITH dataset_1 AS (
    SELECT 
        a.customer_id, 
        a.transaction_date 
    FROM 
        Transactions a, 
        Transactions b 
    WHERE 
        a.customer_id = b.customer_id 
        AND b.amount > a.amount 
        AND DATEDIFF(b.transaction_date, a.transaction_date) = 1
),

# 2. Expand those customers to get Row Numbers of all their transactions!
dataset_2 AS (
    SELECT 
        customer_id, 
        transaction_date,
        ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY transaction_date) AS rn
    FROM dataset_1
),

# 3. Collect those rows into groups based on their row numbers
dataset_3 AS (
    SELECT 
        customer_id, 
        transaction_date, 
        DATE_SUB(transaction_date, INTERVAL rn DAY) AS date_group
    FROM dataset_2
),

# 4. Count the # rows in that group to determine size
dataset_4 AS (
    SELECT 
        customer_id, 
        MIN(transaction_date) AS consecutive_start, 
        COUNT(*) AS cnt
    FROM dataset_3 
    GROUP BY customer_id, date_group
)

# 5. Prettify the output!
SELECT 
    customer_id, 
    consecutive_start,
    DATE_ADD(consecutive_start, INTERVAL cnt DAY) AS consecutive_end 
FROM dataset_4 
WHERE cnt > 1 
ORDER BY customer_id 
```