# 🚀🚀  Fastest Query Using (Group By + Having + Distinct ) 👍✨

**Author:** vadlamudinaveen999
**Votes:** 4
**Link:** [https://leetcode.com/problems/article-views-ii/solutions/2226014/](https://leetcode.com/problems/article-views-ii/solutions/2226014/)

---

```
# Code Author Naveen Kumar Vadlamudi 
# Simplest Solution using GROUP By + HAVING + DISTINCT 
# Upvote If it Helps  \uD83D\uDC4D\uD83D\uDC4D

SELECT 
DISTINCT VIEWER_ID AS ID
FROM VIEWS
GROUP BY VIEW_DATE, VIEWER_ID
HAVING COUNT(DISTINCT ARTICLE_ID) >=  2
ORDER BY ID 
```