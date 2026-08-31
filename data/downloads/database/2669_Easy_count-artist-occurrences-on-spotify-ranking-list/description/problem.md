# [2669. Count Artist Occurrences On Spotify Ranking List](https://leetcode.com/problems/count-artist-occurrences-on-spotify-ranking-list/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Database | Easy | 17 | 2 |

**Tags:** [`database`](https://leetcode.com/tag/database)


## Description

Table: `Spotify`

```

+-------------+---------+ 
| Column Name | Type    | 
+-------------+---------+ 
| id          | int     | 
| track_name  | varchar |
| artist      | varchar |
+-------------+---------+
id is the primary key (column with unique values) for this table.
Each row contains an id, track_name, and artist.

```

Write a solution to find how many times each artist appeared on the Spotify ranking list.

Return the result table having the artist's name along with the corresponding number of occurrences ordered by occurrence count in **descending **order. If the occurrences are equal, then it&rsquo;s ordered by the artist&rsquo;s name in **ascending** order.

The result format is in the following example​​​​​.

 

**Example 1:**

```

Input:
Spotify table: 
+---------+--------------------+------------+ 
| id      | track_name         | artist     |  
+---------+--------------------+------------+
| 303651  | Heart Won&#39;t Forget | Sia        |
| 1046089 | Shape of you       | Ed Sheeran |
| 33445   | I&#39;m the one        | DJ Khalid  |
| 811266  | Young Dumb &amp; Broke | DJ Khalid  | 
| 505727  | Happier            | Ed Sheeran |
+---------+--------------------+------------+ 
Output:
+------------+-------------+
| artist     | occurrences | 
+------------+-------------+
| DJ Khalid  | 2           |
| Ed Sheeran | 2           |
| Sia        | 1           | 
+------------+-------------+ 

Explanation: The count of occurrences is listed in descending order under the column name &quot;occurrences&quot;. If the number of occurrences is the same, the artist&#39;s names are sorted in ascending order.

```

---

**Links:** [Submissions](https://leetcode.com/problems/count-artist-occurrences-on-spotify-ranking-list/) | [Solutions](https://leetcode.com/problems/count-artist-occurrences-on-spotify-ranking-list/)
