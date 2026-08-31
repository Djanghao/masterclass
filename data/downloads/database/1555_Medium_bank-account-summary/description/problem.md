# [1555. Bank Account Summary](https://leetcode.com/problems/bank-account-summary/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Database | Medium | 144 | 27 |

**Tags:** [`database`](https://leetcode.com/tag/database)

**Companies:** `optum`

## Description

Table: `Users`

```

+--------------+---------+
| Column Name  | Type    |
+--------------+---------+
| user_id      | int     |
| user_name    | varchar |
| credit       | int     |
+--------------+---------+
user_id is the primary key (column with unique values) for this table.
Each row of this table contains the current credit information for each user.

```

 

Table: `Transactions`

```

+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| trans_id      | int     |
| paid_by       | int     |
| paid_to       | int     |
| amount        | int     |
| transacted_on | date    |
+---------------+---------+
trans_id is the primary key (column with unique values) for this table.
Each row of this table contains information about the transaction in the bank.
User with id (paid_by) transfer money to user with id (paid_to).

```

 

Leetcode Bank (LCB) helps its coders in making virtual payments. Our bank records all transactions in the table *Transaction*, we want to find out the current balance of all users and check whether they have breached their credit limit (If their current credit is less than `0`).

Write a solution to report.

	- `user_id`,

	- `user_name`,

	- `credit`, current balance after performing transactions, and

	- `credit_limit_breached`, check credit_limit (`"Yes"` or `"No"`)

Return the result table in **any** order.

The result format is in the following example.

 

**Example 1:**

```

Input: 
Users table:
+------------+--------------+-------------+
| user_id    | user_name    | credit      |
+------------+--------------+-------------+
| 1          | Moustafa     | 100         |
| 2          | Jonathan     | 200         |
| 3          | Winston      | 10000       |
| 4          | Luis         | 800         | 
+------------+--------------+-------------+
Transactions table:
+------------+------------+------------+----------+---------------+
| trans_id   | paid_by    | paid_to    | amount   | transacted_on |
+------------+------------+------------+----------+---------------+
| 1          | 1          | 3          | 400      | 2020-08-01    |
| 2          | 3          | 2          | 500      | 2020-08-02    |
| 3          | 2          | 1          | 200      | 2020-08-03    |
+------------+------------+------------+----------+---------------+
Output: 
+------------+------------+------------+-----------------------+
| user_id    | user_name  | credit     | credit_limit_breached |
+------------+------------+------------+-----------------------+
| 1          | Moustafa   | -100       | Yes                   | 
| 2          | Jonathan   | 500        | No                    |
| 3          | Winston    | 9900       | No                    |
| 4          | Luis       | 800        | No                    |
+------------+------------+------------+-----------------------+
Explanation: 
Moustafa paid $400 on &quot;2020-08-01&quot; and received $200 on &quot;2020-08-03&quot;, credit (100 -400 +200) = -$100
Jonathan received $500 on &quot;2020-08-02&quot; and paid $200 on &quot;2020-08-08&quot;, credit (200 +500 -200) = $500
Winston received $400 on &quot;2020-08-01&quot; and paid $500 on &quot;2020-08-03&quot;, credit (10000 +400 -500) = $9990
Luis did not received any transfer, credit = $800

```

---

**Links:** [Submissions](https://leetcode.com/problems/bank-account-summary/) | [Solutions](https://leetcode.com/problems/bank-account-summary/)
