# Most simple solution

**Author:** esgranet
**Votes:** 0
**Link:** [https://leetcode.com/problems/invalid-tweets-ii/solutions/6095989/](https://leetcode.com/problems/invalid-tweets-ii/solutions/6095989/)

---

# Code
```mssql []
/* Write your T-SQL query statement below */
SELECT tweet_id
FROM Tweets
WHERE (LEN(content) > 140)
    OR (content LIKE '%#%#%#%#%')
    OR (content LIKE '%@%@%@%@%')
ORDER BY tweet_id
```