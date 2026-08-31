# beats 96% | step by step w/ comment | cumsum()

**Author:** zhangmanyuzmy
**Votes:** 0
**Link:** [https://leetcode.com/problems/hopper-company-queries-i/solutions/5060349/](https://leetcode.com/problems/hopper-company-queries-i/solutions/5060349/)

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

def hopper_company(drivers: pd.DataFrame, rides: pd.DataFrame, accepted_rides: pd.DataFrame) -> pd.DataFrame:
    # 1. create months df
    res = pd.DataFrame(data = [i for i in range(1, 13)], columns = ['month'])
    # 2. filter drivers active in 2020 and get active month
    drivers = drivers[drivers['join_date'].dt.year <= 2020]
    drivers['active_month'] = np.where(drivers['join_date'] < '2020-01-01', 1, drivers['join_date'].dt.month)
    # 3. count the number of active drivers
    res_drivers = drivers.groupby('active_month')['driver_id'].count().reset_index(name = 'active_drivers_cur_month')
    # 4. merge drivers with accepted_rides and filter
    accepted_rides = accepted_rides.merge(rides, how = 'left', on = 'ride_id')[['ride_id', 'requested_at']]
    accepted_rides = accepted_rides[accepted_rides['requested_at'].dt.year == 2020]
    # 5. get requested month
    accepted_rides['requested_month'] = accepted_rides['requested_at'].dt.month
    # 6. count accepted rides per month
    res_rides = accepted_rides.groupby('requested_month')['ride_id'].count().reset_index(name = 'accepted_rides')
    # 7. merge drivers part result and rides part result with months
    res = res.merge(res_drivers, how = 'left', left_on = 'month', right_on = 'active_month').fillna(0)
    res['active_drivers'] = res['active_drivers_cur_month'].cumsum()
    res = res.merge(res_rides, how = 'left', left_on = 'month', right_on = 'requested_month').fillna(0)
    return res.sort_values(by = 'month', ascending = True)[['month', 'active_drivers', 'accepted_rides']]
```