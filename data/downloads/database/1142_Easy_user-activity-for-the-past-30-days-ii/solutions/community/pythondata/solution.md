# Solution Pandas (Beat 100%)

**Author:** mlearngo
**Votes:** 1
**Link:** [https://leetcode.com/problems/user-activity-for-the-past-30-days-ii/solutions/4070205/](https://leetcode.com/problems/user-activity-for-the-past-30-days-ii/solutions/4070205/)

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

def user_activity(activity: pd.DataFrame) -> pd.DataFrame:
    start_date = '2019-06-28'
    end_date = '2019-07-27'
    df = activity[(activity['activity_date'] >= start_date) & (activity['activity_date'] <= end_date)]
    
    df_user = df.groupby('user_id')['session_id'].nunique()
    
    df_average = df_user.mean()
    df_average = round(df_average, 2) if not pd.isna(df_average) else 0.00
    
    # Create result dataframe
    result = pd.DataFrame({'average_df_user': [df_average]})
    
    return result

```