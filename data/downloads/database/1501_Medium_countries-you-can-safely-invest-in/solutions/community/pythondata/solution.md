# Beats 96% memory

**Author:** oamenmodupe
**Votes:** 0
**Link:** [https://leetcode.com/problems/countries-you-can-safely-invest-in/solutions/6132040/](https://leetcode.com/problems/countries-you-can-safely-invest-in/solutions/6132040/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```pythondata []
import pandas as pd

def find_safe_countries(person: pd.DataFrame, country: pd.DataFrame, calls: pd.DataFrame) -> pd.DataFrame:
    calls_x = calls.drop(['caller_id'], axis = 1).rename(columns = {'callee_id':'id'})

    calls_y = calls.drop(['callee_id'], axis = 1).rename(columns = {'caller_id':'id'})

    new_calls = pd.concat([calls_x, calls_y], axis = 0)

    global_avg = new_calls['duration'].mean()

    person['country_code'] = person['phone_number'].str[:3]

    country = country.rename(columns = {'name':'country'})

    merged_v1 = pd.merge(person, country, on = 'country_code', how = 'left')

    merged_v2 = pd.merge(merged_v1, new_calls, on = 'id', how = 'left')

    country_avg = merged_v2.groupby('country', as_index = False)['duration'].mean()

    return country_avg[country_avg['duration']>global_avg][['country']]
```