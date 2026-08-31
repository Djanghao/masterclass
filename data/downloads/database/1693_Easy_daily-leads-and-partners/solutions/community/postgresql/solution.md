# ✅ Simple solution using GROUP BY and DISTINCT ✅

**Author:** Daniel_Charles_J
**Votes:** 2
**Link:** [https://leetcode.com/problems/daily-leads-and-partners/solutions/5810745/](https://leetcode.com/problems/daily-leads-and-partners/solutions/5810745/)

---


# Approach
Just used the GROUP BY for the date_id and make_name.
Then used the DISTINCT clause to aviod the Duplicates.
Then COUNT is used to get the unique drivers count.



# Code
```postgresql []
-- Write your PostgreSQL query statement below
SELECT date_id,make_name,COUNT(DISTINCT lead_id) AS unique_leads,
COUNT(DISTINCT partner_id) AS unique_partners 
FROM DailySales GROUP BY date_id,make_name
```