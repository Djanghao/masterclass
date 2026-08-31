# [1241. Number of Comments per Post](https://leetcode.com/problems/number-of-comments-per-post/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Database | Easy | 187 | 545 |

**Tags:** [`database`](https://leetcode.com/tag/database)

**Companies:** `facebook`

## Description

Table: `Submissions`

```

+---------------+----------+
| Column Name   | Type     |
+---------------+----------+
| sub_id        | int      |
| parent_id     | int      |
+---------------+----------+
This table may have duplicate rows.
Each row can be a post or comment on the post.
parent_id is null for posts.
parent_id for comments is sub_id for another post in the table.

```

 

Write a solution to find the number of comments per post. The result table should contain `post_id` and its corresponding `number_of_comments`.

The `Submissions` table may contain duplicate comments. You should count the number of **unique comments** per post.

The `Submissions` table may contain duplicate posts. You should treat them as one post.

The result table should be **ordered** by `post_id` in **ascending order**.

The result format is in the following example.

 

**Example 1:**

```

Input: 
Submissions table:
+---------+------------+
| sub_id  | parent_id  |
+---------+------------+
| 1       | Null       |
| 2       | Null       |
| 1       | Null       |
| 12      | Null       |
| 3       | 1          |
| 5       | 2          |
| 3       | 1          |
| 4       | 1          |
| 9       | 1          |
| 10      | 2          |
| 6       | 7          |
+---------+------------+
Output: 
+---------+--------------------+
| post_id | number_of_comments |
+---------+--------------------+
| 1       | 3                  |
| 2       | 2                  |
| 12      | 0                  |
+---------+--------------------+
Explanation: 
The post with id 1 has three comments in the table with id 3, 4, and 9. The comment with id 3 is repeated in the table, we counted it only once.
The post with id 2 has two comments in the table with id 5 and 10.
The post with id 12 has no comments in the table.
The comment with id 6 is a comment on a deleted post with id 7 so we ignored it.

```

---

**Links:** [Submissions](https://leetcode.com/problems/number-of-comments-per-post/) | [Solutions](https://leetcode.com/problems/number-of-comments-per-post/)
