# cte only

**Author:** user1397CM
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-trending-hashtags-ii/solutions/5463115/](https://leetcode.com/problems/find-trending-hashtags-ii/solutions/5463115/)

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
with cte as (select user_id, tweet_id,unnest(string_to_array(tweet,' ')) as tweet
from tweets
where date_trunc('month', tweet_date)='2024-02-01'
),
cte1 as (select user_id, tweet_id, tweet
from cte
where tweet like '#%'
),
cte2 as (
    select  tweet as hashtag,count(*) as total_count, 
     row_number() over (order by count(*) desc, tweet desc ) as rank
    from cte1
    group by  hashtag
)
    select hashtag, total_Count as count
    from cte2
    where rank<=3
    order by total_count desc, hashtag desc
 
; 

```