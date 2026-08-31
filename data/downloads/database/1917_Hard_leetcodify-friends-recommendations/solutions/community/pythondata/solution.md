# Solution with mergin and grouping

**Author:** Inveterate_Enthusiast
**Votes:** 0
**Link:** [https://leetcode.com/problems/leetcodify-friends-recommendations/solutions/6092849/](https://leetcode.com/problems/leetcodify-friends-recommendations/solutions/6092849/)

---

# Code on Python
```python
import pandas as pd

def recommend_friends(listens: pd.DataFrame, friendship: pd.DataFrame) -> pd.DataFrame:
    merged = pd.merge(
        left=listens,
        right=listens.rename(columns={"user_id": "recommended_id"}),
        how="inner",
        on=["song_id", "day"]
    ).query("user_id != recommended_id")

    concated_friendship = pd.concat([
        friendship.rename(columns={"user1_id": "user_id", "user2_id": "recommended_id"}),
        friendship.rename(columns={"user1_id": "recommended_id", "user2_id": "user_id"})
    ]).drop_duplicates(keep="first")
    concated_friendship["bool"] = 1

    merged_no_friends = pd.merge(
        left=merged,
        right=concated_friendship,
        how="left",
        on=["user_id", "recommended_id"]
    ).query("bool.isna()")

    merged_no_friends["count_songs"] = merged_no_friends.groupby(["user_id", "day", "recommended_id"], as_index=False)["song_id"].transform("nunique")
    filtered = merged_no_friends.loc[merged_no_friends["count_songs"] >= 3, ["user_id", "recommended_id"]].drop_duplicates(keep="first")
    return pd.concat([
        filtered,
        filtered.rename(columns={"recommended_id": "user_id", "user_id": "recommended_id"})[["user_id", "recommended_id"]]
    ]).drop_duplicates(keep="first")
```
---
# Code on PostgreSQL
```postgresql []
-- Write your PostgreSQL query statement below
SELECT DISTINCT
    main.user_id AS user_id,
    sub.user_id AS recommended_id
FROM Listens AS main

INNER JOIN Listens AS sub
    ON sub.song_id = main.song_id
    AND sub.day = main.day
    
LEFT JOIN (
    SELECT user1_id, user2_id
    FROM Friendship
    
    UNION ALL
    
    SELECT user2_id AS user1_id, user1_id AS user2_id
    FROM Friendship
) AS fri
    ON fri.user1_id = main.user_id
    AND fri.user2_id = sub.user_id
    
WHERE fri.user1_id IS NULL AND fri.user2_id IS NULL
AND NOT main.user_id = sub.user_id

GROUP BY main.user_id, sub.user_id, main.day
HAVING COUNT(DISTINCT main.song_id) >= 3;
```