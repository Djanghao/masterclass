# [1613. Find the Missing IDs](https://leetcode.com/problems/find-the-missing-ids/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Database | Medium | 234 | 31 |

**Tags:** [`database`](https://leetcode.com/tag/database)

**Companies:** `amazon`

## Description

Table: `Customers`

```

+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| customer_id   | int     |
| customer_name | varchar |
+---------------+---------+
customer_id is the column with unique values for this table.
Each row of this table contains the name and the id customer.

```

 

Write a solution to find the missing customer IDs. The missing IDs are ones that are not in the `Customers` table but are in the range between `1` and the **maximum** `customer_id` present in the table.

**Notice** that the maximum `customer_id` will not exceed `100`.

Return the result table ordered by `ids` in **ascending order**.

The result format is in the following example.

 

**Example 1:**

```

Input: 
Customers table:
+-------------+---------------+
| customer_id | customer_name |
+-------------+---------------+
| 1           | Alice         |
| 4           | Bob           |
| 5           | Charlie       |
+-------------+---------------+
Output: 
+-----+
| ids |
+-----+
| 2   |
| 3   |
+-----+
Explanation: 
The maximum customer_id present in the table is 5, so in the range [1,5], IDs 2 and 3 are missing from the table.

```

---

**Links:** [Submissions](https://leetcode.com/problems/find-the-missing-ids/) | [Solutions](https://leetcode.com/problems/find-the-missing-ids/)
