# ✅MySQL || Beginner level ||Easy to Understand||Simple-Short -Solution✅

**Author:** Anos
**Votes:** 30
**Link:** [https://leetcode.com/problems/daily-leads-and-partners/solutions/2520694/](https://leetcode.com/problems/daily-leads-and-partners/solutions/2520694/)

---

**Please upvote to motivate me in my quest of documenting all leetcode solutions. HAPPY CODING:)
Any suggestions and improvements are always welcome.***
*====================================================================*
\u2705 **MySQL Code :**
```
SELECT date_id, make_name, COUNT(DISTINCT lead_id) AS unique_leads, COUNT(DISTINCT partner_id) AS unique_partners
FROM DailySales
GROUP BY date_id, make_name
```
**Runtime:** 789 ms
**Memory Usage:**  0B
________________________________
__________________________________

If you like the solution, please upvote \uD83D\uDD3C
For any questions, or discussions, comment below. \uD83D\uDC47\uFE0F