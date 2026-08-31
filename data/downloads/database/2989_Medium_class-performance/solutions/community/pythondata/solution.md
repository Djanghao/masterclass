# Easy Pandas

**Author:** true-detective
**Votes:** 2
**Link:** [https://leetcode.com/problems/class-performance/solutions/4730287/](https://leetcode.com/problems/class-performance/solutions/4730287/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Just add thoses columns and subtract the min from the max.

# Code
```
import pandas as pd

def class_performance(scores: pd.DataFrame) -> pd.DataFrame:
    total = scores.assignment1 + scores.assignment2 + scores.assignment3
    return pd.DataFrame({
        'difference_in_score': [total.max() - total.min()]
    })
```