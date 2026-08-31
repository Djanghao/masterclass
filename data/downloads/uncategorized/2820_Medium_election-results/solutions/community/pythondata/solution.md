# step by step with comment | agg() + np.where()

**Author:** zhangmanyuzmy
**Votes:** 0
**Link:** [https://leetcode.com/problems/election-results/solutions/4694831/](https://leetcode.com/problems/election-results/solutions/4694831/)

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

def get_election_results(votes: pd.DataFrame) -> pd.DataFrame:
    # 1. get the vote of each voter
    points = votes.groupby('voter').agg(number_of_votes = ('candidate', 'count')).reset_index()
    points['points_per_vote'] = np.where(points['number_of_votes'] != 0, 1 / points['number_of_votes'], 0)
    # 2. merge points with votes
    votes = votes.merge(points, how = 'left', on = 'voter')
    # 3. count votes of each candidate
    candidates = votes.dropna().groupby('candidate')['points_per_vote'].sum().reset_index(name = 'ttl_votes')
    # 3. return candidate with max ttl votes
    return candidates[candidates['ttl_votes'] == candidates['ttl_votes'].max()][['candidate']].sort_values(by = 'candidate', ascending = True)
```