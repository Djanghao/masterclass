# Pandas 100% working solution

**Author:** d_sushkov
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-overlapping-shifts/solutions/5666959/](https://leetcode.com/problems/find-overlapping-shifts/solutions/5666959/)

---

# Code
```
import pandas as pd

def find_overlapping_shifts(employee_shifts: pd.DataFrame) -> pd.DataFrame:
    # Perform a self-merge to compare shifts within the same employee
    merged = employee_shifts.merge(
        employee_shifts,
        on='employee_id',
        suffixes=('_1', '_2')
    )
    
    # Filter the merged dataframe for overlapping shifts
    overlapping = merged[
        (merged['start_time_1'] < merged['start_time_2']) &
        (merged['end_time_1'] > merged['start_time_2'])
    ]
    
    # Count overlapping shifts for each employee
    result = overlapping.groupby('employee_id').size().reset_index(name='overlapping_shifts')
    
    # Order by employee_id
    result = result.sort_values(by='employee_id').reset_index(drop=True)
    
    return result    
```