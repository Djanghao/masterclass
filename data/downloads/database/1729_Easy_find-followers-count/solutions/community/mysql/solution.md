# ✅MySQL || Beginner level ||Easy to Understand||Simple-Short -Solution✅

**Author:** Anos
**Votes:** 21
**Link:** [https://leetcode.com/problems/find-followers-count/solutions/2520706/](https://leetcode.com/problems/find-followers-count/solutions/2520706/)

---

**Please upvote to motivate me in my quest of documenting all leetcode solutions. HAPPY CODING:)
Any suggestions and improvements are always welcome.***
*====================================================================*
\u2705 **MySQL Code :**
```
SELECT user_id,COUNT(DISTINCT(follower_id)) AS followers_count
FROM followers
GROUP BY user_id
```
**Runtime:** 479 ms
**Memory Usage:**  0B
________________________________
__________________________________

If you like the solution, please upvote \uD83D\uDD3C
For any questions, or discussions, comment below. \uD83D\uDC47\uFE0F