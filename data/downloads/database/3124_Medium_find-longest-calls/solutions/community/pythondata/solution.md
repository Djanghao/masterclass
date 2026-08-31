# beats 100% | pd.to_datetime() + dt.strftime('%H:%M:%S')

**Author:** zhangmanyuzmy
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-longest-calls/solutions/5064011/](https://leetcode.com/problems/find-longest-calls/solutions/5064011/)

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

def find_longest_calls(contacts: pd.DataFrame, calls: pd.DataFrame) -> pd.DataFrame:
    # 1. merge 2 tables
    calls = calls.merge(contacts, how = 'left', left_on = 'contact_id', right_on = 'id')
    # 2. convert duration from int to datetime in seconds
    calls['duration'] = pd.to_datetime(calls['duration'], unit='s')
    # 3. format duration
    ## %H -- zero padded hours
    ## %M -- zero padded minutes
    ## %S -- zero padded seconds
    calls['duration_formatted'] = calls['duration'].dt.strftime('%H:%M:%S')
    # 4. return wanted columns and sorted
    incoming_df = calls[calls['type'] == 'incoming'].sort_values(by = ['type', 'duration_formatted', 'first_name'], ascending = [True, False, False]).head(3)
    outgoing_df = calls[calls['type'] == 'outgoing'].sort_values(by = ['type', 'duration_formatted', 'first_name'], ascending = [True, False, False]).head(3)
    # 5. concat and return
    return pd.concat([incoming_df[['first_name', 'type', 'duration_formatted']], outgoing_df[['first_name', 'type', 'duration_formatted']]])
```