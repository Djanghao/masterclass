# bitwise_and.reduce()

**Author:** zhangmanyuzmy
**Votes:** 1
**Link:** [https://leetcode.com/problems/bitwise-user-permissions-analysis/solutions/5423016/](https://leetcode.com/problems/bitwise-user-permissions-analysis/solutions/5423016/)

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

def analyze_permissions(user_permissions: pd.DataFrame) -> pd.DataFrame:
    # 1. compute common_perms
    common_perms = np.bitwise_and.reduce(user_permissions['permissions'])
    # 2. compute any_perms
    any_perms = np.bitwise_or.reduce(user_permissions['permissions'])
    # 3. return res 
    return pd.DataFrame(data = [[common_perms, any_perms]], columns = ['common_perms', 'any_perms'])
```