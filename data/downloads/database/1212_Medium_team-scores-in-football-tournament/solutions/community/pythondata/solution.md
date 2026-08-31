# Python Solution

**Author:** Bagel150
**Votes:** 1
**Link:** [https://leetcode.com/problems/team-scores-in-football-tournament/solutions/4679830/](https://leetcode.com/problems/team-scores-in-football-tournament/solutions/4679830/)

---



# Code
```
import pandas as pd

def team_scores(teams: pd.DataFrame, matches: pd.DataFrame) -> pd.DataFrame:
    host = matches[['host_team','host_goals','guest_goals' ]].rename(columns = {'host_team':'team_id'})
    guest = matches[['guest_team','guest_goals', 'host_goals']].rename(columns = {'guest_team':'team_id'})
    host['num_points'] = np.where(host['host_goals']>host['guest_goals'], 3,np.where(host['host_goals'] == host['guest_goals'], 1, 0))
    guest['num_points'] = np.where(guest['host_goals']<guest['guest_goals'], 3,np.where(guest['host_goals'] == guest['guest_goals'], 1, 0))
    result = pd.concat([host[['team_id', 'num_points']], guest[['team_id' ,'num_points']]]).groupby(['team_id']).sum().reset_index()
    result = pd.merge(teams, result, how = 'left', on = 'team_id' ).fillna(0)
    return result.sort_values(['num_points','team_id'], ascending = [False, True])

```