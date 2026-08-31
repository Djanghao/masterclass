# Pandas 1 line

**Author:** NotADwarf
**Votes:** 3
**Link:** [https://leetcode.com/problems/winning-candidate/solutions/4149656/](https://leetcode.com/problems/winning-candidate/solutions/4149656/)

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

def winning_candidate(candidate: pd.DataFrame, vote: pd.DataFrame) -> pd.DataFrame:
    return candidate.loc[candidate.id.isin(vote.groupby('candidateId').count().idxmax()),['name']]
```