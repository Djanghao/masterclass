# 🔥

**Author:** zxCyrus
**Votes:** 1
**Link:** [https://leetcode.com/problems/new-users-daily-count/solutions/5813577/](https://leetcode.com/problems/new-users-daily-count/solutions/5813577/)

---

# Code
```pythondata []
import pandas as pd

def new_users_daily_count(traffic: pd.DataFrame) -> pd.DataFrame:
    df = traffic[traffic['activity']=='login']
    df = df.groupby('user_id', as_index=False).agg(login_date=('activity_date','min'))
    df = df.loc[df.login_date + pd.DateOffset(90) >= '2019-06-30']
    result = df.groupby('login_date')['user_id'].count().reset_index(name='user_count')


    return result
```