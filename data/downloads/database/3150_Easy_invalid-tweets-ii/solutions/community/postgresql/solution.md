# Solutions with regular expressions

**Author:** Inveterate_Enthusiast
**Votes:** 0
**Link:** [https://leetcode.com/problems/invalid-tweets-ii/solutions/5683402/](https://leetcode.com/problems/invalid-tweets-ii/solutions/5683402/)

---

# Code on Python
```python
import pandas as pd
import re


def find_invalid_tweets(tweets: pd.DataFrame) -> pd.DataFrame:
    mentions_pattern = r".*?@.+@.+@.+@.+"
    hashtags_pattern = r".*?#.+#.+#.+#.+"
    tweets[["len", "mentions", "hashtags"]] = tweets["content"].apply(lambda x: pd.Series(data=[len(x) > 140,
                                                                                                bool(re.match(mentions_pattern, x)),
                                                                                                bool(re.match(hashtags_pattern, x))]))
    return tweets.loc[tweets["len"] | tweets["mentions"] | tweets["hashtags"], ["tweet_id"]].sort_values(by="tweet_id", ascending=True)
```
```python
import pandas as pd

def find_invalid_tweets1(tweets: pd.DataFrame) -> pd.DataFrame:
    return tweets.loc[
        (tweets["content"].str.len() > 140) |
        (tweets["content"].str.count("@") > 3) |
        (tweets["content"].str.count("#") > 3),
        ["tweet_id"]
    ].sort_values(by="tweet_id", ascending=True)
```
---
# Code on PostgreSQL
```sql
-- Write your PostgreSQL query statement below
SELECT tweet_id
FROM Tweets
WHERE (LENGTH(content) > 140) OR (content ~ '^.*?@.+@.+@.+@.+$') OR (content ~ '^.*?#.+#.+#.+#.+$')
ORDER BY tweet_id ASC;
```
```sql
-- Write your PostgreSQL query statement below
SELECT tweet_id
FROM Tweets
WHERE (LENGTH(content) > 140) OR (REGEXP_COUNT(content, '@\\S+') > 3) OR (REGEXP_COUNT(content, '#\\S+') > 3)
ORDER BY tweet_id ASC;
```