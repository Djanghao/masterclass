# MS SQL accepted solution with explanation (Union +CTE)

**Author:** hopelins
**Votes:** 13
**Link:** [https://leetcode.com/problems/strong-friendship/solutions/1490714/](https://leetcode.com/problems/strong-friendship/solutions/1490714/)

---

```
/* Write your T-SQL query statement below */

-- overall concept:
-- user1_id, user2_id, user1_friends, user2_friends
-- where user1_friends = user2_friends (find common firends)
-- count>=3  (at least three common friend)

--get a friend list for all user so it will be easier to join
with all_friend as(
select user1_id as user_id, user2_id as friend from friendship
union
select user2_id as user_id, user1_id as friend from friendship
)
-- join to get user1_id, user2_id, user1_friends, user2_friends
, common_friend as(
select f.user1_id
    , f.user2_id
    , a1.friend as user1_friends
    ,  a2.friend as user2_friends
    
from Friendship f
left join all_friend a1 on f.user1_id = a1.user_id
left join all_friend a2 on f.user2_id = a2.user_id
where a1.friend =a2.friend
)
-- count>=3  (at least three common friend) to get strong friendship
select user1_id, user2_id, count(user1_friends) as common_friend
from common_friend
```