# Pandas

**Author:** Prachi_404
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-artist-occurrences-on-spotify-ranking-list/solutions/6073441/](https://leetcode.com/problems/count-artist-occurrences-on-spotify-ranking-list/solutions/6073441/)

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

def count_occurrences(spotify: pd.DataFrame) -> pd.DataFrame:
    df= spotify.groupby('artist')['artist'].size().reset_index(name='occurrences')
    return df.sort_values(by=['occurrences','artist'], ascending=[False,True])
```