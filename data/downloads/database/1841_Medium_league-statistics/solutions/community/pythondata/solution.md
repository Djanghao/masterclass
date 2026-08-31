# df.columns = [...] if df.rename(columns={...}) is so annoying

**Author:** Elvis_XV
**Votes:** 0
**Link:** [https://leetcode.com/problems/league-statistics/solutions/5107996/](https://leetcode.com/problems/league-statistics/solutions/5107996/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import pandas as pd

def league_statistics(teams: pd.DataFrame, matches: pd.DataFrame) -> pd.DataFrame:
    #Get the score for 2 teams
    matches['home_team_score'] = np.where(
        matches['home_team_goals']>matches['away_team_goals'], 3, np.where(
            matches['home_team_goals']<matches['away_team_goals'], 0, 1
        )
    )
    matches['away_team_score'] = np.where(
        matches['home_team_score']==1, 1, abs(matches['home_team_score']-3)
    )

    #Create 2 dataframes
    df1 = matches[['home_team_id','home_team_goals','away_team_goals','home_team_score']]
    df1.columns = ['team_id','goal_for','goal_against','points'] #personal preference of naming columns, very simple
    df2 = matches[['away_team_id','away_team_goals','home_team_goals','away_team_score']]
    df2.columns = ['team_id','goal_for','goal_against','points'] #renaminng using rename is very annoying when it comes to large numbers
    df = pd.concat([df1,df2])

    #Calculate all the values using group
    df = df.groupby('team_id').agg(
        matches_played=('goal_for','count'),
        points=('points','sum'),goal_for=('goal_for','sum'),
        goal_against=('goal_against','sum')
    ).reset_index()

    #Calculate goal diff
    df['goal_diff'] = df['goal_for'] - df['goal_against']

    #Merge to get team name
    df = df.merge(teams).set_index('team_name')

    return df.drop(columns=['team_id']).reset_index().sort_values(['points','goal_diff','team_name'], ascending=[False,False,True])
```