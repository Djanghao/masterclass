# Easy and passed MSSQL solution

**Author:** DiveDave
**Votes:** 1
**Link:** [https://leetcode.com/problems/leetcodify-similar-friends/solutions/1698024/](https://leetcode.com/problems/leetcodify-similar-friends/solutions/1698024/)

---

```
SELECT DISTINCT
       F.user1_id
     , F.user2_id
  FROM Friendship F
     , Listens L1
     , Listens L2
 WHERE L1.day = L2.day
   AND L1.song_id = L2.song_id
   AND F.user1_id = L1.user_id
   AND F.user2_id = L2.user_id
 GROUP BY L1.day
        , F.user1_id
        , F.user2_id
HAVING COUNT(DISTINCT L1.song_id) >= 3
```