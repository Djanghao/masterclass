# using postgresql regex

**Author:** user1397CM
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-trending-hashtags/solutions/5365961/](https://leetcode.com/problems/find-trending-hashtags/solutions/5365961/)

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
-- Write your PostgreSQL query statement below
with cte as (
    select substring(tweet , '#[A-Za-z0-9_]+' ) as hashtag , count(*) as hashtag_count
from Tweets
where tweet_date between '2024-02-01'::date and '2024-02-29'::date 
group by substring(tweet , '#[A-Za-z0-9_]+' )
),
cte1 as (select hashtag, hashtag_count, dense_rank() over (order by hashtag_count desc) as rank
from cte
order  by hashtag_count
)
select hashtag, hashtag_count
from cte
order by hashtag_count desc, hashtag desc
limit 3
```