# c++||  Easy to understand || DFS + Memorization || Space : O(12n), Time :O(12n)

**Author:** askvij
**Votes:** 11
**Link:** [https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/solutions/941091/](https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/solutions/941091/)

---

Not the fastest solution but easy to understand. I generated all the possbile 12 combinations for a row. We just the need combination we used in last row  to select the combination for current row.
Please comment if you need more details.


```
class Solution {
public:
    int MOD = 1e9 + 7;
    string moves[12] = {
        "123",
        "132",
        "121",
        "131",
        "213",
        "231",
        "232",
        "212",
        "312",
        "321",
        "313",
        "323",
    };
    vector<vector<int>>memo;
    int solve(int n, int lastIdx) {
        if (n == 0) return 1;
        int ret = 0;
        if (memo[n][lastIdx] != -1) return memo[n][lastIdx];
        string last = moves[lastIdx];
        for (int idx = 0; idx <12; idx++) {
            string move = moves[idx];
            bool same = false;
            for (int i = 0; i < 3; i++) if (move[i] == last[i]) same = true;
            if (!same) ret = (ret + solve(n - 1, idx)%MOD)%MOD;
        }
        return memo[n][lastIdx]= ret%MOD;
    }
    int numOfWays(int n) {
       memo.resize(n + 1, vector<int>(12, -1));
        int ret = 0;
        for (int idx = 0; idx < 12; idx++)
            ret =  (ret + solve(n-1, idx)%MOD)%MOD;
        return ret;
    }
};
```

Time Complexity : O(12n) ~ O(n)
Space Complexity: O(12n) ~O(n)