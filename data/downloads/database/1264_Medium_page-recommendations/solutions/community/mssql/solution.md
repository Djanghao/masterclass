# simple query - WHERE clause

**Author:** PeterHontaru
**Votes:** 7
**Link:** [https://leetcode.com/problems/page-recommendations/solutions/1380487/](https://leetcode.com/problems/page-recommendations/solutions/1380487/)

---

```
SELECT page_id as recommended_page
FROM Likes
WHERE (user_id IN (SELECT user2_id FROM Friendship WHERE user1_id = 1) OR 
      user_id IN (SELECT user1_id FROM Friendship WHERE user2_id = 1))
      AND
      page_id NOT IN (SELECT page_id FROM Likes WHERE user_id = 1)
GROUP BY page_id
```