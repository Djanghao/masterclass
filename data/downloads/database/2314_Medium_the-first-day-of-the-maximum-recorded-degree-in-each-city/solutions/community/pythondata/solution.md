# [pandas] sort first and then groupby

**Author:** cometolife
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-first-day-of-the-maximum-recorded-degree-in-each-city/solutions/4141660/](https://leetcode.com/problems/the-first-day-of-the-maximum-recorded-degree-in-each-city/solutions/4141660/)

---

1. sort([group_columns, sort_columns])
2. groupby([group_columns])
# Code
```
import pandas as pd

def find_the_first_day(weather: pd.DataFrame) -> pd.DataFrame:
    weather = weather.sort_values(by=['city_id', 'degree', 'day'], ascending=[True, False, True])
    return weather.groupby('city_id').head(1)
```