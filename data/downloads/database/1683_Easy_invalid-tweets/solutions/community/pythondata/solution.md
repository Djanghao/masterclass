# 🔥💯 Pandas || MySQL: An Effortless Simple Approach! 🔥💯

**Author:** sriganesh777
**Votes:** 114
**Link:** [https://leetcode.com/problems/invalid-tweets/solutions/3853009/](https://leetcode.com/problems/invalid-tweets/solutions/3853009/)

---


# Approach
<!-- Describe your approach to solving the problem. -->
- Filter the rows where the length of the content column is strictly greater than 15. This can be done using the str.len() method of the content column.
- Select only the tweet_id column from the filtered DataFrame. We are interested in getting the IDs of invalid tweets.
- Return the result_df, which will contain the IDs of the invalid tweets.
# Pandas Code
```
import pandas as pd

def invalid_tweets(tweets: pd.DataFrame) -> pd.DataFrame:
    # Filter rows where the length of 'content' is strictly greater than 15
    invalid_tweets_df = tweets[tweets['content'].str.len() > 15]
    
    # Select only the 'tweet_id' column from the invalid tweets DataFrame
    result_df = invalid_tweets_df[['tweet_id']]
    
    return result_df
```
# Mysql code
```
SELECT tweet_id
FROM Tweets
WHERE CHAR_LENGTH(content) > 15;
```
# Explanation
- We use the SELECT statement to retrieve the tweet_id column from the Tweets table.

- The WHERE clause filters the rows where the length of the content column is strictly greater than 15. This ensures that we get the IDs of the invalid tweets.

The SQL query will return the tweet_id of the invalid tweets where the number of characters in the content of the tweet is strictly greater than 15.
![upvote img.jpg](./images/0.jpeg)
