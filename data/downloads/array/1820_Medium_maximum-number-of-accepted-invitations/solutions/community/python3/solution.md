# [Python3] maximum bipartite matching

**Author:** ye15
**Votes:** 6
**Link:** [https://leetcode.com/problems/maximum-number-of-accepted-invitations/solutions/1454572/](https://leetcode.com/problems/maximum-number-of-accepted-invitations/solutions/1454572/)

---


```
class Solution:
    def maximumInvitations(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        ans = 0
        match = [-1] * n
        
        def fn(i): 
            """Look up match for ith boy."""
            for j in range(n):
                if grid[i][j] and not seen[j]: 
                    seen[j] = True
                    if match[j] == -1 or fn(match[j]): 
                        match[j] = i
                        return True 
            return False 
        
        for i in range(m):
            seen = [False] * n
            if fn(i): ans += 1
        return ans 
```

Implemented in C++
```
class Solution {
public:
    int maximumInvitations(vector<vector<int>>& grid) {
        int m = grid.size(), n = grid[0].size(), ans = 0; 
        vector<int> match(n, -1); 
        
        function<bool(int, vector<bool>&)> fn = [&](int i, vector<bool>& seen) {
            for (int j = 0; j < n; ++j) 
                if (grid[i][j] && not seen[j]) {
                    seen[j] = true; 
                    if (match[j] == -1 || fn(match[j], seen)) {
                        match[j] = i; 
                        return true; 
                    }
                }
            return false; 
        }; 
        
        for (int i = 0; i < m; ++i) {
            vector<bool> seen(n, false); 
            if (fn(i, seen)) ++ans; 
        }
        return ans; 
    }
};
```