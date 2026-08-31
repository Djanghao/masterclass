# [1285. Find the Start and End Number of Continuous Ranges](https://leetcode.com/problems/find-the-start-and-end-number-of-continuous-ranges/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Database | Medium | 586 | 36 |

**Tags:** [`database`](https://leetcode.com/tag/database)

**Companies:** `microsoft`

## Description

Table: `Logs`

```

+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| log_id        | int     |
+---------------+---------+
log_id is the column of unique values for this table.
Each row of this table contains the ID in a log Table.

```

 

Write a solution to find the start and end number of continuous ranges in the table `Logs`.

Return the result table ordered by `start_id`.

The result format is in the following example.

 

**Example 1:**

```

Input: 
Logs table:
+------------+
| log_id     |
+------------+
| 1          |
| 2          |
| 3          |
| 7          |
| 8          |
| 10         |
+------------+
Output: 
+------------+--------------+
| start_id   | end_id       |
+------------+--------------+
| 1          | 3            |
| 7          | 8            |
| 10         | 10           |
+------------+--------------+
Explanation: 
The result table should contain all ranges in table Logs.
From 1 to 3 is contained in the table.
From 4 to 6 is missing in the table
From 7 to 8 is contained in the table.
Number 9 is missing from the table.
Number 10 is contained in the table.

```

---

**Links:** [Submissions](https://leetcode.com/problems/find-the-start-and-end-number-of-continuous-ranges/) | [Solutions](https://leetcode.com/problems/find-the-start-and-end-number-of-continuous-ranges/)
