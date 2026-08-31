# [1126. Active Businesses](https://leetcode.com/problems/active-businesses/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Database | Medium | 282 | 34 |

**Tags:** [`database`](https://leetcode.com/tag/database)

**Companies:** `yelp`

## Description

Table: `Events`

```

+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| business_id   | int     |
| event_type    | varchar |
| occurrences   | int     | 
+---------------+---------+
(business_id, event_type) is the primary key (combination of columns with unique values) of this table.
Each row in the table logs the info that an event of some type occurred at some business for a number of times.

```

The **average activity** for a particular `event_type` is the average `occurrences` across all companies that have this event.

An **active business** is a business that has **more than one** `event_type` such that their `occurrences` is **strictly greater** than the average activity for that event.

Write a solution to find all **active businesses**.

Return the result table in **any order**.

The result format is in the following example.

 

**Example 1:**

```

Input: 
Events table:
+-------------+------------+-------------+
| business_id | event_type | occurrences |
+-------------+------------+-------------+
| 1           | reviews    | 7           |
| 3           | reviews    | 3           |
| 1           | ads        | 11          |
| 2           | ads        | 7           |
| 3           | ads        | 6           |
| 1           | page views | 3           |
| 2           | page views | 12          |
+-------------+------------+-------------+
Output: 
+-------------+
| business_id |
+-------------+
| 1           |
+-------------+
Explanation:  
The average activity for each event can be calculated as follows:
- &#39;reviews&#39;: (7+3)/2 = 5
- &#39;ads&#39;: (11+7+6)/3 = 8
- &#39;page views&#39;: (3+12)/2 = 7.5
The business with id=1 has 7 &#39;reviews&#39; events (more than 5) and 11 &#39;ads&#39; events (more than 8), so it is an active business.

```

---

**Links:** [Submissions](https://leetcode.com/problems/active-businesses/) | [Solutions](https://leetcode.com/problems/active-businesses/)
