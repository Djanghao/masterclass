# Postgres : Use Basic Inner Join and Distinct

**Author:** anuraganand789
**Votes:** 1
**Link:** [https://leetcode.com/problems/leetcodify-similar-friends/solutions/5394380/](https://leetcode.com/problems/leetcodify-similar-friends/solutions/5394380/)

---


# Code
```
select 
distinct
    l.user_id as user1_id
  , l2.user_id as user2_id
from 
  friendship f 
  join listens l on f.user1_id = l.user_id
  join listens l2 on f.user2_id = l2.user_id and l.song_id = l2.song_id and l.day = l2.day
group by l.user_id, l2.user_id, l.day
having count(distinct l.song_id) > 2
```