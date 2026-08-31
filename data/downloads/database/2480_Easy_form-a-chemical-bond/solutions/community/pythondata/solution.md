# Solution with cross merging

**Author:** Inveterate_Enthusiast
**Votes:** 0
**Link:** [https://leetcode.com/problems/form-a-chemical-bond/solutions/5629784/](https://leetcode.com/problems/form-a-chemical-bond/solutions/5629784/)

---

# Code on Python
```python
import pandas as pd

def form_bond(elements: pd.DataFrame) -> pd.DataFrame:
    return pd.merge(
        left=elements.loc[elements["type"] == "Metal", ["symbol"]].rename(columns={"symbol": "metal"}),
        right=elements.loc[elements["type"] == "Nonmetal", ["symbol"]].rename(columns={"symbol": "nonmetal"}),
        how="cross"
    )
```
---
# Code on PostgreSQL
```sql
-- Write your PostgreSQL query statement below
SELECT main.symbol AS metal, sub.symbol AS nonmetal
FROM (SELECT * FROM Elements WHERE type = 'Metal') AS main
CROSS JOIN
(SELECT * FROM Elements WHERE type = 'Nonmetal') AS sub;
```