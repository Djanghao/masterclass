# Postgres : using inner joins, with a bit explaination

**Author:** anuraganand789
**Votes:** 1
**Link:** [https://leetcode.com/problems/strong-friendship/solutions/5261134/](https://leetcode.com/problems/strong-friendship/solutions/5261134/)

---

Join-1
 
**AllFriends a1 
  inner join AllFriends a2 
    on a1.user1_id < a2.user2_id and a1.user2_id = a2.user1_id**

Join User1 with User2 friends

Join - 2
**AllFriends a2 
  inner join friendship f 
    on a1.user1_id = f.user1_id and a2.user2_id = f.user2_id**

Here we check if there is a direct friend connection between friend of friend.

# Code
```
with
AllFriends as
(
    select user1_id, user2_id from friendship
    union
    select user2_id as user1_id, user1_id as user2_id from friendship
)

select 
  a1.user1_id
  , a2.user2_id
  , count(*) as common_friend
  from 
    AllFriends a1 
  inner join AllFriends a2 
    on a1.user1_id < a2.user2_id and a1.user2_id = a2.user1_id
  inner join friendship f 
    on a1.user1_id = f.user1_id and a2.user2_id = f.user2_id
group by 1, 2
having count(*) > 2
-- order by 1, 2
```