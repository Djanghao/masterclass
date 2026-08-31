# Solution with merging and grouping

**Author:** Inveterate_Enthusiast
**Votes:** 1
**Link:** [https://leetcode.com/problems/all-the-pairs-with-the-maximum-number-of-common-followers/solutions/5842550/](https://leetcode.com/problems/all-the-pairs-with-the-maximum-number-of-common-followers/solutions/5842550/)

---

# Code on Python
```python
import pandas as pd

def find_pairs(relations: pd.DataFrame) -> pd.DataFrame:
    merged = pd.merge(
        left=relations.rename(columns={"user_id": "user"}),
        right=relations.rename(columns={"user_id": "user"}),
        how="inner",
        on="follower_id",
        suffixes=("1_id", "2_id")
    ).query("user1_id < user2_id")
    grouped = merged.groupby(by=["user1_id", "user2_id"], as_index=False).agg(count=("follower_id", "count"))
    return grouped.loc[grouped["count"] == grouped["count"].max(), ["user1_id", "user2_id"]]
```
---
# Code on PostgreSQL
```postgresql []
-- Write your PostgreSQL query statement below
WITH merged AS
    (
    SELECT main.user_id AS user1_id, sub.user_id AS user2_id, main.follower_id
    FROM Relations AS main
    INNER JOIN
    Relations AS sub
    ON main.follower_id = sub.follower_id AND main.user_id < sub.user_id
    ),
grouped AS
    (
    SELECT user1_id, user2_id, COUNT(*) AS count
    FROM merged 
    GROUP BY user1_id, user2_id
    )
SELECT user1_id, user2_id
FROM grouped
WHERE count = (SELECT MAX(count) FROM grouped);
```