# [MySQL] Using REGEXP_SUBSTR

**Author:** PhoenixDD
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-trending-hashtags/solutions/4890288/](https://leetcode.com/problems/find-trending-hashtags/solutions/4890288/)

---

# Description

Use `REGEXP_SUBSTR` to find the hashtag substring for each tweet. Although problem statement doesn't clarify this but each tweet has a single hashtag here.
Thus it boils down to extracting one hash tag per row, filtering them out based on the required date, grouping them by their count and ordering them based on count and the hashtag in descending order.

Regex: `\\#[a-zA-Z]+` means starting with a hash and followed by one or more alphabets.

# Code
```
SELECT REGEXP_SUBSTR(tweet,'\\#[a-zA-Z]+') hashtag,COUNT(*) hashtag_count FROM Tweets
WHERE DATE_FORMAT(tweet_date,'%Y-%m')='2024-02'
GROUP BY 1
ORDER BY 2 DESC,1 DESC
LIMIT 3
```