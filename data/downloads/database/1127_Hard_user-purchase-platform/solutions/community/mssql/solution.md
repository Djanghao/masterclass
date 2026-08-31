# MS SQL CTE + UNION ALL

**Author:** serpol
**Votes:** 37
**Link:** [https://leetcode.com/problems/user-purchase-platform/solutions/411702/](https://leetcode.com/problems/user-purchase-platform/solutions/411702/)

---

```
WITH CTE AS (SELECT user_id, spend_date, 
    SUM(CASE platform WHEN 'mobile' THEN amount ELSE 0 END) ma,
    SUM(CASE platform WHEN 'desktop' THEN amount ELSE 0 END) da
FROM Spending
GROUP BY user_id, spend_date)
SELECT spend_date, 'desktop' platform, 
    SUM(CASE WHEN da > 0 AND ma = 0 THEN da ELSE 0 END) total_amount, 
    SUM(CASE WHEN da > 0 AND ma = 0 THEN 1 ELSE 0 END) total_users
FROM CTE
GROUP BY spend_date
UNION ALL
SELECT spend_date, 'mobile' platform, 
	 SUM(CASE WHEN ma > 0 AND da = 0 THEN ma ELSE 0 END) total_amount, 
	 SUM(CASE WHEN ma > 0 AND da = 0 THEN 1 ELSE 0 END) total_users
FROM CTE
GROUP BY spend_date
UNION ALL
SELECT spend_date, 'both' platform, 
    SUM(CASE WHEN da > 0 AND ma > 0 THEN ma + da ELSE 0 END) total_amount, 
    SUM(CASE WHEN da > 0 AND ma > 0 THEN 1 ELSE 0 END) total_users
FROM CTE
GROUP BY spend_date
```