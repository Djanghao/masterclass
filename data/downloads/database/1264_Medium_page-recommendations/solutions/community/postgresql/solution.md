# Simple query with only union and cte's

**Author:** sailesh21
**Votes:** 0
**Link:** [https://leetcode.com/problems/page-recommendations/solutions/6130757/](https://leetcode.com/problems/page-recommendations/solutions/6130757/)

---

No use of joins and beats 98%

# Code
```postgresql []
-- Write your PostgreSQL query statement below
with user1_likes as(
select page_id
from likes
where user_id = 1),

friends as(
select user2_id as id
from friendship
where user1_id =1
union
select user1_id as id
from friendship
where user2_id =1)

select distinct page_id as recommended_page
from likes
where user_id in (select distinct id from friends )
and page_id not in (select * from user1_likes)
```