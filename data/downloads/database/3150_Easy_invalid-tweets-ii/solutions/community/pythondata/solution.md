# Pandas, simple solution

**Author:** Prachi_404
**Votes:** 0
**Link:** [https://leetcode.com/problems/invalid-tweets-ii/solutions/6073818/](https://leetcode.com/problems/invalid-tweets-ii/solutions/6073818/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```pythondata []
import pandas as pd

def find_invalid_tweets(tweets: pd.DataFrame) -> pd.DataFrame:
    length_condition= tweets['content'].str.len() >140
    mentions_condition= tweets['content'].str.count('@')>3
    hashtag_condition= tweets['content'].str.count('#')>3
    filtered_tweets= tweets[length_condition | mentions_condition | hashtag_condition ]
    return filtered_tweets.sort_values(by='tweet_id')[['tweet_id']]
```