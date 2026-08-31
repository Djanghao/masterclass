# [1683. Invalid Tweets](https://leetcode.com/problems/invalid-tweets/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Database | Easy | 1417 | 379 |

**Tags:** [`database`](https://leetcode.com/tag/database)

**Companies:** `google`, `adobe`, `microsoft`, `amazon`, `bloomberg`, `twitter`

## Description

Table: `Tweets`

```

+----------------+---------+
| Column Name    | Type    |
+----------------+---------+
| tweet_id       | int     |
| content        | varchar |
+----------------+---------+
tweet_id is the primary key (column with unique values) for this table.
content consists of alphanumeric characters, &#39;!&#39;, or &#39; &#39; and no other special characters.
This table contains all the tweets in a social media app.

```

 

Write a solution to find the IDs of the invalid tweets. The tweet is invalid if the number of characters used in the content of the tweet is **strictly greater** than `15`.

Return the result table in **any order**.

The result format is in the following example.

 

**Example 1:**

```

Input: 
Tweets table:
+----------+-----------------------------------+
| tweet_id | content                           |
+----------+-----------------------------------+
| 1        | Let us Code                       |
| 2        | More than fifteen chars are here! |
+----------+-----------------------------------+
Output: 
+----------+
| tweet_id |
+----------+
| 2        |
+----------+
Explanation: 
Tweet 1 has length = 11. It is a valid tweet.
Tweet 2 has length = 33. It is an invalid tweet.

```

---

**Links:** [Submissions](https://leetcode.com/problems/invalid-tweets/) | [Solutions](https://leetcode.com/problems/invalid-tweets/)
