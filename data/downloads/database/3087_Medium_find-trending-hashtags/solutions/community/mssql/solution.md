# row_number + cte

**Author:** DE_Sam
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-trending-hashtags/solutions/5856289/](https://leetcode.com/problems/find-trending-hashtags/solutions/5856289/)

---

# Code
```mssql []
/* Write your T-SQL query statement below */
with hashtags 
AS
(
    SELECT hashtag
          ,count(*) usages
          ,row_number() over (order by count(*) desc, hashtag desc) top3
     FROM 
     (
            SELECT substring(tweet, charindex('#', tweet), CHARINDEX(' ', tweet + ' ', CHARINDEX('#', tweet)) - CHARINDEX('#', tweet)) hashtag
            FROM Tweets
     ) x
    group by hashtag
)
SELECT hashtag
      ,usages as hashtag_count
FROM hashtags
where top3 < 4
```