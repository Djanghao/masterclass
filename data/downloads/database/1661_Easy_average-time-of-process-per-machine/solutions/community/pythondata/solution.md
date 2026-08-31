# Pivot and groupby

**Author:** ChunHaoWang
**Votes:** 15
**Link:** [https://leetcode.com/problems/average-time-of-process-per-machine/solutions/4475409/](https://leetcode.com/problems/average-time-of-process-per-machine/solutions/4475409/)

---

# Intuition
Pivot organizes the table with end and start columns which makes it easy to create the processing_time column. 


# Code
```
import pandas as pd

def get_average_time(activity: pd.DataFrame) -> pd.DataFrame:
    pivoted = activity.pivot(index=["machine_id", "process_id"], columns='activity_type', values='timestamp')
    pivoted['processing_time'] = pivoted['end'] - pivoted['start']
    return pivoted.groupby('machine_id').processing_time.mean().round(3).reset_index()


```

Chaining version
```
import pandas as pd

def get_average_time(activity: pd.DataFrame) -> pd.DataFrame:
    return activity.pivot(index=["machine_id", "process_id"], columns='activity_type', values='timestamp')\\
            .groupby("machine_id")\\
            .apply(lambda x: (x['end'] - x['start']).mean().round(3))\\
            .rename("processing_time")\\
            .reset_index()
```