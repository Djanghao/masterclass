# Simple Pandas Solution

**Author:** docxeg249
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-the-olympic-table/solutions/4850064/](https://leetcode.com/problems/sort-the-olympic-table/solutions/4850064/)

---

# Code
```
import pandas as pd

def sort_table(olympic: pd.DataFrame) -> pd.DataFrame:
    olympic = olympic.sort_values(by = ["gold_medals","silver_medals",'bronze_medals',"country"],ascending = [False,False,False,True])
    return olympic
```