# Pandas 1-line

**Author:** true-detective
**Votes:** 4
**Link:** [https://leetcode.com/problems/change-null-values-in-a-table-to-the-previous-value/solutions/4100106/](https://leetcode.com/problems/change-null-values-in-a-table-to-the-previous-value/solutions/4100106/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
built-in method in `pandas`

# Code
```
import pandas as pd

def change_null_values(coffee_shop: pd.DataFrame) -> pd.DataFrame:
    return coffee_shop.fillna(method='ffill')
```