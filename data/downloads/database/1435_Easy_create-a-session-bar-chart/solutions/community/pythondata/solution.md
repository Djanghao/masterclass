# pandas CUT

**Author:** true-detective
**Votes:** 4
**Link:** [https://leetcode.com/problems/create-a-session-bar-chart/solutions/4064005/](https://leetcode.com/problems/create-a-session-bar-chart/solutions/4064005/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The `cut` method in pandas is specifically designed to achieve the same purpose. meaning to convert numerical values to categorical values using bins.

The lower bound is `0` but the upper bound can be arbitrarily large depending on the test cases, feel free to change `2000` to an arbitrary number if the test cases don't pass in the future.

# Code
```
import pandas as pd

def create_bar_chart(sessions: pd.DataFrame) -> pd.DataFrame:
    return pd.cut(
        sessions.duration, 
        labels=['[0-5>', '[5-10>', '[10-15>', '15 or more'], 
        bins=[0, 300, 600, 900, 2000]).value_counts().reset_index(name='total').rename(columns={'duration': 'bin'})
```