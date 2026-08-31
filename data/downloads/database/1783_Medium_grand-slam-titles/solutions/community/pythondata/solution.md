# Pandas oneliner with melt

**Author:** piocarz
**Votes:** 4
**Link:** [https://leetcode.com/problems/grand-slam-titles/solutions/4172971/](https://leetcode.com/problems/grand-slam-titles/solutions/4172971/)

---

# Intuition
Instead of creating 4 different dataframes and then combining them, we can do it at once with `melt` - pandas equivalent of `unpivot`.
# Approach
`melt` has many possible usages, but it's simplest usage is exactly what we need:
```
championships[["Wimbledon","Fr_open","US_open","Au_open"]].melt()
```
```
| variable  | value |
| --------- | ----- |
| Wimbledon | 1     |
| Wimbledon | 1     |
| Wimbledon | 2     |
| Fr_open   | 1     |
| Fr_open   | 1     |
| Fr_open   | 1     |
| US_open   | 1     |
| US_open   | 2     |
| US_open   | 2     |
| Au_open   | 1     |
| Au_open   | 2     |
| Au_open   | 2     |
```
`variable` and `value` are default names of new columns, but we can rename them inside `melt`.
```
.melt(value_name = "player_id", var_name = "grand_slams_count")
```
```
| grand_slams_count | player_id |
| ----------------- | --------- |
| Wimbledon         | 1         |
| Wimbledon         | 1         |
| Wimbledon         | 2         |
| Fr_open           | 1         |
| Fr_open           | 1         |
| Fr_open           | 1         |
| US_open           | 1         |
| US_open           | 2         |
| US_open           | 2         |
| Au_open           | 1         |
| Au_open           | 2         |
| Au_open           | 2         |
```
Now, if we group by `player_id` we'll get number of wins of each player.

```
.groupby("player_id",as_index = False).count()
``` 
```
| player_id | grand_slams_count |
| --------- | ----------------- |
| 1         | 7                 |
| 2         | 5                 |
```
Finally we can simply join with players on `player_id` and return.

```
players.merge( <melted_championships> , on = "player_id")
```
# Code
```
import pandas as pd

def grand_slam_titles(players: pd.DataFrame, championships: pd.DataFrame) -> pd.DataFrame:
    return players.merge(championships.iloc[:,1:].melt(value_name="player_id",var_name="grand_slams_count").groupby("player_id",0).count(),on="player_id")
```