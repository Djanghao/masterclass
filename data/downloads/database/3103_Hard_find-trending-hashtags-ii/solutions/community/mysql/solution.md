# MySQL Recursive CTE

**Author:** ektegjetost
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-trending-hashtags-ii/solutions/4959507/](https://leetcode.com/problems/find-trending-hashtags-ii/solutions/4959507/)

---

# Intuition
Recursively find hashtags and remove them from the tweets until there are no hashtags left, then count them up.

# Approach
1. Find a hashtag using a regex ```REGEXP_SUBSTR(tweet, #[^\\\\s]+)```
2. Replace the first occurrence of the hashtag with an empty string ```REGEXP_REPLACE(tweet, "#[^\\\\s]+", "", 1, 1)```
3. Recurse until you can't find any more hashtags (regexp_substr returns null)
4. Then do a basic filter out null hashtags, group by hashtag, add a count, order and limit

# Code
```
# Write your MySQL query statement below
WITH RECURSIVE tags AS (
    SELECT REGEXP_SUBSTR (tweet, "#[^\\\\s]+") AS hashtag,
           REGEXP_REPLACE(tweet, "#[^\\\\s]+", "", 1, 1) AS tweet
    FROM Tweets
    UNION ALL
    SELECT REGEXP_SUBSTR (tweet, "#[^\\\\s]+") AS hashtag,
           REGEXP_REPLACE(tweet, "#[^\\\\s]+", "", 1, 1) AS tweet
    FROM tags
    WHERE hashtag IS NOT NULL
)

SELECT hashtag,
       COUNT(*) AS count
FROM tags
WHERE hashtag IS NOT NULL
GROUP BY hashtag
ORDER BY count DESC, hashtag DESC
LIMIT 3
```