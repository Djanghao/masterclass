# [2494. Merge Overlapping Events in the Same Hall](https://leetcode.com/problems/merge-overlapping-events-in-the-same-hall/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Database | Hard | 54 | 8 |

**Tags:** [`database`](https://leetcode.com/tag/database)


## Description

Table: `HallEvents`

```

+-------------+------+
| Column Name | Type |
+-------------+------+
| hall_id     | int  |
| start_day   | date |
| end_day     | date |
+-------------+------+
This table may contain duplicates rows.
Each row of this table indicates the start day and end day of an event and the hall in which the event is held.

```

 

Write a solution to merge all the overlapping events that are held **in the same hall**. Two events overlap if they have **at least one day** in common.

Return the result table **in any order**.

The result format is in the following example.

 

**Example 1:**

```

Input: 
HallEvents table:
+---------+------------+------------+
| hall_id | start_day  | end_day    |
+---------+------------+------------+
| 1       | 2023-01-13 | 2023-01-14 |
| 1       | 2023-01-14 | 2023-01-17 |
| 1       | 2023-01-18 | 2023-01-25 |
| 2       | 2022-12-09 | 2022-12-23 |
| 2       | 2022-12-13 | 2022-12-17 |
| 3       | 2022-12-01 | 2023-01-30 |
+---------+------------+------------+
Output: 
+---------+------------+------------+
| hall_id | start_day  | end_day    |
+---------+------------+------------+
| 1       | 2023-01-13 | 2023-01-17 |
| 1       | 2023-01-18 | 2023-01-25 |
| 2       | 2022-12-09 | 2022-12-23 |
| 3       | 2022-12-01 | 2023-01-30 |
+---------+------------+------------+
Explanation: There are three halls.
Hall 1:
- The two events [&quot;2023-01-13&quot;, &quot;2023-01-14&quot;] and [&quot;2023-01-14&quot;, &quot;2023-01-17&quot;] overlap. We merge them in one event [&quot;2023-01-13&quot;, &quot;2023-01-17&quot;].
- The event [&quot;2023-01-18&quot;, &quot;2023-01-25&quot;] does not overlap with any other event, so we leave it as it is.
Hall 2:
- The two events [&quot;2022-12-09&quot;, &quot;2022-12-23&quot;] and [&quot;2022-12-13&quot;, &quot;2022-12-17&quot;] overlap. We merge them in one event [&quot;2022-12-09&quot;, &quot;2022-12-23&quot;].
Hall 3:
- The hall has only one event, so we return it. Note that we only consider the events of each hall separately.

```

---

**Links:** [Submissions](https://leetcode.com/problems/merge-overlapping-events-in-the-same-hall/) | [Solutions](https://leetcode.com/problems/merge-overlapping-events-in-the-same-hall/)
