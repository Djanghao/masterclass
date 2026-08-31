# Solution with 1 CTE for SQL

**Author:** Inveterate_Enthusiast
**Votes:** 0
**Link:** [https://leetcode.com/problems/top-three-wineries/solutions/6123920/](https://leetcode.com/problems/top-three-wineries/solutions/6123920/)

---

# Code on Python
```python
import pandas as pd
import numpy as np

def top_three_wineries(wineries: pd.DataFrame) -> pd.DataFrame:
    grouped = (wineries
               .groupby(by=["winery", "country"], as_index=False)
               .agg(total_points=("points", "sum"))
               .sort_values(by=["total_points", "winery"], ascending=[False, True]))
    grouped["rank"] = grouped.groupby(by="country", as_index=False).transform("cumcount") + 1
    grouped["title"] = np.where(
        grouped["rank"] == 1, "top_winery",
        np.where(
            grouped["rank"] == 2, "second_winery",
            np.where(
                grouped["rank"] == 3, "third_winery",
                "0"
            )
        )
    )
    grouped["value"] = grouped.apply(lambda x: x["winery"] + " (" + str(x["total_points"]) + ")", axis=1)
    titles = ["top_winery", "second_winery", "third_winery"]
    pivot = grouped.loc[grouped["title"] != "0"].pivot_table(values="value", index="country", columns="title", aggfunc="max")
    for col in titles:
        if not pivot.get(col):
            pivot[col] = pd.NA
    pivot["second_winery"] = pivot.second_winery.fillna("No second winery")
    pivot["third_winery"] = pivot.third_winery.fillna("No third winery")
    pivot = pivot[titles]
    return pivot.reset_index().sort_values(by="country", ascending=True)
```
---
# Code on PostgreSQL
```postgresql []
-- Write your PostgreSQL query statement below
WITH grouped AS (
    SELECT
        winery,
        country,
        SUM(points) AS points,
        DENSE_RANK() OVER(PARTITION BY country ORDER BY SUM(points) DESC, winery ASC) AS our_rank
    FROM Wineries
    GROUP BY winery, country
)
SELECT
    country,
    COALESCE(
        MAX(
            CASE
                WHEN our_rank = 1 THEN CONCAT(winery, ' (', points, ')')
            END
        ),
        'No top winery'
    ) AS top_winery,
    COALESCE(
        MAX(
            CASE
                WHEN our_rank = 2 THEN CONCAT(winery, ' (', points, ')')
            END
        ),
        'No second winery'
    ) AS second_winery,
    COALESCE(
        MAX(
            CASE
                WHEN our_rank = 3 THEN CONCAT(winery, ' (', points, ')')
            END
        ),
        'No third winery'
    ) AS third_winery
FROM grouped

WHERE our_rank <= 3
GROUP BY country
ORDER BY country ASC;
```