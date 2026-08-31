# Beats 95% Pandas

**Author:** Zaidi9999
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-peak-calling-hours-for-each-city/solutions/5838222/](https://leetcode.com/problems/find-peak-calling-hours-for-each-city/solutions/5838222/)

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

def peak_calling_hours(calls: pd.DataFrame) -> pd.DataFrame:
    calls['call_time'] = calls['call_time'].dt.hour
    calls = calls.sort_values(by=['city','call_time'],ascending=[True,False])
    peak_calls = calls.groupby(['city','call_time'])['call_time'].size().reset_index(name='number_of_calls')
    peak_calls['rank'] = peak_calls.groupby('city')['number_of_calls'].rank(method='dense', ascending= False)
    peak_calls = peak_calls[peak_calls['rank']==1].rename(columns={'call_time':'peak_calling_hour'})
    # peak_calls['peak_calling_hour'] = peak_calls['peak_calling_hour'].astype(int)
    peak_calls = peak_calls.sort_values(by=['peak_calling_hour','city'],ascending=[False,False])
    return pd.DataFrame(peak_calls[['city','peak_calling_hour','number_of_calls']])
    
```