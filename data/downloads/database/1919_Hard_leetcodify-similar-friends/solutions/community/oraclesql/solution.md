# An Oracle solution

**Author:** yucan29
**Votes:** 0
**Link:** [https://leetcode.com/problems/leetcodify-similar-friends/solutions/5769654/](https://leetcode.com/problems/leetcodify-similar-friends/solutions/5769654/)

---

```oraclesql []
select
    distinct 
    user_id as user1_id,
    user_id2 as user2_id
from
(
    select
        l1.user_id,
        l2.user_id as user_id2,
        count(distinct l1.song_id) over (partition by l2.day, l1.user_id,l2.user_id) as cnt
    from Listens l1, Listens l2
    where
        l1.user_id < l2.user_id and
        l1.song_id=l2.song_id and
        l1.day = l2.day
)s1
where    
    cnt>=3 and
    (user_id, user_id2) in (select * from Friendship) 
order by
    1,2;

```