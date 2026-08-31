# Code with set and ranking

**Author:** Inveterate_Enthusiast
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-candidates-for-data-scientist-position-ii/solutions/6051017/](https://leetcode.com/problems/find-candidates-for-data-scientist-position-ii/solutions/6051017/)

---

# Code on Python
```python
import pandas as pd
import numpy as np

def find_best_candidates(candidates: pd.DataFrame, projects: pd.DataFrame) -> pd.DataFrame:
    candidates["can_set"] = candidates["candidate_id"].map(candidates.groupby(by="candidate_id")["skill"].apply(set))
    projects["pro_set"] = projects["project_id"].map(projects.groupby(by="project_id")["skill"].apply(set))
    merged = pd.merge(
        left=projects,
        right=candidates,
        how="left",
        on="skill"
    )
    filtered = merged.loc[merged["pro_set"] <= merged["can_set"]].copy()
    filtered["score"] = np.where(
        filtered["proficiency"] > filtered["importance"], 10,
        np.where(
            filtered["proficiency"] < filtered["importance"], (-5),
            0
        )
    )
    grouped = filtered.groupby(by=["project_id", "candidate_id"], as_index=False).agg(score=("score", lambda x: 100 + x.sum()))
    grouped.sort_values(by=["project_id", "score", "candidate_id"], ascending=[True, False, True], inplace=True)
    grouped["rank"] = grouped.groupby(by="project_id", as_index=False).cumcount() + 1
    return grouped.loc[grouped["rank"] == 1, ["project_id", "candidate_id", "score"]]
```
---
# Code on PostgreSQL
```postgresql []
-- Write your PostgreSQL query statement below
WITH merged AS (
    SELECT
        pro.project_id,
        can.candidate_id,
        pro.skill,
        pro.importance,
        can.proficiency,
        pro.pro_count,
        COUNT(can.skill) OVER(PARTITION BY project_id, candidate_id) AS can_count
    FROM (
        SELECT
            *,
            COUNT(skill) OVER(PARTITION BY project_id) AS pro_count
        FROM Projects
    ) AS pro

    LEFT JOIN Candidates AS can
        ON can.skill = pro.skill
),
filtered AS (
    SELECT
        project_id,
        candidate_id,
        100 + SUM(
            CASE
                WHEN proficiency > importance THEN 10
                WHEN proficiency < importance THEN (-5)
                ELSE 0
            END
        ) AS score
    FROM merged
    WHERE pro_count <= can_count
    GROUP BY project_id, candidate_id
),
ranked AS (
    SELECT
        *,
        DENSE_RANK() OVER(PARTITION BY project_id ORDER BY score DESC, candidate_id ASC) AS our_rank
    FROM filtered
)
SELECT
    project_id,
    candidate_id,
    score
FROM ranked
WHERE our_rank = 1
ORDER BY project_id ASC;
```