# C# 80% time 100% memory

**Author:** murh
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-accepted-invitations/solutions/5369257/](https://leetcode.com/problems/maximum-number-of-accepted-invitations/solutions/5369257/)

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
public class Solution {
    public int MaximumInvitations(int[][] grid) {
        var boys_len = grid.Length;
        var girls_len = grid[0].Length;

        // Allows us to keep track who invited which girl
        Span<int> girls_to_boys = stackalloc int[girls_len];
        girls_to_boys.Fill(-1);

        // For each boy, check if he can invite the girl
        // If he can, increase invitation count
        var invitations = 0;
        for(var boy = 0; boy < grid.Length; boy++) {
            // Allows us to keep track who we visited 
            // in DFS for each boy individually
            // Because we might visited other boys and girls for
            // this particular boy
            Span<int> visited_boys = stackalloc int[boys_len];
            Span<int> visited_girls = stackalloc int[girls_len];

            if(canInviteGirl(grid, boy, visited_boys, visited_girls, girls_to_boys)) 
                invitations++;
        }

        return invitations;
    }

    public bool canInviteGirl(
        int[][] grid, 
        int boy, 
        Span<int> visited_boys, 
        Span<int> visited_girls, 
        Span<int> girls_to_boys
    ) {
        // already visited boy 
        if(visited_boys[boy] != 0) 
            return false;
        visited_boys[boy] = 1;
        
        for(var girl = 0; girl < grid[boy].Length; girl++) {
            // skip no invitation
            if(grid[boy][girl] == 0) 
                continue;
            // already visited girl
            if(visited_girls[girl] != 0) 
                continue;
            visited_girls[girl] = 1;

            var not_invited = girls_to_boys[girl] == -1;
            
            // This girl can be invited, she wasn't invited before
            if(not_invited) {
                girls_to_boys[girl] = boy;
                return true;
            } 
            // This girl was already invited by some other boy
            // girls_to_boys[girl] => boy who previously invited already
            // check if he can invite another girl, if he can, overwrite
            else if(canInviteGirl(grid, girls_to_boys[girl], visited_boys, visited_girls, girls_to_boys)) {
                girls_to_boys[girl] = boy;
                return true;
            }
        }

        return false;
    }
}
```