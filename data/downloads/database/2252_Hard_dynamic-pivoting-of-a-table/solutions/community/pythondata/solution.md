# 1 line Pandas

**Author:** true-detective
**Votes:** 2
**Link:** [https://leetcode.com/problems/dynamic-pivoting-of-a-table/solutions/4197926/](https://leetcode.com/problems/dynamic-pivoting-of-a-table/solutions/4197926/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This is the literal definition of `pivot_table`.

# Code
```
import pandas as pd

def dynamic_pivoting_table(products: pd.DataFrame) -> pd.DataFrame:
    return products.pivot_table(index='product_id', columns='store', values='price', aggfunc='sum').reset_index()
```