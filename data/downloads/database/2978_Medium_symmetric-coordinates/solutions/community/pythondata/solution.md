# Solution with rows numbers and merging

**Author:** Inveterate_Enthusiast
**Votes:** 0
**Link:** [https://leetcode.com/problems/symmetric-coordinates/solutions/6026750/](https://leetcode.com/problems/symmetric-coordinates/solutions/6026750/)

---

# Code on Python
```python
import pandas as pd

def symmetric_pairs(coordinates: pd.DataFrame) -> pd.DataFrame:
    coordinates = coordinates.reset_index().rename(columns={"index": "row"})
    merged = pd.merge(
        left=coordinates.rename(columns={"X": "X1", "Y": "Y1", "row": "row1"}),
        right=coordinates.rename(columns={"X": "X2","Y": "Y2", "row": "row2"}),
        how="cross"
    )
    filtered = merged.loc[
        (merged["X1"] == merged["Y2"])
        &
        (merged["Y1"] == merged["X2"])
        &
        (merged["X1"] <= merged["Y1"])
        & ~(merged["row1"] == merged["row2"])
    ]
    return (filtered[["X1", "Y1"]]
            .drop_duplicates(keep="first")
            .rename(columns={"X1": "x", "Y1": "y"})
            .sort_values(by=["x", "y"], ascending=[True, True]))
```
---
# Code on PostgreSQL
```postgresql []
-- Write your PostgreSQL query statement below
WITH with_row AS (
    SELECT
        *,
        ROW_NUMBER() OVER() AS our_row
    FROM Coordinates
)
SELECT DISTINCT
    our_1.X,
    our_1.Y
FROM with_row AS our_1

INNER JOIN with_row AS our_2
ON our_2.X = our_1.Y
AND our_2.Y = our_1.X
AND our_2.our_row <> our_1.our_row

WHERE our_1.X <= our_1.Y;
```