# pandas || 3 lines, filter  || T/S: 99% / 99%

**Author:** Spaulding_
**Votes:** 13
**Link:** [https://leetcode.com/problems/investments-in-2016/solutions/5155674/](https://leetcode.com/problems/investments-in-2016/solutions/5155674/)

---

```
import pandas as pd

def find_investments(insurance: pd.DataFrame) -> pd.DataFrame:

  dup = insurance[insurance.duplicated(subset = 'tiv_2015', keep = False)].pid
  pos = insurance.drop_duplicates(subset = ['lat','lon']  , keep = False) .pid

  return pd.DataFrame({'tiv_2016': [insurance[insurance.pid.isin(pos) &
                                   (insurance.pid.isin(dup))].tiv_2016.sum()]})
```
[https://leetcode.com/problems/investments-in-2016/submissions/1083389388/](https://leetcode.com/problems/investments-in-2016/submissions/1083389388/)

I could be wrong, but I think that time complexity is *O*(*N*)  and space complexity is *O*(*N*), in which *N* ~ `len(insurance)`.