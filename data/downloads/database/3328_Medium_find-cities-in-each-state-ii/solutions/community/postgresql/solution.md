# Solution with grouping

**Author:** Inveterate_Enthusiast
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-cities-in-each-state-ii/solutions/6045678/](https://leetcode.com/problems/find-cities-in-each-state-ii/solutions/6045678/)

---

# Code on Pandas
```python
import pandas as pd

def state_city_analysis(cities: pd.DataFrame) -> pd.DataFrame:
    cities["count"] = cities.groupby(by="state", as_index=False)["city"].transform("count")
    cities["first_letter_match"] = cities["city"].str[0] == cities["state"].str[0]
    grouped = (cities
               .loc[cities["count"] >= 3]
               .groupby(by="state", as_index=False)
               .agg(
        cities=("city", lambda x: ", ".join(sorted(x))),
        matching_letter_count=("first_letter_match", "sum")))
    return grouped.loc[grouped["matching_letter_count"] > 0].sort_values(by=["matching_letter_count", "state"], ascending=[False, True])
```
---
# Code on PostgreSQL
```postgresql []
-- Write your PostgreSQL query statement below
WITH sub AS (
    SELECT
        *,
        COUNT(cities) OVER(PARTITION BY state) AS cities_count,
        (CASE WHEN LEFT(city, 1) = LEFT(state, 1) THEN 1 ELSE 0 END) AS matching_letter_count
    FROM cities
)
SELECT
    state,
    STRING_AGG(city, ', ' ORDER BY city ASC) AS cities,
    SUM(matching_letter_count) AS matching_letter_count
FROM sub
WHERE cities_count >= 3
GROUP BY state
HAVING SUM(matching_letter_count) > 0
ORDER BY matching_letter_count DESC, state ASC;
```