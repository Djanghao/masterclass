# C++ | Golang | 2D Hash Table

**Author:** pikachuu
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-artifacts-that-can-be-extracted/solutions/3311083/](https://leetcode.com/problems/count-artifacts-that-can-be-extracted/solutions/3311083/)

---

# Code
```
// C++
class Solution {
public:
    int digArtifacts(int n, vector<vector<int>>& artifacts, vector<vector<int>>& dig) {
        vector<vector<int>> grid(n, vector<int>(n, -1));
        for(int i = 0; i < artifacts.size(); i++) {
            for(int j = artifacts[i][0]; j <= artifacts[i][2]; j++) {
                for(int k = artifacts[i][1]; k <= artifacts[i][3]; k++) {
                    grid[j][k] = i;
                }
            }
        }
        unordered_set<int> Set;
        for(vector<int> d: dig) {
            grid[d[0]][d[1]] = -1;
        }
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < n; j++) {
                if(grid[i][j] != -1)
                    Set.insert(grid[i][j]);
            }
        }
        return artifacts.size() - Set.size();
    }
};


// Golang
func digArtifacts(n int, artifacts [][]int, dig [][]int) int {
    grid := make([][]int, n)    
    for i := 0; i < n; i++ {
        grid[i] = make([]int, n)
    }
    for i := 0; i < len(artifacts); i++ {
        for j := artifacts[i][0]; j <= artifacts[i][2]; j++ {
            for k := artifacts[i][1]; k <= artifacts[i][3]; k++ {
                grid[j][k] = i + 1
            }
        }
    }
    Set := make(map[int]bool)
    for _, d := range dig {
        grid[d[0]][d[1]] = 0
    }
    for i := 0; i < n; i++ {
        for j := 0; j < n; j++ {
            if grid[i][j] != 0 {
                Set[grid[i][j]] = true
            }
        }
    }
    return len(artifacts) - len(Set)
}
```