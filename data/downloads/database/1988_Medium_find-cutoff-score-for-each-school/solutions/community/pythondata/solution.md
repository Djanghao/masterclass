# Solution with grouping and windows func

**Author:** Inveterate_Enthusiast
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-cutoff-score-for-each-school/solutions/5837428/](https://leetcode.com/problems/find-cutoff-score-for-each-school/solutions/5837428/)

---

# Code on Python
```python
import pandas as pd

def find_cutoff_score(schools: pd.DataFrame, exam: pd.DataFrame) -> pd.DataFrame:
    crossed = pd.merge(
        left=schools,
        right=exam,
        how="cross"
    )
    crossed["greater"] = crossed["capacity"] >= crossed["student_count"]
    filtered = crossed.loc[crossed["greater"]].copy()
    filtered["our_rank"] = filtered.groupby(by="school_id", as_index=False)["score"].rank(method="dense", ascending="True")
    merged = pd.merge(
        left=schools,
        right=filtered.loc[filtered["our_rank"] == 1, ["school_id", "score"]],
        how="left",
        on="school_id"
    ).fillna((-1))
    return merged.drop(labels="capacity", axis=1)
```
---
# Code on PostgreSQL

```postgresql []
-- Write your PostgreSQL query statement below
WITH merged AS
    (
    SELECT main.school_id, sub.score, DENSE_RANK() OVER(PARTITION BY school_id ORDER BY score ASC) AS our_rank
    FROM Schools AS main
    LEFT JOIN
    Exam AS sub
    ON main.capacity >= sub.student_count
    )
SELECT main.school_id, COALESCE(sub.score, (-1)) AS score
FROM Schools AS main
LEFT JOIN
(SELECT * FROM merged WHERE our_rank = 1) AS sub
ON main.school_id = sub.school_id;
```