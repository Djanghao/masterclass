# Simple MySQL solution

**Author:** OleksaM
**Votes:** 5
**Link:** [https://leetcode.com/problems/invalid-tweets-ii/solutions/5148920/](https://leetcode.com/problems/invalid-tweets-ii/solutions/5148920/)

---

```
# Please, upvote if you like it. Thanks :-)
SELECT tweet_id
FROM Tweets
WHERE CHAR_LENGTH(content) > 140 OR
      LENGTH(content)- LENGTH(REPLACE(content, '@', '')) > 3 OR
      LENGTH(content)- LENGTH(REPLACE(content, '#', '')) > 3
ORDER BY tweet_id ASC
```