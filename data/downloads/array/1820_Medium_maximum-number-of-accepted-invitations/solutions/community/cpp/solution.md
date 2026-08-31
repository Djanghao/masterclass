# C++ Simple Solution with Hopcroft-Karp Algorithm | Beats 88% in Runtime

**Author:** danieltseng
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-number-of-accepted-invitations/solutions/5220994/](https://leetcode.com/problems/maximum-number-of-accepted-invitations/solutions/5220994/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(N*M)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(N)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
private:
    bool dfsHelper(vector<vector<int>>& grid, vector<int>& partner, vector<int>& visited, int b){
        
        int girl_count = grid[0].size();
        for(int g = 0; g < girl_count; ++g){
            if(grid[b][g] == 1 && visited[g] == -1){
                visited[g] = 1;
                if(partner[g] == -1 || dfsHelper(grid, partner, visited, partner[g])){
                    partner[g] = b;
                    return true;
                }
            }
        }

        return false;
    }
public:
    int maximumInvitations(vector<vector<int>>& grid) {
        // Hopcroft-Karp algorithm
        // 1. Use BFS
        // 2. In each candidate, conduct DFS to check any possible matches
        // 3. If partner-girl has been matched, find alternative possible match for that partner-boy 
        int boy_count = grid.size(), girl_count = grid[0].size();
        vector<int> partner(girl_count,-1);
        int maxc = 0;
        for(int b = 0; b < boy_count; ++b){
            vector<int>visited(girl_count,-1);
            if(dfsHelper(grid, partner, visited, b)){
                ++maxc;
            }
        }
        return maxc;
    }
};
```
![Upvote.jpeg](./images/0.jpeg)
