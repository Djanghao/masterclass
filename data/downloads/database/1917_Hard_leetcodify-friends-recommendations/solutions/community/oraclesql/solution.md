# Oracle Simple Solution

**Author:** minabeshay
**Votes:** 4
**Link:** [https://leetcode.com/problems/leetcodify-friends-recommendations/solutions/1542554/](https://leetcode.com/problems/leetcodify-friends-recommendations/solutions/1542554/)

---

```
SELECT DISTINCT  
    a.user_id user_id,
    b.user_id recommended_id
FROM
    listens a
    INNER JOIN listens b ON a.user_id <> b.user_id
    AND a.song_id = b.song_id
    AND a.day = b.day
    left JOIN  friendship c ON least( a.user_id, b.user_id) = user1_id 
    and  greatest (b.user_id, a.user_id) = user2_id
where c.user1_id is null 
GROUP BY
    a.user_id,
    b.user_id,
    a.day
HAVING
    count(DISTINCT a.song_id) >= 3

```