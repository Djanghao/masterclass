# simple np.where() solution

**Author:** KunPpBu
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-winner-university/solutions/4538191/](https://leetcode.com/problems/the-winner-university/solutions/4538191/)

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

def find_winner(new_york: pd.DataFrame, california: pd.DataFrame) -> pd.DataFrame:
    result = pd.DataFrame({'winner':''}, index= [0])
    result['winner'] = np.where(new_york.query("score>=90").shape[0] > california.query("score>=90").shape[0], 'New York University', np.where(new_york.query("score>=90").shape[0] < california.query("score>=90").shape[0], 'California University', 'No Winner'))
    return result
```