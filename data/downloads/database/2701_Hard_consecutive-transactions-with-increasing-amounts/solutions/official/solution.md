# Official Solution

**Link:** [https://leetcode.com/problems/consecutive-transactions-with-increasing-amounts/solution/](https://leetcode.com/problems/consecutive-transactions-with-increasing-amounts/solution/)

---

[TOC]

# Solution

---

## pandas

### Approach: Consecutive Increase Grouping Method

The high-level approach of the Python/Pandas solution for identifying customers with at least three consecutive days of increasing transaction amounts involves a series of strategic data transformations and groupings. First, the transaction data is sorted by customer and date, and a unique row index is established. Two group identifiers are then created: one (`day_group`) to identify unique sequences of consecutive transaction days, and another (`amount_group`) to track streaks of increasing transaction amounts. These identifiers are key to grouping transactions in a way that isolates consecutive days with increasing amounts. The data is then aggregated to count the transactions in each group and determine their start and end dates. Finally, the groups with less than three transactions are filtered out, focusing on the required sequences of at least three consecutive days, and the relevant data is extracted for the final output. This method effectively segments and analyzes the transaction data to reveal the desired customer behavior patterns.

**Visualization of Approach:**

![fig](../Figures/2701/2701-1.png)

#### Intuition

Let's review the intuition behind each step given the following input DataFrame:

Transactions DataFrame (`transactions`):

<table>
    <tr>
        <th>transaction_id</th>
        <th>customer_id</th>
        <th>transaction_date</th>
        <th>amount</th>
    </tr>
    <tr>
        <td>1</td>
        <td>101</td>
        <td>2023-05-01</td>
        <td>100</td>
    </tr>
    <tr>
        <td>2</td>
        <td>101</td>
        <td>2023-05-02</td>
        <td>150</td>
    </tr>
    <tr>
        <td>3</td>
        <td>101</td>
        <td>2023-05-03</td>
        <td>200</td>
    </tr>
    <tr>
        <td>4</td>
        <td>102</td>
        <td>2023-05-01</td>
        <td>50</td>
    </tr>
    <tr>
        <td>5</td>
        <td>102</td>
        <td>2023-05-03</td>
        <td>100</td>
    </tr>
    <tr>
        <td>6</td>
        <td>102</td>
        <td>2023-05-04</td>
        <td>200</td>
    </tr>
    <tr>
        <td>7</td>
        <td>105</td>
        <td>2023-05-01</td>
        <td>100</td>
    </tr>
    <tr>
        <td>8</td>
        <td>105</td>
        <td>2023-05-02</td>
        <td>150</td>
    </tr>
    <tr>
        <td>9</td>
        <td>105</td>
        <td>2023-05-03</td>
        <td>200</td>
    </tr>
    <tr>
        <td>10</td>
        <td>105</td>
        <td>2023-05-04</td>
        <td>300</td>
    </tr>
    <tr>
        <td>11</td>
        <td>105</td>
        <td>2023-05-12</td>
        <td>250</td>
    </tr>
    <tr>
        <td>12</td>
        <td>105</td>
        <td>2023-05-13</td>
        <td>260</td>
    </tr>
    <tr>
        <td>13</td>
        <td>105</td>
        <td>2023-05-14</td>
        <td>270</td>
    </tr>
</table>
<br>

1. **Sorting and Index Resetting**

- To ensure that transactions are analyzed in the correct sequence, they need to be sorted by `customer_id` and `transaction_date`.
- Resetting the index is essential for creating a unique identifier for each transaction, which is later used for grouping.

```python
transactions_sorted = (
    transactions.sort_values(["customer_id", "transaction_date"])
    .reset_index()
)
```

`transactions_sorted`: 
<table>
    <tr>
        <th>index</th>
        <th>transaction_id</th>
        <th>customer_id</th>
        <th>transaction_date</th>
        <th>amount</th>
    </tr>
    <tr>
        <td>0</td>
        <td>1</td>
        <td>101</td>
        <td>2023-05-01</td>
        <td>100</td>
    </tr>
    <tr>
        <td>1</td>
        <td>2</td>
        <td>101</td>
        <td>2023-05-02</td>
        <td>150</td>
    </tr>
    <tr>
        <td>2</td>
        <td>3</td>
        <td>101</td>
        <td>2023-05-03</td>
        <td>200</td>
    </tr>
    <tr>
        <td>3</td>
        <td>4</td>
        <td>102</td>
        <td>2023-05-01</td>
        <td>50</td>
    </tr>
    <tr>
        <td>4</td>
        <td>5</td>
        <td>102</td>
        <td>2023-05-03</td>
        <td>100</td>
    </tr>
    <tr>
        <td>5</td>
        <td>6</td>
        <td>102</td>
        <td>2023-05-04</td>
        <td>200</td>
    </tr>
    <tr>
        <td>6</td>
        <td>7</td>
        <td>105</td>
        <td>2023-05-01</td>
        <td>100</td>
    </tr>
    <tr>
        <td>7</td>
        <td>8</td>
        <td>105</td>
        <td>2023-05-02</td>
        <td>150</td>
    </tr>
    <tr>
        <td>8</td>
        <td>9</td>
        <td>105</td>
        <td>2023-05-03</td>
        <td>200</td>
    </tr>
    <tr>
        <td>9</td>
        <td>10</td>
        <td>105</td>
        <td>2023-05-04</td>
        <td>300</td>
    </tr>
    <tr>
        <td>10</td>
        <td>11</td>
        <td>105</td>
        <td>2023-05-12</td>
        <td>250</td>
    </tr>
    <tr>
        <td>11</td>
        <td>12</td>
        <td>105</td>
        <td>2023-05-13</td>
        <td>260</td>
    </tr>
    <tr>
        <td>12</td>
        <td>13</td>
        <td>105</td>
        <td>2023-05-14</td>
        <td>270</td>
    </tr>
</table>
<br>


2. **Creating Day Group Identifier (`day_group`)**

- The objective is to group transactions into sets of consecutive days for each customer. However, just checking for consecutive days isn't enough; we need a way to identify each unique sequence of consecutive days.
- Here, we adopt a relatively common approach. Notice that, the difference between the index of two consecutive rows is always 1, and the number of days between two consecutive dates differs by exactly 1 as well. So, if there is a series of consecutive dates, then the difference in their days minus the index results in the **same** value. We can use this value to group them.
- By subtracting the transaction date from a fixed date and then subtracting the row index, we create a unique identifier that changes with each break in the sequence of consecutive days.

```python
transactions_sorted["day_group"] = (
    transactions_sorted["transaction_date"] - pd.to_datetime("2023-01-01")
).dt.days - transactions_sorted.index
```

`transactions_sorted`:
<table>
    <tr>
        <th>index</th>
        <th>transaction_id</th>
        <th>customer_id</th>
        <th>transaction_date</th>
        <th>amount</th>
        <th>day_group</th>
    </tr>
    <tr>
        <td>0</td>
        <td>1</td>
        <td>101</td>
        <td>2023-05-01</td>
        <td>100</td>
        <td>120</td>
    </tr>
    <tr>
        <td>1</td>
        <td>2</td>
        <td>101</td>
        <td>2023-05-02</td>
        <td>150</td>
        <td>120</td>
    </tr>
    <tr>
        <td>2</td>
        <td>3</td>
        <td>101</td>
        <td>2023-05-03</td>
        <td>200</td>
        <td>120</td>
    </tr>
    <tr>
        <td>3</td>
        <td>4</td>
        <td>102</td>
        <td>2023-05-01</td>
        <td>50</td>
        <td>117</td>
    </tr>
    <tr>
        <td>4</td>
        <td>5</td>
        <td>102</td>
        <td>2023-05-03</td>
        <td>100</td>
        <td>118</td>
    </tr>
    <tr>
        <td>5</td>
        <td>6</td>
        <td>102</td>
        <td>2023-05-04</td>
        <td>200</td>
        <td>118</td>
    </tr>
    <tr>
        <td>6</td>
        <td>7</td>
        <td>105</td>
        <td>2023-05-01</td>
        <td>100</td>
        <td>114</td>
    </tr>
    <tr>
        <td>7</td>
        <td>8</td>
        <td>105</td>
        <td>2023-05-02</td>
        <td>150</td>
        <td>114</td>
    </tr>
    <tr>
        <td>8</td>
        <td>9</td>
        <td>105</td>
        <td>2023-05-03</td>
        <td>200</td>
        <td>114</td>
    </tr>
    <tr>
        <td>9</td>
        <td>10</td>
        <td>105</td>
        <td>2023-05-04</td>
        <td>300</td>
        <td>114</td>
    </tr>
    <tr>
        <td>10</td>
        <td>11</td>
        <td>105</td>
        <td>2023-05-12</td>
        <td>250</td>
        <td>121</td>
    </tr>
    <tr>
        <td>11</td>
        <td>12</td>
        <td>105</td>
        <td>2023-05-13</td>
        <td>260</td>
        <td>121</td>
    </tr>
    <tr>
        <td>12</td>
        <td>13</td>
        <td>105</td>
        <td>2023-05-14</td>
        <td>270</td>
        <td>121</td>
    </tr>
</table>
<br>

3. **Creating Amount Group Identifier (`amount_group`)**

- To identify sequences of increasing transaction amounts, we need to create a group identifier that changes every time a transaction amount does not increase compared to the previous transaction.
- Using cumulative sum on a boolean series where `True` is marked for non-increasing amounts, we can ensure that each group represents a streak of increasing amounts.

```python
transactions_sorted["amount_group"] = (
    (transactions_sorted.amount <= transactions_sorted.amount.shift(1))
    .cumsum()
    .fillna(0)
)
```

`transactions_sorted`:
<table>
    <tr>
        <th>index</th>
        <th>transaction_id</th>
        <th>customer_id</th>
        <th>transaction_date</th>
        <th>amount</th>
        <th>day_group</th>
        <th>amount_group</th>
    </tr>
    <tr>
        <td>0</td>
        <td>1</td>
        <td>101</td>
        <td>2023-05-01</td>
        <td>100</td>
        <td>120</td>
        <td>0</td>
    </tr>
    <tr>
        <td>1</td>
        <td>2</td>
        <td>101</td>
        <td>2023-05-02</td>
        <td>150</td>
        <td>120</td>
        <td>0</td>
    </tr>
    <tr>
        <td>2</td>
        <td>3</td>
        <td>101</td>
        <td>2023-05-03</td>
        <td>200</td>
        <td>120</td>
        <td>0</td>
    </tr>
    <tr>
        <td>3</td>
        <td>4</td>
        <td>102</td>
        <td>2023-05-01</td>
        <td>50</td>
        <td>117</td>
        <td>1</td>
    </tr>
    <tr>
        <td>4</td>
        <td>5</td>
        <td>102</td>
        <td>2023-05-03</td>
        <td>100</td>
        <td>118</td>
        <td>1</td>
    </tr>
    <tr>
        <td>5</td>
        <td>6</td>
        <td>102</td>
        <td>2023-05-04</td>
        <td>200</td>
        <td>118</td>
        <td>1</td>
    </tr>
    <tr>
        <td>6</td>
        <td>7</td>
        <td>105</td>
        <td>2023-05-01</td>
        <td>100</td>
        <td>114</td>
        <td>2</td>
    </tr>
    <tr>
        <td>7</td>
        <td>8</td>
        <td>105</td>
        <td>2023-05-02</td>
        <td>150</td>
        <td>114</td>
        <td>2</td>
    </tr>
    <tr>
        <td>8</td>
        <td>9</td>
        <td>105</td>
        <td>2023-05-03</td>
        <td>200</td>
        <td>114</td>
        <td>2</td>
    </tr>
    <tr>
        <td>9</td>
        <td>10</td>
        <td>105</td>
        <td>2023-05-04</td>
        <td>300</td>
        <td>114</td>
        <td>2</td>
    </tr>
    <tr>
        <td>10</td>
        <td>11</td>
        <td>105</td>
        <td>2023-05-12</td>
        <td>250</td>
        <td>121</td>
        <td>3</td>
    </tr>
    <tr>
        <td>11</td>
        <td>12</td>
        <td>105</td>
        <td>2023-05-13</td>
        <td>260</td>
        <td>121</td>
        <td>3</td>
    </tr>
    <tr>
        <td>12</td>
        <td>13</td>
        <td>105</td>
        <td>2023-05-14</td>
        <td>270</td>
        <td>121</td>
        <td>3</td>
    </tr>
</table>
<br>


4. **Grouping and Aggregation**

- Now that we have identified groups based on consecutive days and increasing amounts, we need to aggregate these groups to count the transactions and find the start and end dates. Since we are dealing with consecutive dates, the minimum value of the dates corresponds to the start date `consecutive_start`, the maximum value corresponds to the end date `consecutive_end`, and the count corresponds to the number of dates `count`.
- This step is crucial for filtering out groups that don't meet the criteria of at least three consecutive transactions with increasing amounts.

```python
grouped_transactions = (
    transactions_sorted.groupby(["customer_id", "day_group", "amount_group"])
    .agg(
        count=("index", "count"),
        consecutive_start=("transaction_date", "min"),
        consecutive_end=("transaction_date", "max"),
    )
    .reset_index()
)
```

`grouped_transactions`:
<table>
    <tr>
        <th>customer_id</th>
        <th>day_group</th>
        <th>amount_group</th>
        <th>count</th>
        <th>consecutive_start</th>
        <th>consecutive_end</th>
    </tr>
    <tr>
        <td>101</td>
        <td>120</td>
        <td>0</td>
        <td>3</td>
        <td>2023-05-01</td>
        <td>2023-05-03</td>
    </tr>
    <tr>
        <td>102</td>
        <td>117</td>
        <td>1</td>
        <td>1</td>
        <td>2023-05-01</td>
        <td>2023-05-01</td>
    </tr>
    <tr>
        <td>102</td>
        <td>118</td>
        <td>1</td>
        <td>2</td>
        <td>2023-05-03</td>
        <td>2023-05-04</td>
    </tr>
    <tr>
        <td>105</td>
        <td>114</td>
        <td>2</td>
        <td>4</td>
        <td>2023-05-01</td>
        <td>2023-05-04</td>
    </tr>
    <tr>
        <td>105</td>
        <td>121</td>
        <td>3</td>
        <td>3</td>
        <td>2023-05-12</td>
        <td>2023-05-14</td>
    </tr>
</table>
<br>


5. **Filtering and Final Output**

- The final step is to filter out groups with less than three transactions since we are interested in streaks of at least three consecutive days.
- We select only the desired columns given in the problem statement: `customer_id`, `consecutive_start`, and `consecutive_end`.

```python
result = grouped_transactions.query("count > 2")[
    ["customer_id", "consecutive_start", "consecutive_end"]
]
```

`result`:
<table>
    <tr>
        <th>customer_id</th>
        <th>consecutive_start</th>
        <th>consecutive_end</th>
    </tr>
    <tr>
        <td>101</td>
        <td>2023-05-01</td>
        <td>2023-05-03</td>
    </tr>
    <tr>
        <td>105</td>
        <td>2023-05-01</td>
        <td>2023-05-04</td>
    </tr>
    <tr>
        <td>105</td>
        <td>2023-05-12</td>
        <td>2023-05-14</td>
    </tr>
</table>
<br>


#### Implementation

<iframe src="https://leetcode.com/playground/YQR5kxWi/shared" frameBorder="0" width="100%" height="500" name="YQR5kxWi"></iframe>

---

## Database

### Approach: Sequential Grouping and Aggregation Method

The SQL approach for finding customers with at least three consecutive days of increasing transaction amounts is a multi-step process that incrementally filters and groups the data to yield the desired results.

#### Intuition

Here's a breakdown of the logic:

1. **Identify Pairs of Increasing Transactions on Consecutive Days**
- The primary goal here is to find all pairs of transactions for each customer where the transaction amount increases and the transactions are exactly one day apart.
- By joining the `Transactions` table with itself on `customer_id` and applying conditions for consecutive dates and increasing amounts, this step effectively filters out all transactions that don't meet the criteria of day-to-day growth. This is a foundational step to ensure that subsequent analyses are built on valid consecutive, increasing transactions.

2. **Assign Row Numbers to Each Transaction for Each Customer**
- To prepare for grouping transactions by consecutive days, each transaction is assigned a row number within its customer group, ordered by the transaction date.
- By doing this, the solution can later leverage these row numbers to distinguish between different streaks of consecutive transactions. This is important because a customer might have multiple such streaks, and they need to be identified separately.

3. **Group Transactions Based on Consecutive Days**
- This step creates a unique group identifier for each sequence of consecutive transactions.
- Here, we adopt a relatively common approach. Notice that, the difference between the row number of two consecutive rows is always 1, and the number of days between two consecutive dates differs by exactly 1 as well. So, if there is a series of consecutive dates, then the difference in their days minus the row numbers results in the **same** value. 
- The group identifier is formed by subtracting the row number from the transaction date. The idea is that for a continuous streak of days, this calculation will yield the same result, thus grouping those transactions together. This approach uses date arithmetic to segment the transactions into consecutive streaks.

4. **Count the Number of Transactions in Each Group and Identify the Start Date**
- The grouped transactions are then aggregated to count the number of transactions in each group and to find the start date of these transactions.
- By grouping on `customer_id` and the previously created `group_identifier`, and then taking the minimum date and counting the transactions, this step effectively identifies the start of each streak and how long it lasts. This aggregation is key to isolating those streaks that meet the criterion of at least three days.

5. **Select Customer ID, Start Date, and Calculate End Date of Consecutive Periods**
- The final step of the query selects the relevant data and calculates the end date for each streak of transactions.
- This step filters out those groups that have less than three transactions (since we need at least three consecutive days) and calculates the end date by adding the count of transactions to the start date. We select only the desired columns given in the problem statement: `customer_id`, `consecutive_start`, and `consecutive_end`.


#### Implementation


```mysql []
-- CTE to identify pairs of transactions with increasing amounts on consecutive days
WITH ConsecutiveIncreasingTransactions AS (
  SELECT 
    a.customer_id, 
    a.transaction_date 
  FROM 
    Transactions a 
    JOIN Transactions b ON a.customer_id = b.customer_id 
    AND b.amount > a.amount 
    AND DATEDIFF(
      b.transaction_date, a.transaction_date
    ) = 1
), 
-- CTE to assign row numbers to each transaction for each customer
RankedTransactions AS (
  SELECT 
    customer_id, 
    transaction_date, 
    ROW_NUMBER() OVER (
      PARTITION BY customer_id 
      ORDER BY 
        transaction_date
    ) AS row_num 
  FROM 
    ConsecutiveIncreasingTransactions
), 
-- CTE to group transactions based on consecutive days
GroupedTransactions AS (
  SELECT 
    customer_id, 
    transaction_date, 
    DATE_SUB(
      transaction_date, INTERVAL row_num DAY
    ) AS group_identifier 
  FROM 
    RankedTransactions
), 
-- CTE to count the number of transactions in each group and identify the start date
TransactionGroups AS (
  SELECT 
    customer_id, 
    MIN(transaction_date) AS consecutive_start, 
    COUNT(*) AS transaction_count 
  FROM 
    GroupedTransactions 
  GROUP BY 
    customer_id, 
    group_identifier
) -- Final query to select customer_id, start date, and calculate end date of consecutive periods
SELECT 
  customer_id, 
  consecutive_start, 
  DATE_ADD(
    consecutive_start, INTERVAL transaction_count DAY
  ) AS consecutive_end 
FROM 
  TransactionGroups 
WHERE 
  transaction_count > 1 
ORDER BY 
  customer_id;

```