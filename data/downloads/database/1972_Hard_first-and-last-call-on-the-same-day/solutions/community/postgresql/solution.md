# Solution with merging and window func

**Author:** Inveterate_Enthusiast
**Votes:** 0
**Link:** [https://leetcode.com/problems/first-and-last-call-on-the-same-day/solutions/6092908/](https://leetcode.com/problems/first-and-last-call-on-the-same-day/solutions/6092908/)

---

# Code on Python
```pythondata []
import pandas as pd

def same_day_calls(calls: pd.DataFrame) -> pd.DataFrame:
    concated = pd.concat([
        calls,
        calls.rename(columns={"caller_id" : "recipient_id", "recipient_id": "caller_id"})[["caller_id", "recipient_id", "call_time"]]
    ])
    concated["date"] = concated["call_time"].dt.date
    concated["first_call"] = concated.groupby(by=["caller_id", "date"], as_index=False)["call_time"].rank(method="dense", ascending=True)
    concated["last_call"] = concated.groupby(by=["caller_id", "date"], as_index=False)["call_time"].rank(method="dense", ascending=False)
    merged = pd.merge(
        left=concated,
        right=concated,
        how="inner",
        left_on=["caller_id", "recipient_id", "first_call"],
        right_on=["caller_id", "recipient_id", "last_call"],
        suffixes=("_first", "_last")
    ).query("(first_call_first == 1) & (last_call_last == 1)")
    return merged[["caller_id"]].rename(columns={"caller_id": "user_id"}).drop_duplicates(keep="first")
```
---
# Code on PostgreSQL
```sql
WITH unioned AS (
    SELECT
        caller_id,
        recipient_id,
        call_time::DATE AS date,
        call_time
    FROM Calls

    UNION ALL

    SELECT
        recipient_id AS caller_id,
        caller_id AS recipient_id,
        call_time::DATE AS date,
        call_time
    FROM Calls
),
with_windows AS (
    SELECT
        caller_id,
        recipient_id,
        date,
        DENSE_RANK() OVER(PARTITION BY caller_id, date ORDER BY call_time ASC) AS first_call,
        DENSE_RANK() OVER(PARTITION BY caller_id, date ORDER BY call_time DESC) AS last_call
    FROM unioned
)
SELECT DISTINCT
    main.caller_id AS user_id
FROM with_windows AS main

INNER JOIN with_windows AS sub
    ON sub.caller_id = main.caller_id
    AND sub.recipient_id = main.recipient_id
    AND sub.first_call = 1
    AND main.last_call = 1;
```