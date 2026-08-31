# Pandas Solution

**Author:** true-detective
**Votes:** 6
**Link:** [https://leetcode.com/problems/ads-performance/solutions/4090478/](https://leetcode.com/problems/ads-performance/solutions/4090478/)

---


# Code
```
import pandas as pd

def ads_performance(ads: pd.DataFrame) -> pd.DataFrame:
    def process(g):
        return (g['action'] == 'Clicked').sum() / (g['action'] != 'Ignored').sum() * 100
    
    res = ads.groupby('ad_id').apply(process).reset_index(name='ctr')
    return res.fillna(0).round(2).sort_values(['ctr', 'ad_id'], ascending=[False, True])
```