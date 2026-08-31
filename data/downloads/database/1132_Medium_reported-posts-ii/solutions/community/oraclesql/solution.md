# Solution : Oracle - CTE / Left Join

**Author:** anand-prakash
**Votes:** 1
**Link:** [https://leetcode.com/problems/reported-posts-ii/solutions/1669513/](https://leetcode.com/problems/reported-posts-ii/solutions/1669513/)

---

```
/* Write your PL/SQL query statement below */
WITH cte as (
    SELECT a.post_id, 
	       r.post_id as removed_post_id,
		   a.action_date 
	FROM Actions a LEFT JOIN Removals r ON a.post_id = r.post_id 
	WHERE a.action='report' and a.extra='spam'
),
cte1 as (
    SELECT action_date, 
	       count(distinct removed_post_id)/count(distinct post_id) * 100 as daily_removed_pct 
    FROM cte GROUP BY action_date
) SELECT round(avg(daily_removed_pct),2) as average_daily_percent  FROM cte1
```