# Not easy solution

**Author:** Inveterate_Enthusiast
**Votes:** 0
**Link:** [https://leetcode.com/problems/biggest-window-between-visits/solutions/5790010/](https://leetcode.com/problems/biggest-window-between-visits/solutions/5790010/)

---

# Code on Python
```python
import pandas as pd
from datetime import datetime

def grouping(df: pd.Series) -> pd.Series:
    today = datetime(2021, 1, 1)
    df["past_date"] = df["visit_date"].shift(1)
    df["diff"] = (df["visit_date"] - df["past_date"]).dt.days.fillna(0)
    return pd.Series(data=max(df["diff"].max(), (today - df["visit_date"].max()).days), index=["biggest_window"])

def biggest_window(user_visits: pd.DataFrame) -> pd.DataFrame:
    if user_visits.empty:
        return pd.DataFrame({
            "user_id": list(),
            "biggest_window": list()
        })
    user_visits.sort_values(by="visit_date", ascending=True, inplace=True)
    grouped = user_visits.groupby(by="user_id", as_index=True).apply(grouping, include_groups=False).reset_index()
    return grouped.sort_values(by="user_id", ascending=True)
```
```python
import pandas as pd
from datetime import datetime

def biggest_window(user_visits: pd.DataFrame) -> pd.DataFrame:
    today = datetime(2021, 1, 1)
    added = pd.concat(
        [user_visits,
         pd.DataFrame(columns=user_visits.columns,
                      data=list(
                          map(
                              list, zip(*[
                                  (x := user_visits["user_id"].unique()),
                                  [today] * len(x)
                              ])
                          ))
                      )
         ]
    ).sort_values(by=["user_id", "visit_date"], ascending=[True, True])
    added["past_date"] = added.groupby(by="user_id", as_index=False)["visit_date"].shift(1)
    added["diff"] = (added["visit_date"] - added["past_date"]).dt.days
    return added.groupby(by="user_id", as_index=False).agg(biggest_window=("diff", "max")).sort_values(by="user_id", ascending=True)
```
---
# Code PostgreSQL
```postgresql []
-- Write your PostgreSQL query statement below
WITH added AS
    (
    SELECT *
    FROM UserVisits

    UNION ALL

    SELECT DISTINCT(user_id), '2021-1-1'::DATE AS visit_date
    FROM UserVisits
    ),
calculated AS
    (
    SELECT *,
    ((EXTRACT(EPOCH FROM (visit_date::TIMESTAMP - LAG(visit_date::TIMESTAMP, 1) OVER (PARTITION BY user_id ORDER BY visit_date ASC))))::NUMERIC / (60 * 60 * 24)::NUMERIC)::INT AS diff
    FROM added
    )
SELECT user_id, MAX(diff) AS biggest_window
FROM calculated
GROUP BY user_id
ORDER BY user_id ASC;
```