# C++ 130 ms

**Author:** votrubac
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-all-possible-stable-binary-arrays-ii/solutions/5085004/](https://leetcode.com/problems/find-all-possible-stable-binary-arrays-ii/solutions/5085004/)

---

Do not ask me to explain this... it was hard as it is...

Just wanted to post a fast C++ code; other solutios I saw run in ~1000 ms.

**C++**
```cpp
int dp[2001][2001][2], ps[2001][2], mod = 1000000007;
class Solution {
public:
int numberOfStableArrays(int zero, int one, int lim) {
    dp[0][0][0] = dp[0][0][1] = 1;
    memset(ps, 0, sizeof(ps));
    for (int i = 1; i <= zero + one; ++i) {
        for (int x = 1; x <= min(i, zero); ++x) {
            ps[i - x][1] = (ps[i - x][1] + dp[x - 1][i - x][1]) % mod;
            if (x > lim)
                ps[i - x][1] = (mod + ps[i - x][1] - dp[x - lim - 1][i - x][1]) % mod;
            dp[x][i - x][0] = ps[i - x][1];
        }
        for (int y = 1; y <= min(i, one); ++y) {
            ps[i - y][0] = (ps[i - y][0] + dp[i - y][y - 1][0]) % mod;
            if (y > lim)
                ps[i - y][0] = (mod + ps[i - y][0] - dp[i - y][y - lim - 1][0]) % mod;
            dp[i - y][y][1] = ps[i - y][0];
        }        
    }
    return (dp[zero][one][0] + dp[zero][one][1]) % mod;
}
};
```