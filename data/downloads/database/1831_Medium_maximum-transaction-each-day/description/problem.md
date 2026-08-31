# [1831. Maximum Transaction Each Day](https://leetcode.com/problems/maximum-transaction-each-day/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Database | Medium | 94 | 3 |

**Tags:** [`database`](https://leetcode.com/tag/database)


## Description

Table: `Transactions`

```

+----------------+----------+
| Column Name    | Type     |
+----------------+----------+
| transaction_id | int      |
| day            | datetime |
| amount         | int      |
+----------------+----------+
transaction_id is the column with unique values for this table.
Each row contains information about one transaction.

```

 

Write a solution to report the IDs of the transactions with the **maximum** `amount` on their respective day. If in one day there are multiple such transactions, return all of them.

Return the result table **ordered by** `transaction_id` ** in ascending order**.

The result format is in the following example.

 

**Example 1:**

```

Input: 
Transactions table:
+----------------+--------------------+--------+
| transaction_id | day                | amount |
+----------------+--------------------+--------+
| 8              | 2021-4-3 15:57:28  | 57     |
| 9              | 2021-4-28 08:47:25 | 21     |
| 1              | 2021-4-29 13:28:30 | 58     |
| 5              | 2021-4-28 16:39:59 | 40     |
| 6              | 2021-4-29 23:39:28 | 58     |
+----------------+--------------------+--------+
Output: 
+----------------+
| transaction_id |
+----------------+
| 1              |
| 5              |
| 6              |
| 8              |
+----------------+
Explanation: 
&quot;2021-4-3&quot;  --&gt; We have one transaction with ID 8, so we add 8 to the result table.
&quot;2021-4-28&quot; --&gt; We have two transactions with IDs 5 and 9. The transaction with ID 5 has an amount of 40, while the transaction with ID 9 has an amount of 21. We only include the transaction with ID 5 as it has the maximum amount this day.
&quot;2021-4-29&quot; --&gt; We have two transactions with IDs 1 and 6. Both transactions have the same amount of 58, so we include both in the result table.
We order the result table by transaction_id after collecting these IDs.

```

 

**Follow up:** Could you solve it without using the `MAX()` function?

---

**Links:** [Submissions](https://leetcode.com/problems/maximum-transaction-each-day/) | [Solutions](https://leetcode.com/problems/maximum-transaction-each-day/)
