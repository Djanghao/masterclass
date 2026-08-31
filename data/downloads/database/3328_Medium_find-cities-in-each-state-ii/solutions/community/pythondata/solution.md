# pandas ||| count, sort, filter ||

**Author:** Spaulding_
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-cities-in-each-state-ii/solutions/5944933/](https://leetcode.com/problems/find-cities-in-each-state-ii/solutions/5944933/)

---


```pythondata []
import pandas as pd

def state_city_analysis(cities: pd.DataFrame) -> pd.DataFrame:

                            # Group by state, then a) sort and join that state's cities; and
                            # (b) count each state's cities
    df = (cities.groupby('state')
               .agg(cities=('city', lambda x: ', '.join(sorted(x))),
                    city_count = ('city', 'size') ).reset_index())

                            # Count the cities that have the same initial as the state.
    df['matching_letter_count'] = df.apply(
        lambda row: sum(city.startswith(row['state'][0]) for city in row['cities'].split(', ')), axis=1)

                            # Filter the states based on the problems conditions
    df = df[(df.city_count > 2) & (df.matching_letter_count > 0)]

                            # Sort and filter the columns.
    return (df.sort_values(['matching_letter_count', 'state'], ascending = [0,1])
              .reset_index(drop = True).iloc[:,[0,1,3]])
    
```
[https://leetcode.com/problems/find-cities-in-each-state-ii/submissions/1428822130/](https://leetcode.com/problems/find-cities-in-each-state-ii/submissions/1428822130/)