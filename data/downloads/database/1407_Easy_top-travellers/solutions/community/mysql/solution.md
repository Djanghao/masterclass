# ✅MySQL || Beginner level ||Easy to Understand||Simple-Short -Solution✅

**Author:** Anos
**Votes:** 19
**Link:** [https://leetcode.com/problems/top-travellers/solutions/2510946/](https://leetcode.com/problems/top-travellers/solutions/2510946/)

---

**Please upvote to motivate me in my quest of documenting all leetcode solutions. HAPPY CODING:)
Any suggestions and improvements are always welcome.***
*====================================================================*
\u2705 **MySQL Code :**
```
SELECT DISTINCT u.name, 
IFNULL(SUM(distance) OVER (PARTITION BY user_id), 0) as travelled_distance 
FROM Rides r 
RIGHT JOIN Users u 
    ON r.user_id = u.id 
ORDER BY travelled_distance DESC, name
```
**Runtime:** 640 ms
**Memory Usage:**  0B
________________________________
__________________________________

If you like the solution, please upvote \uD83D\uDD3C
For any questions, or discussions, comment below. \uD83D\uDC47\uFE0F