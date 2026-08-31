# Solution with merging

**Author:** Inveterate_Enthusiast
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-apples-and-oranges/solutions/5796105/](https://leetcode.com/problems/count-apples-and-oranges/solutions/5796105/)

---

# Code on Python
```python
import pandas as pd

def count_apples_and_oranges(boxes: pd.DataFrame, chests: pd.DataFrame) -> pd.DataFrame:
    merged = pd.merge(
        left=boxes,
        right=chests,
        how="left",
        on="chest_id",
        suffixes=("_box", "_chest")
    )
    apples = (merged["apple_count_box"].sum() + merged["apple_count_chest"].sum())
    oranges = (merged["orange_count_box"].sum() + merged["orange_count_chest"].sum())
    return pd.DataFrame({
        "apple_count": [apples],
        "orange_count": [oranges]
    })
```
---
# Code on PostgreSQL
```postgresql []
-- Write your PostgreSQL query statement below
SELECT 
(COALESCE(SUM(main.apple_count), 0) + (COALESCE(SUM(sub.apple_count), 0))) AS apple_count,
(COALESCE(SUM(main.orange_count), 0) + COALESCE(SUM(sub.orange_count), 0)) AS orange_count
FROM Boxes AS main
LEFT JOIN 
Chests AS sub
ON main.chest_id = sub.chest_id;
```