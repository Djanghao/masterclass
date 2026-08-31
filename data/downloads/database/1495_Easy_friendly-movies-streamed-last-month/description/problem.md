# [1495. Friendly Movies Streamed Last Month](https://leetcode.com/problems/friendly-movies-streamed-last-month/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Database | Easy | 92 | 43 |

**Tags:** [`database`](https://leetcode.com/tag/database)

**Companies:** `amazon`

## Description

Table: `TVProgram`

```

+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| program_date  | date    |
| content_id    | int     |
| channel       | varchar |
+---------------+---------+
(program_date, content_id) is the primary key (combination of columns with unique values) for this table.
This table contains information of the programs on the TV.
content_id is the id of the program in some channel on the TV.
```

 

Table: `Content`

```

+------------------+---------+
| Column Name      | Type    |
+------------------+---------+
| content_id       | varchar |
| title            | varchar |
| Kids_content     | enum    |
| content_type     | varchar |
+------------------+---------+
content_id is the primary key (column with unique values) for this table.
Kids_content is an ENUM (category) of types (&#39;Y&#39;, &#39;N&#39;) where: 
&#39;Y&#39; means is content for kids otherwise &#39;N&#39; is not content for kids.
content_type is the category of the content as movies, series, etc.

```

 

Write a solution to report the distinct titles of the kid-friendly movies streamed in **June 2020**.

Return the result table in **any order**.

The result format is in the following example.

 

**Example 1:**

```

Input: 
TVProgram table:
+--------------------+--------------+-------------+
| program_date       | content_id   | channel     |
+--------------------+--------------+-------------+
| 2020-06-10 08:00   | 1            | LC-Channel  |
| 2020-05-11 12:00   | 2            | LC-Channel  |
| 2020-05-12 12:00   | 3            | LC-Channel  |
| 2020-05-13 14:00   | 4            | Disney Ch   |
| 2020-06-18 14:00   | 4            | Disney Ch   |
| 2020-07-15 16:00   | 5            | Disney Ch   |
+--------------------+--------------+-------------+
Content table:
+------------+----------------+---------------+---------------+
| content_id | title          | Kids_content  | content_type  |
+------------+----------------+---------------+---------------+
| 1          | Leetcode Movie | N             | Movies        |
| 2          | Alg. for Kids  | Y             | Series        |
| 3          | Database Sols  | N             | Series        |
| 4          | Aladdin        | Y             | Movies        |
| 5          | Cinderella     | Y             | Movies        |
+------------+----------------+---------------+---------------+
Output: 
+--------------+
| title        |
+--------------+
| Aladdin      |
+--------------+
Explanation: 
&quot;Leetcode Movie&quot; is not a content for kids.
&quot;Alg. for Kids&quot; is not a movie.
&quot;Database Sols&quot; is not a movie
&quot;Alladin&quot; is a movie, content for kids and was streamed in June 2020.
&quot;Cinderella&quot; was not streamed in June 2020.

```

---

**Links:** [Submissions](https://leetcode.com/problems/friendly-movies-streamed-last-month/) | [Solutions](https://leetcode.com/problems/friendly-movies-streamed-last-month/)
