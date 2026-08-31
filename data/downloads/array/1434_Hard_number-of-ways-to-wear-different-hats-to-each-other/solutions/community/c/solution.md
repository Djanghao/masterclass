# 🔥 [LeetCode The Hard Way] 🔥 Explained Line By Line

**Author:** tr1nity
**Votes:** 7
**Link:** [https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/solutions/2483644/](https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/solutions/2483644/)

---

Please check out [LeetCode The Hard Way](https://wingkwong.github.io/leetcode-the-hard-way/) for more solution explanations and tutorials. If you like it, please give a star and watch my [Github Repository](https://github.com/wingkwong/leetcode-the-hard-way).

---

```cpp
class Solution {
public:
    int n, M = 1e9 + 7;
    
    int dfs(vector<vector<int>>& hatsToPeople, vector<vector<int>>& dp, int hat, int mask) {
        // if the mask is able to reache the end state, 
        // i.e. all people can wear some hats, then return 1
        if (mask == (1 << n) - 1) return 1;
        // if the current hat is out of 40, return 0
        if (hat > 40) return 0;
        // if we calculated the result before, return it directly
        if (dp[mask][hat] != -1) return dp[mask][hat];
        // get number of ways if we skip this hat
        long res = dfs(hatsToPeople, dp, hat + 1, mask);
        // since the current hat can be assigned to different people
        // we try all of them
        for (auto& person: hatsToPeople[hat]) {
            // if this person has been assigned with a hat, then skip it
            if ((1 << person) & mask) continue;
            // then we can assign this hat to this person
            (res += dfs(hatsToPeople, dp, hat + 1, mask | (1 << person))) %= M;
        }
        // memoize the result
        return dp[mask][hat] = res;
    }
    
    int numberWays(vector<vector<int>>& hats) {
        // number of people
        n = hats.size();
        // for each hat, we map to different people
        vector<vector<int>> hatsToPeople(41);
        // iterate each person
        for (int i = 0; i < n; i++) {
            // iterate i-th person's preferred hats
            for (auto &h : hats[i]) {
                // assign hat h to person i
                hatsToPeople[h].push_back(i);
            }
        }
        // init dp
        vector<vector<int>> dp(1 << n, vector<int>(41, -1));
        // dfs
        return dfs(hatsToPeople, dp, 1, 0);
    }
};
```