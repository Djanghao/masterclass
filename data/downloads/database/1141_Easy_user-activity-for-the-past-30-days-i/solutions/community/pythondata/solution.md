# pandas || between & groupby || T/S: 99% / 99%

**Author:** Spaulding_
**Votes:** 11
**Link:** [https://leetcode.com/problems/user-activity-for-the-past-30-days-i/solutions/4220022/](https://leetcode.com/problems/user-activity-for-the-past-30-days-i/solutions/4220022/)

---

```
import pandas as pd

def user_activity(activity: pd.DataFrame) -> pd.DataFrame:

    return (activity[activity
                    .activity_date.between("2019-06-28",
                                           "2019-07-27")]

                    .rename(columns = {'activity_date': 'day',
                                       'user_id': 'active_users'})

                    .groupby('day')['active_users']
                    .nunique().reset_index())
```
[https://leetcode.com/problems/user-activity-for-the-past-30-days-i/submissions/1086355922/](http://)



I could be wrong, but I think that time complexity is *O*(*N* log *N*) and space complexity is *O*(*N*), in which *N* ~ `len(activity)`.