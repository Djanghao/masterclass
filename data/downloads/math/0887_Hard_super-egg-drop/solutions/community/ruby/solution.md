# Best Solution Explained

**Author:** darian-catalin-cucer
**Votes:** -1
**Link:** [https://leetcode.com/problems/super-egg-drop/solutions/3154414/](https://leetcode.com/problems/super-egg-drop/solutions/3154414/)

---


```
class Solution {
public:
        int superEggDrop(int K, int N) {
        vector<vector<int>> dp(N + 1, vector<int>(K + 1, 0));
        int m = 0;
        while (dp[m][K] < N) {
            m++;
            for (int k = 1; k <= K; ++k)
                dp[m][k] = dp[m - 1][k - 1] + dp[m - 1][k] + 1;
        }
        return m;
    }
};
```