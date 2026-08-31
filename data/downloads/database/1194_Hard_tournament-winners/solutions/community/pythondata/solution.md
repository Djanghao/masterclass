# Pandas succint code - use your .head()

**Author:** piocarz
**Votes:** 1
**Link:** [https://leetcode.com/problems/tournament-winners/solutions/4097464/](https://leetcode.com/problems/tournament-winners/solutions/4097464/)

---

# Intuition
If we collect all players (first and second) into one table and then sort it in right manner, after grouping them by `group_id`, we can use `.head()` to get top 1 of each group.
# Approach
1. From matches export to df1 data for player1, rename it to player_id and score, so it could be later concatinated with player2
2. Exactly same as line 1, except for player2
3. Concat df1 and df2, and add groups information from another table. Group by `group_id` and `player_id` and sum to get total score for each player.
4. Sort values by: group `^`, score `v`,  player_id `^` Now, grouping and getting head of each group will get us top score and lowest player_id for each group.


# Code
```
import pandas as pd

def tournament_winners(players: pd.DataFrame, matches: pd.DataFrame) -> pd.DataFrame:
    df1 = matches[["first_player","first_score"]].rename(columns = {"first_player":"player_id","first_score":"score"})
    df2 = matches[["second_player","second_score"]].rename(columns = {"second_player":"player_id","second_score":"score"})
    df =  pd.concat([df1,df2]).merge(players, on = "player_id").groupby(["group_id","player_id"]).sum().reset_index()
    return df.sort_values(["group_id","score","player_id"], ascending = [1,0,1]).groupby("group_id").head(1).iloc[:,[0,1]]
```