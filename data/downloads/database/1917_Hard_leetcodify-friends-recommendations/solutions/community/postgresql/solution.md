# simple cte

**Author:** user1397CM
**Votes:** 2
**Link:** [https://leetcode.com/problems/leetcodify-friends-recommendations/solutions/5592853/](https://leetcode.com/problems/leetcodify-friends-recommendations/solutions/5592853/)

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
select l1.user_id u , l2.user_id f, l1.day, count(distinct l1.song_id) as song_count
from listens l1
join listens l2 on l1.day=l2.day and l1.song_id=l2.song_id and l1.user_id<l2.user_id
group by l1.user_id, l2.user_id, l1.day
),
cte1 as (select u as user_id, f as recommended_id from cte
where song_count>=3
and (u,f) not in (select user1_id, user2_id from  friendship)
)
select user_id,recommended_id
from cte1
union 
select recommended_id, user_id
from cte1
```