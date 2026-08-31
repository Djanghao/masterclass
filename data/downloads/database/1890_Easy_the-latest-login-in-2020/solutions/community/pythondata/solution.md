# pandas || 2 lines, Counter || T/S: 92% / 99%

**Author:** Spaulding_
**Votes:** 10
**Link:** [https://leetcode.com/problems/the-latest-login-in-2020/solutions/5186356/](https://leetcode.com/problems/the-latest-login-in-2020/solutions/5186356/)

---

```
import pandas as pd

def latest_login(logins: pd.DataFrame) -> pd.DataFrame:

    df = logins[logins.time_stamp.dt.strftime('%Y') == '2020']

    return df.groupby('user_id')['time_stamp'].max().reset_index(
            ).rename(columns = {'time_stamp':'last_stamp'})
    
```
[https://leetcode.com/problems/the-latest-login-in-2020/submissions/1084201702/](https://leetcode.com/problems/the-latest-login-in-2020/submissions/1084201702/)


I could be wrong, but I think that time complexity is *O*(*N*)  and space complexity is *O*(*N*), in which *N* ~ `len(logins)`.