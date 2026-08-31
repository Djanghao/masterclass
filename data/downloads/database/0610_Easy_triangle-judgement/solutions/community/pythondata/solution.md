# Pandas, *using lambda*, easy-understanding Solution!

**Author:** don_masih
**Votes:** 14
**Link:** [https://leetcode.com/problems/triangle-judgement/solutions/4204458/](https://leetcode.com/problems/triangle-judgement/solutions/4204458/)

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

def triangle_judgement(triangle: pd.DataFrame) -> pd.DataFrame:
    triangle['triangle'] = triangle.apply(
        lambda t: 'Yes' if ((t.x + t.y > t.z) & (t.y + t.z > t.x) & (t.x + t.z > t.y)) else 'No', axis=1)

    return triangle