# Solution with ranking and pd.to_datetime

**Author:** Inveterate_Enthusiast
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-longest-calls/solutions/6063134/](https://leetcode.com/problems/find-longest-calls/solutions/6063134/)

---

# Code on Python
```python
import pandas as pd

def find_longest_calls(contacts: pd.DataFrame, calls: pd.DataFrame) -> pd.DataFrame:
    calls["rank"] = calls.groupby(by="type", as_index=False)["duration"].rank(method="min", ascending=False)
    merged = pd.merge(
        left=calls.loc[calls["rank"] <= 3].rename(columns={"contact_id": "id"}),
        right=contacts,
        how="left",
        on="id"
    )
    merged["duration_formatted"] = pd.to_datetime(merged["duration"], unit="s").dt.time
    return merged[["first_name", "type", "duration_formatted"]].sort_values(by=["type", "duration_formatted", "first_name"], ascending=[False, False, False])
```
---
# Code on PostgreSQL
```postgresql []
-- Write your PostgreSQL query statement below
WITH merged AS (
    SELECT
        sub.first_name,
        main.type,
        TO_CHAR(CONCAT(main.duration, ' SECONDS')::INTERVAL, 'HH24:MI:SS') AS duration_formatted,
        DENSE_RANK() OVER(PARTITION BY main.type ORDER BY main.duration DESC) AS our_rank
    FROM Calls AS main

    LEFT JOIN Contacts AS sub
        ON main.contact_id = sub.id
)
SELECT
    first_name,
    type,
    duration_formatted
FROM merged

WHERE our_rank <= 3
ORDER BY type DESC, duration_formatted DESC, first_name DESC;
```