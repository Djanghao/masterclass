# Pandas || One-line || Simply use .str.extract & regex

**Author:** Kasuyai
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-trending-hashtags/solutions/5418467/](https://leetcode.com/problems/find-trending-hashtags/solutions/5418467/)

---

# Intuition
A simple problem solved with a bit of regex.

# Approach
1. Extract the hashtag in each tweet by `.str.extract()` with the regex expression `r"(#\\w)"` to a column called `"hashtag"`.
2. Then just perform usual groupby aggregations.

# How does the regex work?
- `r""` specfies that the string will be regex.
- `r"()"` specifies what string we want to extract. If we wanted to extract more than one string, we would use seperate parentheses.
- `r"(#)"` We specify that we expect the first character to be a hashtag.
- `r"(#\\w)"` Then we use `\\w` as shorthand expression to find alphanumerical characters after a hashtag. 
- `r"(#\\w+)"`The `+` specifies that we want at least one character to find.

# Code
```
import pandas as pd

def find_trending_hashtags(tweets: pd.DataFrame) -> pd.DataFrame:
    return (
        tweets.assign(hashtag=(tweets["tweet"].str.extract(r"(#\\w+)")))
        .groupby("hashtag", as_index=False)
        .agg(hashtag_count=("tweet", "count"))
        .sort_values(["hashtag_count", "hashtag"], ascending=False)
        .head(3)
    )
```