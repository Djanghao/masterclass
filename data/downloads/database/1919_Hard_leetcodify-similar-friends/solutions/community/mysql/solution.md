# Minimal, clean MySQL solution

**Author:** frederikmuller
**Votes:** 10
**Link:** [https://leetcode.com/problems/leetcodify-similar-friends/solutions/1410902/](https://leetcode.com/problems/leetcodify-similar-friends/solutions/1410902/)

---

```
SELECT DISTINCT l1.user_id AS user1_id, l2.user_id AS user2_id
FROM Listens l1
JOIN Listens l2
ON l1.song_id = l2.song_id
AND l1.day = l2.day
AND l1.user_id < l2.user_id
AND (l1.user_id, l2.user_id) IN (SELECT * FROM Friendship)
GROUP BY l1.user_id, l2.user_id, l1.day
HAVING COUNT(DISTINCT l1.song_id) >= 3
```