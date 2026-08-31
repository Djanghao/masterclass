# Pandas One-liner Straight-forward solution

**Author:** xeusclay
**Votes:** 0
**Link:** [https://leetcode.com/problems/low-quality-problems/solutions/6073361/](https://leetcode.com/problems/low-quality-problems/solutions/6073361/)

---



# Code
```pythondata []
import pandas as pd

def low_quality_problems(problems: pd.DataFrame) -> pd.DataFrame:
    return problems[problems.likes < problems.dislikes * 1.5][['problem_id']].sort_values(by='problem_id', ascending=True)
```