# [pandas] shift, df['time_stamp1']-df['time_stamp2']).dt.total_seconds()

**Author:** cometolife
**Votes:** 1
**Link:** [https://leetcode.com/problems/users-that-actively-request-confirmation-messages/solutions/4195896/](https://leetcode.com/problems/users-that-actively-request-confirmation-messages/solutions/4195896/)

---

# Code
```
import pandas as pd

def find_requesting_users(signups: pd.DataFrame, confirmations: pd.DataFrame) -> pd.DataFrame:
    df = confirmations.sort_values(by=['user_id', 'time_stamp'])
    df['prev_timestamp'] = df.groupby('user_id')['time_stamp'].shift(1)
    df = df[(df['prev_timestamp'].notna()) & ((df['time_stamp']-df['prev_timestamp']).dt.total_seconds() <= 24*60*60)]

    return df[['user_id']].drop_duplicates(subset='user_id')

    
```