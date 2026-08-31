# pandas ||| pivot_table || T/S: 99% / 39%

**Author:** Spaulding_
**Votes:** 1
**Link:** [https://leetcode.com/problems/snaps-analysis/solutions/4787287/](https://leetcode.com/problems/snaps-analysis/solutions/4787287/)

---

```
import pandas as pd

def snap_analysis(activities: pd.DataFrame, age: pd.DataFrame) -> pd.DataFrame:

    df = activities.merge(age, how = 'left'
                  ).pivot_table(index=["age_bucket"], columns = 'activity_type', 
                                values='time_spent', aggfunc={'time_spent': "sum"}
                  ).reset_index().fillna(0)

    df['sm'] =  df.open + df.send 
    df['send_perc'] = round(df.send/df.sm*100,2)
    df['open_perc'] = round(df.open/df.sm*100,2)

    return df.iloc[:,[0,4,5]]
```
[https://leetcode.com/problems/snaps-analysis/submissions/1187164789/](https://leetcode.com/problems/snaps-analysis/submissions/1187164789/)



I could be wrong, but I think that time complexity is *O*(*N*log*N*)  and space complexity is *O*(*N*), in which *N* ~ `len(activities)`.