# Intuitive Answer in Pandas and Easy to Understand | shift() Method Used

**Author:** wangsheng-wu
**Votes:** 1
**Link:** [https://leetcode.com/problems/report-contiguous-dates/solutions/5523120/](https://leetcode.com/problems/report-contiguous-dates/solutions/5523120/)

---



# Approach
<!-- Describe your approach to solving the problem. -->
Concat failed and succeeded dataframes, sort date values and retrieve required period. Group by period state and assign date values by aggregate function.

# Code
```
import pandas as pd

def report_contiguous_dates(failed: pd.DataFrame, succeeded: pd.DataFrame) -> pd.DataFrame:
    # Assign states to each dataframe and unify date column
    failed['state'] = 'failed'
    failed = failed.rename(columns={'fail_date': 'date'})
    succeeded['state'] = 'succeeded'
    succeeded = succeeded.rename(columns={'success_date': 'date'})
    # Concat to get all the dates with their states into a single dataframe
    df = pd.concat([failed, succeeded])
    # Sort date values
    df = df.sort_values(by='date', ascending=True)
    # Retrieve data falling into the period we are interested
    df = df[(df['date'] >= '2019-01-01') & (df['date'] <= '2019-12-31')]
    # Assign period to each consecutive period state
    df['period'] = (df['state'] != df['state'].shift()).cumsum()
    # Group by periods and assign start_date and end_date using aggregate functions
    result = df.groupby(['period', 'state']).agg(start_date=('date', 'min'), end_date=('date', 'max')).reset_index().rename(columns={'state': 'period_state'})

    return result[['period_state', 'start_date', 'end_date']]
```