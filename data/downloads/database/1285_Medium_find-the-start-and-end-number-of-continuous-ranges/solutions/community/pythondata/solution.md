# Pandas oneliner - group by log_id - index

**Author:** piocarz
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-start-and-end-number-of-continuous-ranges/solutions/4101285/](https://leetcode.com/problems/find-the-start-and-end-number-of-continuous-ranges/solutions/4101285/)

---

# Intuition
Group by difference from `log_id` and index, get their `min` and `max`.

# Approach
Notice: if `log_id` is increasing by 1, it's difference with `index` (which by default is increasing by 1), stays the same:
```
| log_id | index | diff |
| ------ | ----- | ---- |
| 1      | 0     | 1    |
| 2      | 1     | 1    |
| 3      | 2     | 1    |
| 7      | 3     | 4    |
| 8      | 4     | 4    |
| 10     | 5     | 5    |
```
Just use this `diff` as group, and take group `min` and `max`.

# Code
```
import pandas as pd

def find_continuous_ranges(logs: pd.DataFrame) -> pd.DataFrame:
    return logs.groupby(logs.log_id-logs.index).agg(start_id=("log_id","min"),end_id=("log_id","max"))
```
As pointed out, logs in testcases are always sorted, becouse... they are logs, BUT if they werent, we can sort them ourselves, adding one line:
```
import pandas as pd

def find_continuous_ranges(logs: pd.DataFrame) -> pd.DataFrame:
    logs = logs.sort_values("log_id",ignore_index=True) #logs_id in testcases are sorted, but just in case
    return logs.groupby(logs.log_id-logs.index).agg(start_id=("log_id","min"),end_id=("log_id","max"))
```