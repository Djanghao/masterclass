# [1699. Number of Calls Between Two Persons](https://leetcode.com/problems/number-of-calls-between-two-persons/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Database | Medium | 309 | 16 |

**Tags:** [`database`](https://leetcode.com/tag/database)

**Companies:** `google`, `amazon`

## Description

Table: `Calls`

```

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| from_id     | int     |
| to_id       | int     |
| duration    | int     |
+-------------+---------+
This table does not have a primary key (column with unique values), it may contain duplicates.
This table contains the duration of a phone call between from_id and to_id.
from_id != to_id

```

 

Write a solution to report the number of calls and the total call duration between each pair of distinct persons `(person1, person2)` where `person1 < person2`.

Return the result table in **any order**.

The result format is in the following example.

 

**Example 1:**

```

Input: 
Calls table:
+---------+-------+----------+
| from_id | to_id | duration |
+---------+-------+----------+
| 1       | 2     | 59       |
| 2       | 1     | 11       |
| 1       | 3     | 20       |
| 3       | 4     | 100      |
| 3       | 4     | 200      |
| 3       | 4     | 200      |
| 4       | 3     | 499      |
+---------+-------+----------+
Output: 
+---------+---------+------------+----------------+
| person1 | person2 | call_count | total_duration |
+---------+---------+------------+----------------+
| 1       | 2       | 2          | 70             |
| 1       | 3       | 1          | 20             |
| 3       | 4       | 4          | 999            |
+---------+---------+------------+----------------+
Explanation: 
Users 1 and 2 had 2 calls and the total duration is 70 (59 + 11).
Users 1 and 3 had 1 call and the total duration is 20.
Users 3 and 4 had 4 calls and the total duration is 999 (100 + 200 + 200 + 499).

```

---

**Links:** [Submissions](https://leetcode.com/problems/number-of-calls-between-two-persons/) | [Solutions](https://leetcode.com/problems/number-of-calls-between-two-persons/)
