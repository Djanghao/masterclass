# 【C++ | Java | Python】Binary lifting

**Author:** RealFan
**Votes:** 56
**Link:** [https://leetcode.com/problems/maximize-value-of-function-in-a-ball-passing-game/solutions/3965411/](https://leetcode.com/problems/maximize-value-of-function-in-a-ball-passing-game/solutions/3965411/)

---

> **I know almost nothing about English, pointing out the mistakes in my article would be much appreciated.**

> **In addition, I'm too weak, please be critical of my ideas.**
---

# Intuition
- Because each node has and only has one father, so this problem is actually the continuous jumping on the only path. Immediately thinks of the [binary lifting](https://codeforces.com/blog/entry/100826).
- Binary lifting is suitable for problems like "father's father is the second-order father".
    *For this problem, jump 2 steps equals to jump 1 step then jump 1 step; jump 4 steps means jump 2 steps then jumps 2 steps...*
- The most commonly used implementation for the binary lifting is to maintain a jump table.
    **In the table `dp`, `dp[i][j]` means the information of "jumped $$2^i$$ steps from $$j$$".**
    This table can be calculated level-by-level: **jump $$2^i$$ times equals to jump $$2^{i-1}$$ then jump $$2^{i-1}$$ times.**
- So easily maintain `(position, profit)`, it can transfer by:
    - For position: 
        $$pos[i][j] = pos[i-1][pos[i-1][j]]$$
    - For profit: 
        $$profit[i][j] = profit[i-1][j] + profit[i-1][pos[i-1][j]]$$ 
(It may be changed by the meaning of profit).
- After we get the table, how to use it?
    Obviously, $$k$$ can be composed by some powers of 2 (that is, the binary representation of $$k$$).
    **Therefore, by enumerating the binary representation of $$k$$, the profit of $$k$$ steps can be obtained by summing the profit of $$2^i$$ steps.**

<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
- In the implementation, for convenience, I maintain the profit without the start point but with the end point. So need to finally add the begin point into the result.

# Complexity
- Time complexity: $$O(n \\log k)$$
- Space complexity: $$O(n \\log k)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
``` C++ []
class Solution {
public:
    long long getMaxFunctionValue(vector<int>& receiver, long long k) {
        int m = 8 * sizeof(k) - __builtin_clzll(k), n = receiver.size();
        // dp[i][j] means from j, move 2^i steps, (end point, profit)
        vector<vector<pair<int, long long>>> dp(m, vector<pair<int, long long>>(n));
        for (int j = 0; j < n; ++j) dp[0][j] = make_pair(receiver[j], receiver[j]);
        for (int i = 1; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                int x = dp[i-1][j].first;
                dp[i][j] = make_pair(dp[i-1][x].first, dp[i-1][j].second + dp[i-1][x].second);
            }
        }
        function<long long(int, long long)> fuck = [&](int now, long long p) -> long long {
            if (p == -1) return 0;
            if ((k & (1ll << p)) == 0) return fuck(now, p - 1);
            return dp[p][now].second + fuck(dp[p][now].first, p - 1);
        };
        long long res = 0;
        for (int i = 0; i < n; ++i) res = max(fuck(i, m - 1) + i, res);
        return res;
    }
};
```
``` Java []
class Solution {
    public long getMaxFunctionValue(List<Integer> receiver, long k) {
        int m = 35, n = receiver.size();
        // dp[i][j] means from j, move 2^i steps, (end point, profit)
        long [][][]dp = new long[m][n][2];
        for (int j = 0; j < n; ++j) 
            dp[0][j][0] = dp[0][j][1] = receiver.get(j).longValue();
        for (int i = 1; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                int x = (int)dp[i-1][j][0];
                dp[i][j] = new long[]{dp[i-1][x][0], dp[i-1][j][1] + dp[i-1][x][1]};
            }
        }
        long res = 0;
        for (int i = 0; i < n; ++i) {
            long r = i;
            int now = i;
            for (int j = 0; j < m; ++j) {
                if (((1l << j) & k) == 0) continue;
                r += dp[j][now][1];
                now = (int)dp[j][now][0];
            }
            res = Math.max(r, res);
        }
        return res;
    }
}
```
``` Python []
class Solution:
    def getMaxFunctionValue(self, receiver: List[int], k: int) -> int:
        m, n = k.bit_length(), len(receiver)
        # pos[i][j] means the end point after move 2^i steps from j
        pos = [[receiver[i] for i in range(n)] for j in range(m)]
        # profit[i][j] means the profit after move 2^i steps from j, not include j itself
        profit = [[receiver[i] for i in range(n)] for j in range(m)]
        for i in range(1, m):
            for j in range(n):
                x = pos[i-1][j]
                pos[i][j] = pos[i-1][x]
                profit[i][j] = profit[i-1][j] + profit[i-1][x]
        def fuck(now, p):
            if p == -1: return 0
            if (k & (1 << p)) == 0: return fuck(now, p - 1)
            return profit[p][now] + fuck(pos[p][now], p - 1)

        return max([fuck(i, m - 1) + i for i in range(n)])
```