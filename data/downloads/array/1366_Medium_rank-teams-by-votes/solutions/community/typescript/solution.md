# Simple approach with time complexity O(N×M+MlogM)

**Author:** sohanb88
**Votes:** 0
**Link:** [https://leetcode.com/problems/rank-teams-by-votes/solutions/6010850/](https://leetcode.com/problems/rank-teams-by-votes/solutions/6010850/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N x M log(M)) - where N ismber of votes and M is number of teams and its positions
- Space complexity:
<!-- Add your space complexity here, -->
    O(M^2) where M is number of teams stored in map)

# Code
```typescript []
function rankTeams(votes: string[]): string {
     const numTeams = votes[0].length;
        const teamMap = new Map<string, number[]>();
        //Initialize the map with rank count dictionary for each team
        for (const team of votes[0])
        {
            teamMap.set(team, Array(numTeams).fill(0));
        }
        //Count each teams rank in each vote
        for (const vote of votes)
        {
          for(let position = 0; position < numTeams; position++)
          {
            const team = vote[position];
            teamMap.get(team)![position]++;
          }
        }
        //Sort teams based on rank count and team name for ties
        const sortedTeams = Array.from(teamMap.keys()).sort((a, b) => {
            const rankA = teamMap.get(a)!;
            const rankB = teamMap.get(b)!;
            for (let i = 0; i < numTeams; i++)
            {
                if(rankA[i] !== rankB[i])
                {
                    return rankB[i] - rankA[i];
                }
            }
            return a.localeCompare(b);
        });
        return sortedTeams.join('');
};
```