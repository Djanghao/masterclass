# I wanted sleep very much :(

**Author:** Inveterate_Enthusiast
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-accounts-that-did-not-stream/solutions/5883615/](https://leetcode.com/problems/number-of-accounts-that-did-not-stream/solutions/5883615/)

---

# Code on Python
```python
import pandas as pd

def find_target_accounts(subscriptions: pd.DataFrame, streams: pd.DataFrame) -> pd.DataFrame:
    tw = 2021
    streams["year"] = pd.to_datetime(streams["stream_date"]).dt.year
    new_grouped = streams.loc[streams["year"] == tw].copy()
    subscriptions["start_year"] = pd.to_datetime(subscriptions["start_date"]).dt.year
    subscriptions["end_year"] = pd.to_datetime(subscriptions["end_date"]).dt.year
    filtered = subscriptions.loc[
        (subscriptions["start_year"] == tw) | (subscriptions["end_year"] == tw)
    ].copy()
    merged = pd.merge(
        left=filtered,
        right=new_grouped,
        how="inner",
        on="account_id"
    )
    new_merged = merged.loc[
        (merged["year"] <= merged["end_year"]) | (merged["year"] >= merged["start_year"])
    ].copy()
    merged_grouped = new_merged.groupby(by="account_id", as_index=False).agg(count=("session_id", "nunique"))
    new_merged = pd.merge(
        left=filtered,
        right=merged_grouped,
        how="left",
        on="account_id"
    )
    return pd.DataFrame({
        "accounts_count": [new_merged.loc[new_merged["count"].isna()].shape[0]]
    })
```
---
# Code on PostgreSQL
```postgresql []
-- Write your PostgreSQL query statement below
WITH sub_with_years AS (
    SELECT
        *,
        EXTRACT(YEAR FROM start_date) AS start_year,
        EXTRACT(YEAR FROM end_date) AS end_year
    FROM Subscriptions
),
filtered AS (
    SELECT * FROM sub_with_years WHERE (start_year <= 2021) AND (end_year >= 2021)
),
streams_with_years AS (
    SELECT
        *,
        EXTRACT(YEAR FROM stream_date) AS year
    FROM Streams
),
have_stream AS (
    SELECT
        main.account_id,
        COUNT(DISTINCT sub.session_id) AS count
        FROM filtered AS main
        LEFT JOIN
        (
            SELECT * FROM streams_with_years WHERE year = 2021
        )
        AS sub
        ON main.account_id = sub.account_id AND ((sub.year >= main.start_year) OR (sub.year <= main.end_year))
        GROUP BY main.account_id
),
merged AS (
    SELECT
        main.account_id,
        COALESCE(sub.count, 0) AS count
        FROM filtered AS main
        LEFT JOIN
        have_stream AS sub
        ON main.account_id = sub.account_id
)
SELECT COUNT(DISTINCT account_id) AS accounts_count
FROM merged
WHERE count = 0;
```