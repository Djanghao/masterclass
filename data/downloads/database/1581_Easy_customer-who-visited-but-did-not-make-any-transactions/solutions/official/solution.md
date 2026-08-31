# Official Solution

**Link:** [https://leetcode.com/problems/customer-who-visited-but-did-not-make-any-transactions/solution/](https://leetcode.com/problems/customer-who-visited-but-did-not-make-any-transactions/solution/)

---

[TOC]

# Solution

---
## pandas

To identify customers who visited but did not make any transactions, we need to remove the records of customers who made transactions from the list of all customers who visited. By doing so, we convert this problem to a typical "NOT IN" problem. There are two main ways to solve "NOT IN" problems: 1) using the function similar to `NOT IN/EXISTS` directly or 2)`LEFT OUTER JOIN/merge` where the right table is set as `NULL`. We will introduce both methods in pandas and Mysql. 

### Approach 1: Removing Records Using `~` and `isin()` 

#### Algorithm

<!-- Describe your approach to solving the problem. -->
For this approach, we leverage the functions `~` and `isin()` to exclude unwanted records from the list. Since we want to remove the customers who made transactions from all customers who visited, we first identify those customers from the DataFrame `visits` to see who are also in the DataFrame `transactions` using `isin()`. We then remove these visits from all visits using `~`. 

```python
visits_no_trans = visits[~visits.visit_id.isin(transactions.visit_id)]
```

This step creates a new DataFrame that contains the visits that the customers made no transactions.  

| visit_id | customer_id |
| -------- | ----------- |
| 4        | 30          |
| 6        | 96          |
| 7        | 54          |
| 8        | 54          |

The next step is to count how many of these types of visits were made by each customer. To do this, we have the results grouped by the `customer_id` and `count` the `visit_id`. To get the final output, we also need to rename the column that stores the calculated result. 

```python
df = visits_no_trans.groupby('customer_id', as_index=False)['visit_id'].count()

return df.rename(columns={'visit_id': 'count_no_trans'})
```

<!-- h4 for sections -->
#### Implementation
​<iframe src="https://leetcode.com/playground/TT4k7pM2/shared" frameBorder="0" width="100%" height="208" name="TT4k7pM2"></iframe>
<!-- an empty line to separate approaches -->

### Approach 2: Removing Records Using `left merge` and `isna()`

#### Algorithm

For this approach, we leverage the `left merge` and `isna()` to achieve the same goal: removing the visits with transactions from all visits. To do this, we first `left merge` the DataFrame `visits` that contain all `visit_id`s to the DataFrame `transactions` that contain only the `visit_id`s that have transactions. We want to make sure the records that need to be removed are placed in the right DataFrame. 

```python
visits_no_trans = visits.merge(transactions, on='visit_id', how='left')
```

We now have a DataFrame with all `visit_id`s and their corresponding transactions. The visits that have no transactions associated return `null` values for the column `transaction_id`. 

| visit_id | customer_id | transaction_id | amount |
| -------- | ----------- | -------------- | ------ |
| 1        | 23          | 12             | 910    |
| 2        | 9           | 13             | 970    |
| 4        | 30          | null           | null   |
| 5        | 54          | 2              | 310    |
| 5        | 54          | 3              | 300    |
| 5        | 54          | 9              | 200    |
| 6        | 96          | null           | null   |
| 7        | 54          | null           | null   |
| 8        | 54          | null           | null   |

Now we only need to remove those visits that have `null` transactions. We can use the function `isna()` to achieve this. 

```python
visits_no_trans = visits_no_trans[visits_no_trans.transaction_id.isna()]
```

The DataFrame `visits_no_trans` now retains only the visits that have no transactions. 

| visit_id | customer_id | transaction_id | amount |
| -------- | ----------- | -------------- | ------ |
| 4        | 30          | null           | null   |
| 6        | 96          | null           | null   |
| 7        | 54          | null           | null   |
| 8        | 54          | null           | null   |

Next, we want to count how many of these types of visits were made by each customer. To do this, we have the results grouped by the `customer_id` and `count` the `visit_id`. To get the final output, we also need to rename the column that stores the calculated result.

```python
df = visits_no_trans.groupby('customer_id', as_index=False)['visit_id'].count()

return df.rename(columns={'visit_id': 'count_no_trans'})
```

<!-- h4 for sections -->
#### Implementation
​<iframe src="https://leetcode.com/playground/JkfyEoKr/shared" frameBorder="0" width="100%" height="242" name="JkfyEoKr"></iframe>
<!-- an empty line to separate approaches -->
----
​
## Database
<!-- h3 for approaches -->
### Approach 1: Removing Records Using `NOT IN/EXISTS`
<!-- h4 for sections -->
#### Algorithm
<!-- Describe your approach to solving the problem. -->
For this approach, we remove the visits that have transactions directly using `NOT IN`. Let's start by identifying these visits. For this problem, they are all the `visit_id` from the table `Transactions`. 

```sql
SELECT visit_id FROM Transactions
```

Next, in the main query, we can `COUNT` the `visit_id` at the `customer_id` level from table `Visits` excluding the visits we identified in the subquery. The aggregate value is grouped at the `customer_id` level as we are looking for the total result for each customer. This column is also renamed as requested by the final output.

<!-- h4 for sections -->
#### Implementation

```mysql []
SELECT 
  customer_id, 
  COUNT(visit_id) AS count_no_trans 
FROM 
  Visits 
WHERE 
  visit_id NOT IN (
    SELECT 
      visit_id 
    FROM 
      Transactions
  ) 
GROUP BY 
  customer_id
```
<!-- an empty line to separate approaches -->

### Approach 2: Removing Records Using `LEFT JOIN` and `IS NULL`
<!-- h4 for sections -->
#### Algorithm
<!-- Describe your approach to solving the problem. -->
For this approach, we want to exclude visits that involved transactions from the complete set of visits by using `LEFT JOIN`. To do this, we have all visits as the left table (table `Visits`) to join the visits from table `Transactions` on the shared column `visit_id`. To remove the records from the right table, we set its key as `NULL`, so the remains in the `Visits` table are the records of visits where no transactions occurred.

To get the final output, we want to `COUNT` the number of such visits associated with each `customer_id`, and have the aggregated value grouped at the `customer_id` level. Lastly, we update the column as requested in the original problem statement. 

<!-- h4 for sections -->
#### Implementation

```mysql []
SELECT 
  customer_id, 
  COUNT(*) AS count_no_trans 
FROM 
  Visits AS v 
  LEFT JOIN Transactions AS t ON v.visit_id = t.visit_id 
WHERE 
  t.visit_id IS NULL 
GROUP BY 
  customer_id
```
----