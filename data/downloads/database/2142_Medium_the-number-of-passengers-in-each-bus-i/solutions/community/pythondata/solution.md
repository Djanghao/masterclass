# Pandas Solution

**Author:** Zaidi9999
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-number-of-passengers-in-each-bus-i/solutions/5631194/](https://leetcode.com/problems/the-number-of-passengers-in-each-bus-i/solutions/5631194/)

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
```
import pandas as pd

def count_passengers_in_bus(buses: pd.DataFrame, passengers: pd.DataFrame) -> pd.DataFrame:
    combined_data=pd.merge(buses, passengers, how='cross', suffixes=('_bus', '_passenger'))
    eligible_passengers=combined_data[combined_data['arrival_time_passenger']<=combined_data['arrival_time_bus']]
    earliest_bus_for_passenger=eligible_passengers.sort_values(by='arrival_time_bus').drop_duplicates('passenger_id')
    passenger_count_per_bus=earliest_bus_for_passenger.groupby('bus_id').size().reset_index(name='passengers_cnt')
    final_result=pd.merge(passenger_count_per_bus, buses, on='bus_id', how='right').fillna(0).sort_values(by='bus_id')
    return final_result[['bus_id','passengers_cnt']]

```