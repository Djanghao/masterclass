# Solution with dates that I hate

**Author:** Inveterate_Enthusiast
**Votes:** 0
**Link:** [https://leetcode.com/problems/second-day-verification/solutions/5763768/](https://leetcode.com/problems/second-day-verification/solutions/5763768/)

---

# Code on Python
```python
import pandas as pd

def find_second_day_signups(emails: pd.DataFrame, texts: pd.DataFrame) -> pd.DataFrame:
    emails["action_date"] = (pd.to_datetime(emails["signup_date"]) + pd.Timedelta(value=1, unit="d")).dt.normalize()
    texts["action_date"] = texts["action_date"].dt.normalize()
    merged = pd.merge(
        left=emails,
        right=texts,
        how="inner",
        on=["email_id", "action_date"]
    )
    return (merged
            .loc[merged["signup_action"] == "Verified", ["user_id"]]
            .drop_duplicates(subset="user_id", keep="first")
            .sort_values(by="user_id", ascending=True))
```
---
# Code on PostgreSQL
```postgresql []
-- Write your PostgreSQL query statement below
SELECT DISTINCT main.user_id
FROM emails AS main
INNER JOIN
(SELECT * FROM texts WHERE signup_action = 'Verified') AS sub
ON sub.action_date::DATE = (main.signup_date::DATE + INTERVAL '1 DAYS') AND main.email_id = sub.email_id
ORDER BY main.user_id ASC;
```