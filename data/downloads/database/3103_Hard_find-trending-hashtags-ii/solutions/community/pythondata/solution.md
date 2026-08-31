# Pandas Solution

**Author:** Zaidi9999
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-trending-hashtags-ii/solutions/5756782/](https://leetcode.com/problems/find-trending-hashtags-ii/solutions/5756782/)

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

def find_trending_hashtags(tweets: pd.DataFrame) -> pd.DataFrame:
    tweets = tweets[(tweets['tweet_date'].dt.year == 2024) & (tweets['tweet_date'].dt.month == 2)]
    hastags = tweets['tweet'].str.findall(r'(#\\w+)').explode()
    hastags_count = hastags.value_counts().reset_index().rename(columns={'tweet':'hashtag'})
    print(hastags_count)
    hastags = hastags_count.sort_values(
    by=['count', 'hashtag'],
    ascending=[False, False], 
    key=lambda x: x.str.replace('#', '') if x.name == 'hashtag' else x
)
    return hastags.head(3)


    

    
    
```