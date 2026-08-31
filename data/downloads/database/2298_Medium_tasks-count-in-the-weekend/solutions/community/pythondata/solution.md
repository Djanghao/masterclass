# Pandas

**Author:** leesuin
**Votes:** 1
**Link:** [https://leetcode.com/problems/tasks-count-in-the-weekend/solutions/4281139/](https://leetcode.com/problems/tasks-count-in-the-weekend/solutions/4281139/)

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

def count_tasks(tasks: pd.DataFrame) -> pd.DataFrame:
    tasks.submit_date = pd.to_datetime(tasks.submit_date)
    tasks['day'] = tasks.submit_date.dt.day_name()
    return pd.DataFrame({'weekend_cnt': [tasks[tasks.day.isin(['Sunday','Saturday'])].shape[0]],
                         'working_cnt': [tasks[~tasks.day.isin(['Sunday','Saturday'])].shape[0]]})
```