# [1205. Monthly Transactions II](https://leetcode.com/problems/monthly-transactions-ii/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Database | Medium | 162 | 554 |

**Tags:** [`database`](https://leetcode.com/tag/database)

**Companies:** `wish`

## Description

Table: `Transactions`

```

+----------------+---------+
| Column Name    | Type    |
+----------------+---------+
| id             | int     |
| country        | varchar |
| state          | enum    |
| amount         | int     |
| trans_date     | date    |
+----------------+---------+
id is the column of unique values of this table.
The table has information about incoming transactions.
The state column is an ENUM (category) of type [&quot;approved&quot;, &quot;declined&quot;].

```

Table: `Chargebacks`

```

+----------------+---------+
| Column Name    | Type    |
+----------------+---------+
| trans_id       | int     |
| trans_date     | date    |
+----------------+---------+
Chargebacks contains basic information regarding incoming chargebacks from some transactions placed in Transactions table.
trans_id is a foreign key (reference column) to the id column of Transactions table.
Each chargeback corresponds to a transaction made previously even if they were not approved.
```

 

Write a solution to find for each month and country: the number of approved transactions and their total amount, the number of chargebacks, and their total amount.

**Note**: In your solution, given the month and country, ignore rows with all zeros.

Return the result table in **any order**.

The result format is in the following example.

 

**Example 1:**

```

Input: 
Transactions table:
+-----+---------+----------+--------+------------+
| id  | country | state    | amount | trans_date |
+-----+---------+----------+--------+------------+
| 101 | US      | approved | 1000   | 2019-05-18 |
| 102 | US      | declined | 2000   | 2019-05-19 |
| 103 | US      | approved | 3000   | 2019-06-10 |
| 104 | US      | declined | 4000   | 2019-06-13 |
| 105 | US      | approved | 5000   | 2019-06-15 |
+-----+---------+----------+--------+------------+
Chargebacks table:
+----------+------------+
| trans_id | trans_date |
+----------+------------+
| 102      | 2019-05-29 |
| 101      | 2019-06-30 |
| 105      | 2019-09-18 |
+----------+------------+
Output: 
+---------+---------+----------------+-----------------+------------------+-------------------+
| month   | country | approved_count | approved_amount | chargeback_count | chargeback_amount |
+---------+---------+----------------+-----------------+------------------+-------------------+
| 2019-05 | US      | 1              | 1000            | 1                | 2000              |
| 2019-06 | US      | 2              | 8000            | 1                | 1000              |
| 2019-09 | US      | 0              | 0               | 1                | 5000              |
+---------+---------+----------------+-----------------+------------------+-------------------+

```

---

**Links:** [Submissions](https://leetcode.com/problems/monthly-transactions-ii/) | [Solutions](https://leetcode.com/problems/monthly-transactions-ii/)
