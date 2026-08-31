# Easy Pandas Solution

**Author:** LaibaIst
**Votes:** 2
**Link:** [https://leetcode.com/problems/game-play-analysis-ii/solutions/3987861/](https://leetcode.com/problems/game-play-analysis-ii/solutions/3987861/)

---

# Intuition
In this code:

We first use groupby('player_id')['event_date'].idxmin() to find the index of the minimum event_date within each player_id group.
We use .loc to locate the rows in the original DataFrame (activity) based on the obtained index.
We select the 'player_id' and 'device_id' columns to retrieve the corresponding information for the minimum event_date.
The df DataFrame will contain the 'player_id' and 'device_id' associated with the minimum event_date for each player.


# Code
```
import pandas as pd

def game_analysis(activity: pd.DataFrame) -> pd.DataFrame:
    df = activity.loc[activity.groupby('player_id')['event_date'].idxmin()][['player_id','device_id']]

    return df
    
```