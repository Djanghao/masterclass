# pandas ||| melt and merge ||

**Author:** Spaulding_
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-overlapping-shifts-ii/solutions/5700245/](https://leetcode.com/problems/find-overlapping-shifts-ii/solutions/5700245/)

---


```pythondata []
import pandas as pd

def calculate_shift_overlaps(employee_shifts: pd.DataFrame) -> pd.DataFrame:

                 # We melt start and stop times.
    df = (pd.melt(employee_shifts, id_vars=['employee_id', ],
             value_vars=['start_time', 'end_time'], value_name='time')
             .sort_values(['employee_id', 'time']))

                # We determine the time intervals between an employee's consecutive
                # times and the number of employes on the shift during that interval.
    df['time']  = pd.to_datetime(df.time)                        # 
    df['incr']  = df.variable.apply(lambda x: 1 if x == 'start_time' else -1)
    df['c_sum'] = df.groupby(['employee_id'])['incr'].cumsum()
    df_max = df.groupby(['employee_id'])['c_sum'].max().reset_index()

                # We use combinatorics.
    df['mult'] = df.c_sum.apply(lambda x: comb(x, 2))
    df['total_overlap_duration'] = ((((df.time.shift(-1) - df.time) / 
                                                pd.Timedelta(minutes=1)) * df.mult))
    df_tot = (df.groupby(['employee_id'])['total_overlap_duration'].sum().reset_index())

                # We clean-up and return the merged dataframe.
    return (df_max.merge(df_tot, how = 'left')
              .rename(columns = {'c_sum':'max_overlapping_shifts'}))
```