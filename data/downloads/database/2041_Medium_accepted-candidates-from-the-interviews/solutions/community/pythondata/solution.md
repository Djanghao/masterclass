# Pandas clean code; merge + groupby + query

**Author:** tsung_pct
**Votes:** 2
**Link:** [https://leetcode.com/problems/accepted-candidates-from-the-interviews/solutions/4363509/](https://leetcode.com/problems/accepted-candidates-from-the-interviews/solutions/4363509/)

---

```
import pandas as pd

def accepted_candidates(candidates: pd.DataFrame, rounds: pd.DataFrame) -> pd.DataFrame:
    candidates.query("years_of_exp >= 2 ", inplace=True)
    output = (candidates
        .merge(rounds, on='interview_id')
        .groupby("candidate_id", as_index=False)
        .agg(sum_score = ("score", 'sum'))
        .query(" sum_score > 15 ")
        [['candidate_id']]
    )
    return output
```