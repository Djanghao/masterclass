# COUNT(DISTINCT post_id)

**Author:** yayarokya
**Votes:** 6
**Link:** [https://leetcode.com/problems/reported-posts/solutions/1482622/](https://leetcode.com/problems/reported-posts/solutions/1482622/)

---

```
/* Write your T-SQL query statement below */
SELECT extra as report_reason, COUNT(DISTINCT post_id) as report_count
FROM Actions
WHERE action_date = '2019-07-04' AND action = 'report' 
GROUP BY extra
```