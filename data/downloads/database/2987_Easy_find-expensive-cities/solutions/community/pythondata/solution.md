# Pandas

**Author:** Prachi_404
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-expensive-cities/solutions/6073586/](https://leetcode.com/problems/find-expensive-cities/solutions/6073586/)

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

def find_expensive_cities(listings: pd.DataFrame) -> pd.DataFrame:
    total_average = listings['price'].mean()
    avg_per_city = listings.groupby('city')['price'].mean()

    listings['avg_per_city'] = listings['city'].map(avg_per_city)

    result = listings[listings['avg_per_city'] > total_average]

    return result[['city']].drop_duplicates().sort_values(by='city')


    

```