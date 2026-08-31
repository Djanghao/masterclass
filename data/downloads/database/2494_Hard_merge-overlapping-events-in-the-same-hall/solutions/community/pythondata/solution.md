# pandas cummax, cumsum

**Author:** cometolife
**Votes:** 3
**Link:** [https://leetcode.com/problems/merge-overlapping-events-in-the-same-hall/solutions/4109361/](https://leetcode.com/problems/merge-overlapping-events-in-the-same-hall/solutions/4109361/)

---

Based on @Quar's solution (https://leetcode.com/problems/merge-overlapping-events-in-the-same-hall/solutions/2878704/mysql-with-cte-and-window/?lang=pythondata)
# Code
```
import pandas as pd

def merge_events(hall_events: pd.DataFrame) -> pd.DataFrame:
    df = hall_events.sort_values(by=['hall_id', 'start_day', 'end_day'])
    df['prev_end_day'] = df.groupby('hall_id')['end_day'].shift(1)
    df['prev_max_end_day'] = df.groupby('hall_id')['prev_end_day'].cummax()
    df['is_new_event'] = (df['start_day'] > df['prev_max_end_day']) | (df['prev_max_end_day'].isna())
    df['group_id'] = df.groupby('hall_id')['is_new_event'].cumsum()

    df = df.groupby(['hall_id', 'group_id']).agg(start_day=('start_day', 'min'), end_day=('end_day', 'max')).reset_index()

    return df[['hall_id', 'start_day', 'end_day']]
```