# Easy way to handle

**Author:** Stanleyz98
**Votes:** 0
**Link:** [https://leetcode.com/problems/running-total-for-different-genders/solutions/5277194/](https://leetcode.com/problems/running-total-for-different-genders/solutions/5277194/)

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
```
import pandas as pd

def running_total(scores: pd.DataFrame) -> pd.DataFrame:
    scores.sort_values(by=['gender','day'],inplace=True)
    scores['total']=scores.groupby('gender')['score_points'].transform('cumsum')

    return scores[['gender','day','total']]
```