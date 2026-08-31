# pandas simple solution

**Author:** dhznsdl
**Votes:** 12
**Link:** [https://leetcode.com/problems/swap-sex-of-employees/solutions/4067071/](https://leetcode.com/problems/swap-sex-of-employees/solutions/4067071/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
use dataframe function - replace

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import pandas as pd

def swap_salary(salary: pd.DataFrame) -> pd.DataFrame:
    return salary.replace({'f':'m', 'm':'f'})
```