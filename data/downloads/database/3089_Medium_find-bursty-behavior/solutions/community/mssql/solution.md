# Simple solution: JOIN (step by step) 🤖🤖🤖

**Author:** cooking_Guy_9ice
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-bursty-behavior/solutions/5420383/](https://leetcode.com/problems/find-bursty-behavior/solutions/5420383/)

---

# Description:
<!-- Describe your first thoughts on how to solve this problem. -->

Column "max_7day_posts":
 
It's simply that you need to find any day of the month and all the days from that day + 6 days (EX: some_day BETWEEN current_day AND current_day + 6 ), then count all the posts that existed during that period and compare the results with the average ( avg_weekly_posts ).
Example:

# Example:
Posts =
| post_id | user_id | post_date  |
| ------- | ------- | ---------- |
|1	|1|	2024-02-27|
|2	|5|	2024-02-06|
|3	|3|	2024-02-25|
|4	|3|	2024-02-14|
|5	|3|	2024-02-06|
|6	|2|	2024-02-03|
|7	|2|	2024-02-14|
|10	|2|	2024-02-14|
|11	|2|	2024-02-14|
|8	|2|	2024-02-21|
|9	|2|	2024-02-27|
|12	|6|	2024-02-10|
|13	|6|	2024-02-15|
|14	|6|	2024-02-01|
|15	|6|	2024-02-28|

Output = 
| user_id | max_7day_posts | avg_weekly_posts |
| ------- | -------------- | ---------------- |
|1	|1|	0.25 |
|2	|3|	1.5 |
|5	|1|	0.25|
|6	|2|	1 |

# user_id: 6

- Begin with "2024-02-10" => current_day, "2024-02-16" => current_day + 6, some_day between current_day AND current_day + 6 => "2024-02-10" , "2024-02-15" => 2 posts => 2 > 1.00 * 2(avg).
- Check with "2024-02-15" => current_day, ''2024-02-21" => current_day + 6, some_day between current_day AND current_day + 6 => just only "2024-02-15" => 1 post < 1.00 * 2 (avg).
- Check with "2024-02-01" => current_day, ''2024-02-07" => current_day + 6,some_day between current_day AND current_day + 6 => just only "2024-02-01" => 1 post < 1.00 * 2.
- Check with "2024-02-28" => current_day => no more day => 1 post < 1.00 * 2.
-> After all we will find the largest number of consecutive posts => 2 posts.

# user_id: 2

- ....
- check with "2024-02-14" => current_day, "2024-02-20" => current_day + 6, some_day between current_day AND current_day + 6 => "2024-02-14" appears 3 times => 3 posts >= 1.5 * 2 ( avg ).
- ....
-> After all we will find the largest number of consecutive posts => 3 posts.


**Note: Any user_id that has only one posting day in a month always meets the condition.**

Hope this can help someone!

# Code
```
-- Write your PostgreSQL query statement below

WITH posts_tmp AS(
	SELECT *,
	COUNT(1) OVER(PARTITION BY user_id)/ 4.0 avg_total_post,
		COUNT(1) OVER(PARTITION BY user_id , post_date) total_post_each_day
	FROM posts WHERE post_date BETWEEN '2024-02-01' AND '2024-02-28' ORDER BY user_id, post_date
)
,find_post_with_only_one_post AS(
	SELECT 
		user_id,
		COUNT(1) max_7day_posts,
		0.25 avg_weekly_posts
	FROM
		posts_tmp
	GROUP BY user_id
	HAVING COUNT(1) = 1
)
, user_more_than_one_post AS(
	SELECT 
			* 
	FROM
			posts_tmp F
	WHERE	
		NOT EXISTS (SELECT 1 FROM find_post_with_only_one_post S WHERE S.user_id = F.user_id)
)
, final AS(
	SELECT 
		user_id, 
		total_conse_post_7_day max_7day_posts,
		ROUND(avg_total_post,2) avg_weekly_posts
	FROM
		(
			SELECT 
				U.user_id,
				U.post_date,
				MAX(U.avg_total_post) avg_total_post ,
				COUNT(DISTINCT U1.post_id) total_conse_post_7_day 
			FROM 
				user_more_than_one_post U
			INNER JOIN
				user_more_than_one_post U1 ON U.user_id = U1.user_id AND U1.post_date BETWEEN U.post_date  AND U.post_date + 6
			GROUP BY U.user_id , U.post_date
			ORDER BY user_id
		)sub
	WHERE
		total_conse_post_7_day >= (avg_total_post * 2.0)
	UNION 
	SELECT user_id, MAX(max_7day_posts) max_7day_posts, MAX(avg_weekly_posts) FROM  find_post_with_only_one_post
	GROUP BY user_id
	ORDER BY user_id
)
SELECT
	user_id,
	MAX(max_7day_posts) max_7day_posts,
	MAX(avg_weekly_posts) avg_weekly_posts
FROM
	final
GROUP BY user_id
```