# Only check n elements, single pass O(n)

**Author:** turtleman270
**Votes:** 28
**Link:** [https://leetcode.com/problems/find-champion-i/solutions/4256459/](https://leetcode.com/problems/find-champion-i/solutions/4256459/)

---

# Intuition
If any team has a loss, then they can not be the champions, however the team they lost to could potentially be the champions.

# Approach
Assume that team 0 is the champions and do a single loop from [0,0] to [0,n] to verify. If team j has beaten team 0, then that means team j must have also beaten teams 0->j, so j is the new possible winner. We can continue our loop from [j,j] to [j,n]. We can repeat this for any teams that our current possible champion team.

# Complexity
- Time complexity:
$$O(n)$$ - we only make a single pass from the top to the bottom of the array

- Space complexity:
$$O(1)$$

# Code
```
class Solution {
    public int findChampion(int[][] grid) {
        int winner = 0;
        for(int opponent = 0; opponent<grid[0].length; opponent++){
            if(opponent==winner){
                continue;
            }
            if(grid[winner][opponent]==0){
                winner = opponent;
            }
        }
        return winner;
    }
}
```