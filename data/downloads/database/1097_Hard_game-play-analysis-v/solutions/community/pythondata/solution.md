# Pandas succint code, explanation line by line

**Author:** piocarz
**Votes:** 2
**Link:** [https://leetcode.com/problems/game-play-analysis-v/solutions/4092255/](https://leetcode.com/problems/game-play-analysis-v/solutions/4092255/)

---

# Approach
1. Create column `install_dt` as first day of event for every player
2. Create column `second` as ***POTENTIAL*** second day for every player
3. check how many second days actually match event date - this second day is already separetly assigned for each player, so it will match filter rows if player ***ACTUALLY*** had second day event. group by `install_dt` and count, as we want to know how many second days were for every `install_dt`. Rename with `.to_frame`.
4. similar operation to 3. but this time checking what was count of first days by date. Rename with `.to_frame`.
5. merge both dataframes on istall date, fill Null with 0
6. Finaly, for each `install_dt` calculate proportion of second day  logins.

# Attention:
As you can can see, in line 6, I used quite strange notation:

`(df.second/df.installs*100+0.5).astype(int)/100`

It's all becouse for some reason pandas while rounding, incorettly rounds certain numbers - for example `0.125`: it's rounded to `0.12` instead of `0.13`. Whats interesting, `0.135` is correctly rounded to `0.14`. to avoid it you can use this notation, which is basically the same as rounding floats to closest integer, by adding 0.5 to them and turning to integer. Here we do similar thing but first multiply by 100, get integer then divide by 100 to get rounding to 0.01.

Alternatively you could use something like:

`df.second/df.installs+1e-9`

which simply add one-bilionth to result, it works, but there is theoretical chance that it will itself alter result. 

# Code
```
import pandas as pd

def gameplay_analysis(activity: pd.DataFrame) -> pd.DataFrame:
    activity['install_dt'] = activity.groupby('player_id')['event_date'].transform('min')
    activity['second'] = activity['install_dt'] + pd.DateOffset(1)
    df_second_log = activity.query("second == event_date").groupby('install_dt')['player_id'].count().to_frame('second')
    df_first_log =  activity.query("install_dt == event_date").groupby('install_dt')['player_id'].count().to_frame('installs')
    df = df_first_log.merge(df_second_log, on = 'install_dt', how = 'left').reset_index().fillna(0)
    return df.assign(Day1_retention = (df.second/df.installs*100+0.5).astype(int)/100).drop('second',axis=1)
```