# Pandas Clean

**Author:** true-detective
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-candidates-for-data-scientist-position/solutions/4783316/](https://leetcode.com/problems/find-candidates-for-data-scientist-position/solutions/4783316/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
filter groups that have all three proficiencies then drop the duplicate ids.

# Code
```
import pandas as pd

def find_candidates(candidates: pd.DataFrame) -> pd.DataFrame:
    proficiency = ['Python', 'Tableau', 'PostgreSQL']
    candidates = candidates.groupby('candidate_id').filter(lambda g: g['skill'].isin(proficiency).sum() == 3)
    return candidates[['candidate_id']].drop_duplicates().sort_values('candidate_id')
```