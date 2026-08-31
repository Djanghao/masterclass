# Beats 93% | Union ALL and Cross Apply

**Author:** SahithiVemparala
**Votes:** 1
**Link:** [https://leetcode.com/problems/page-recommendations-ii/solutions/4201307/](https://leetcode.com/problems/page-recommendations-ii/solutions/4201307/)

---


# Code
```
/* Write your T-SQL query statement below */

with userfriends as
(
  select user1_id as user_id, user2_id as friend_id
  from friendship
  union all
  select user2_id as user_id, user1_id as friend_id
  from friendship
),
pagerecomms as
(
  select u.user_id,u.friend_id,b.page_id
  from userfriends u
  cross apply(
                select l1.page_id
                from likes l1
                where l1.user_id = u.friend_id
                except
                select l2.page_id
                from likes l2
                where l2.user_id = u.user_id
              )b
)

select user_id,page_id,count(friend_id) as friends_likes
from pagerecomms
group by user_id,page_id
order by user_id

```