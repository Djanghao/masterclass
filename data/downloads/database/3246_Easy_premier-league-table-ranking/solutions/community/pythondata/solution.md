# Pandas 3-line Solution

**Author:** sharonwang1
**Votes:** 0
**Link:** [https://leetcode.com/problems/premier-league-table-ranking/solutions/6137333/](https://leetcode.com/problems/premier-league-table-ranking/solutions/6137333/)

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
```pythondata []
import pandas as pd

def calculate_team_standings(team_stats: pd.DataFrame) -> pd.DataFrame:
    team_stats['points'] = 3 * team_stats['wins'] + team_stats['draws']
    team_stats['position'] = team_stats['points'].rank(method = 'min', ascending=False)
    return team_stats[['team_id', 'team_name', 'points', 'position']].sort_values(by = ['points', 'team_name'], ascending = [False, True])
```