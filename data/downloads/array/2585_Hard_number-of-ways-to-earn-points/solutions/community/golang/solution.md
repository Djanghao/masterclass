# C++ | Golang | DP | SC = O(target)

**Author:** pikachuu
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-earn-points/solutions/3271857/](https://leetcode.com/problems/number-of-ways-to-earn-points/solutions/3271857/)

---

# Code
```
// C++
class Solution {
public:
    int waysToReachTarget(int target, vector<vector<int>>& types) {
        const int mod = 1e9 + 7;
        vector<vector<int>> DP(2, vector<int>(target + 1, 0));
        DP[0][0] = DP[1][0] = 1;
        for(int i = 0; i < types.size(); i++) {
            for(int j = 1; j <= target; j++) {
                DP[(i + 1) % 2][j] = DP[i % 2][j]; 
                for(int k = 1; k <= types[i][0] && j >= k * types[i][1]; k++) {
                    DP[(i + 1) % 2][j] = (DP[(i + 1) % 2][j] + DP[i % 2][j - k * types[i][1]]) % mod;
                }
            }
        }
        return DP[types.size() % 2][target];
    }
};


// Golang
func waysToReachTarget(target int, types [][]int) int {
    const mod int = 1e9 + 7
    DP := make([][]int, 2)
    DP[0] = make([]int, target + 1)
    DP[1] = make([]int, target + 1)
    DP[0][0], DP[1][0] = 1, 1
    for i := 0; i < len(types); i++ {
        for j := 1; j <= target; j++ {
            DP[(i + 1) % 2][j] = DP[i % 2][j] 
            for k := 1; k <= types[i][0] && j >= k * types[i][1]; k++ {
                DP[(i + 1) % 2][j] = (DP[(i + 1) % 2][j] + DP[i % 2][j - k * types[i][1]]) % mod
            }
        }
    }
    return DP[len(types) % 2][target]
}
```