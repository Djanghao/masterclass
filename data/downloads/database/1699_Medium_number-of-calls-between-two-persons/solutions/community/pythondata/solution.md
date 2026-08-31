# Using Pandas

**Author:** Siddhant1512
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-calls-between-two-persons/solutions/6007585/](https://leetcode.com/problems/number-of-calls-between-two-persons/solutions/6007585/)

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

def number_of_calls(calls: pd.DataFrame) -> pd.DataFrame:
    calls['person1'] = calls[['from_id', 'to_id']].min(axis=1)
    calls['person2'] = calls[['from_id', 'to_id']].max(axis=1)

    agg_result = calls.groupby(['person1','person2']).agg(call_count=('duration', 'count'), total_duration=('duration', 'sum')).reset_index()
    
    return agg_result
```