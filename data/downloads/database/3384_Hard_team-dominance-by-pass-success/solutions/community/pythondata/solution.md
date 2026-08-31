# pandas ||| 4 lines, double-merge, groupby, with comments ||

**Author:** Spaulding_
**Votes:** 0
**Link:** [https://leetcode.com/problems/team-dominance-by-pass-success/solutions/6127144/](https://leetcode.com/problems/team-dominance-by-pass-success/solutions/6127144/)

---


```pythondata []
import pandas as pd

def calculate_team_dominance(teams: pd.DataFrame, passes: pd.DataFrame) -> pd.DataFrame:

                    # merge the teams to passes first on "passes from" and 
                    # then on "passes to"
    df = passes.merge(teams, how = 'left', left_on = 'pass_from', right_on = 'player_id'
              ).merge(teams, how = 'left', left_on = 'pass_to'  , right_on = 'player_id'
              ).rename(columns = {'team_name_x': 'team_name'})

                    # add columns for half_number and for point-scores per pass
    df['half_number'] =   (df.time_stamp > '45:00') + 1
    df['dominance'  ] = 2*(df.team_name == df.team_name_y)-1

                    # group by name then half, compute the point sum for each, 
                    # and sort per instructions
    return df.groupby(['team_name', 'half_number']).agg(dominance=('dominance', 'sum')
            ).reset_index().sort_values(['team_name','half_number'])
    

```