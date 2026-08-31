# Use row_number to calculate "base_date" and then group by and count (step by step, detailed)

**Author:** cpcs
**Votes:** 10
**Link:** [https://leetcode.com/problems/customers-with-maximum-number-of-transactions-on-consecutive-days/solutions/3688643/](https://leetcode.com/problems/customers-with-maximum-number-of-transactions-on-consecutive-days/solutions/3688643/)

---

I think it's possible that a customer has several transcations on the same date.

Step by step:
1. Only keep distinct customer_id and transcation date.

```
SELECT DISTINCT customer_id, transaction_date FROM Transactions) temp)
```

| customer_id | transaction_date |
| ----------- | ---------------- |
| 101         | 2023-05-01       |
| 101         | 2023-05-02       |
| 101         | 2023-05-03       |
| 102         | 2023-05-01       |
| 102         | 2023-05-03       |
| 102         | 2023-05-04       |
| 105         | 2023-05-01       |
| 105         | 2023-05-02       |
| 105         | 2023-05-03       |

2. Give each transcation a row number, it's partitioned by customer_id and ordered by transction_date.

```
WITH rn_info AS (
SELECT ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY transaction_date) AS rn, customer_id, transaction_date 
FROM (SELECT DISTINCT customer_id, transaction_date FROM Transactions) temp)
```

| rn | customer_id | transaction_date |
| -- | ----------- | ---------------- |
| 1  | 101         | 2023-05-01       |
| 2  | 101         | 2023-05-02       |
| 3  | 101         | 2023-05-03       |
| 1  | 102         | 2023-05-01       |
| 2  | 102         | 2023-05-03       |
| 3  | 102         | 2023-05-04       |
| 1  | 105         | 2023-05-01       |
| 2  | 105         | 2023-05-02       |

3. The row_number is useful since for the same customer, transcations in the same group of consecutive transcations should have the same (transcation_date - rn) value (since both rn and transcation_date increase by 1 per day). So let's save the (transcation_date - rn) value as base_date.

```
customer_with_base_date AS (
SELECT customer_id, DATE_SUB(transaction_date, INTERVAL rn DAY) AS base_date FROM rn_info)
```

| customer_id | base_date  |
| ----------- | ---------- |
| 101         | 2023-04-30 |
| 101         | 2023-04-30 |
| 101         | 2023-04-30 |
| 102         | 2023-04-30 |
| 102         | 2023-05-01 |
| 102         | 2023-05-01 |
| 105         | 2023-04-30 |
| 105         | 2023-04-30 |
| 105         | 2023-04-30 |

4. Group the data by customer_id and base_date and count the number of transcations in each group, so we get the number of consecutive transcations per customer.

```
customer_with_count AS (
SELECT customer_id, COUNT(*) AS c FROM customer_with_base_date GROUP BY customer_id, base_date)

```

| customer_id | c |
| ----------- | - |
| 101         | 3 |
| 102         | 1 |
| 102         | 2 |
| 105         | 3 |


5. Finally select the customer with the maximum count. I think a customer may have several groups of consecutive transcations with the same largest value. However, we CANNOT use a distinct here.....

```
SELECT customer_id FROM customer_with_count WHERE c IN (SELECT MAX(c) FROM customer_with_count)
```

# Code
```
# Write your MySQL query statement below
WITH rn_info AS (
SELECT ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY transaction_date) AS rn, customer_id, transaction_date 
FROM (SELECT DISTINCT customer_id, transaction_date FROM Transactions) temp),

customer_with_base_date AS (
SELECT customer_id, DATE_SUB(transaction_date, INTERVAL rn DAY) AS base_date FROM rn_info),

customer_with_count AS (
SELECT customer_id, COUNT(*) AS c FROM customer_with_base_date GROUP BY customer_id, base_date)

SELECT customer_id FROM customer_with_count WHERE c IN (SELECT MAX(c) FROM customer_with_count)
```