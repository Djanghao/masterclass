# Pandas, DateOffset, simple filter

**Author:** piocarz
**Votes:** 19
**Link:** [https://leetcode.com/problems/game-play-analysis-iv/solutions/3914095/](https://leetcode.com/problems/game-play-analysis-iv/solutions/3914095/)

---

# Intuition
Create additional column representing first activity for each user. Then check how many players have activity in the first + 1 

# Approach
with created 'first' add to it one day: first + pd.DateOffset(1).It represents potential second day of activity, check how many player have this day in actual events.

# Code
```
import pandas as pd

def gameplay_analysis(activity: pd.DataFrame) -> pd.DataFrame:
      activity["first"] = activity.groupby("player_id").event_date.transform(min)
      activity_2nd_day = activity.loc[activity["first"] + pd.DateOffset(1) == activity["event_date"]]
      return pd.DataFrame({"fraction":[round(len(activity_2nd_day) / activity.player_id.nunique(),2)]})
```