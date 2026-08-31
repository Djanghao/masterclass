# [603. Consecutive Available Seats](https://leetcode.com/problems/consecutive-available-seats/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Database | Easy | 658 | 80 |

**Tags:** [`database`](https://leetcode.com/tag/database)


## Description

Table: `Cinema`

```

+-------------+------+
| Column Name | Type |
+-------------+------+
| seat_id     | int  |
| free        | bool |
+-------------+------+
seat_id is an auto-increment column for this table.
Each row of this table indicates whether the ith seat is free or not. 1 means free while 0 means occupied.

```

 

Find all the consecutive available seats in the cinema.

Return the result table **ordered** by `seat_id` **in ascending order**.

The test cases are generated so that more than two seats are consecutively available.

The result format is in the following example.

 

**Example 1:**

```

Input: 
Cinema table:
+---------+------+
| seat_id | free |
+---------+------+
| 1       | 1    |
| 2       | 0    |
| 3       | 1    |
| 4       | 1    |
| 5       | 1    |
+---------+------+
Output: 
+---------+
| seat_id |
+---------+
| 3       |
| 4       |
| 5       |
+---------+

```

---

**Links:** [Submissions](https://leetcode.com/problems/consecutive-available-seats/) | [Solutions](https://leetcode.com/problems/consecutive-available-seats/)
