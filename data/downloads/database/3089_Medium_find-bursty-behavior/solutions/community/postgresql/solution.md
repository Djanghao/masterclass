# Postresql simple and cte only

**Author:** user1397CM
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-bursty-behavior/solutions/5612611/](https://leetcode.com/problems/find-bursty-behavior/solutions/5612611/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
with cte as (
    select user_id, count(*)::decimal/4 as avg_weekly_posts
    from posts
    where post_date between '2024-02-01' and '2024-02-28'
    group by user_id
) , cte1 as (
    select p.user_id, gs.id::date as post_date
    from (select distinct user_id from posts) p,
    generate_series('2024-02-01'::date, '2024-02-28'::date, interval '1 day') gs(id)
), cte2 as ( select  cte1.post_date, cte1.user_id, coalesce(p.post_id, 0) as post_count
from cte1
left join (select user_id, post_date, count(post_id) as post_id  from posts group by user_id, post_date) p on cte1.user_id=p.user_id and cte1.post_date=p.post_date
) , cte3 as (select post_date, user_id, sum(post_count) filter (where post_count<>0) over (partition by user_id order by post_date rows between   current row and 6  following) as total_7days_posts
from cte2
)select cte3.user_id as user_id, max(cte3.total_7days_posts) as max_7day_posts, cte.avg_weekly_posts as avg_weekly_posts
from cte3
join cte on cte3.user_id=cte.user_id
where cte3.total_7days_posts>=2*cte.avg_weekly_posts
group by cte3.user_id, cte.avg_weekly_posts
order by cte3.user_id
```