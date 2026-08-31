# [197. Rising Temperature](https://leetcode.com/problems/rising-temperature/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Database | Easy | 4034 | 723 |

**Tags:** [`database`](https://leetcode.com/tag/database)

**Companies:** `google`, `amazon`, `microsoft`, `meesho`, `facebook`, `bloomberg`, `cognizant`, `adobe`, `apple`, `cisco`

## Description

Table: `Weather`

```

+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| id            | int     |
| recordDate    | date    |
| temperature   | int     |
+---------------+---------+
id is the column with unique values for this table.
There are no different rows with the same recordDate.
This table contains information about the temperature on a certain day.

```

 

Write a solution to find all dates' `id` with higher temperatures compared to its previous dates (yesterday).

Return the result table in **any order**.

The result format is in the following example.

 

**Example 1:**

```

Input: 
Weather table:
+----+------------+-------------+
| id | recordDate | temperature |
+----+------------+-------------+
| 1  | 2015-01-01 | 10          |
| 2  | 2015-01-02 | 25          |
| 3  | 2015-01-03 | 20          |
| 4  | 2015-01-04 | 30          |
+----+------------+-------------+
Output: 
+----+
| id |
+----+
| 2  |
| 4  |
+----+
Explanation: 
In 2015-01-02, the temperature was higher than the previous day (10 -&gt; 25).
In 2015-01-04, the temperature was higher than the previous day (20 -&gt; 30).

```

---

**Links:** [Submissions](https://leetcode.com/problems/rising-temperature/) | [Solutions](https://leetcode.com/problems/rising-temperature/)
