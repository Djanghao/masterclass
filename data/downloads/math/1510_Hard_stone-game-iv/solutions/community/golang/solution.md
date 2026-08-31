# ✅✅ C++ || JAVA || GO || easy & simple

**Author:** tamim447
**Votes:** 1
**Link:** [https://leetcode.com/problems/stone-game-iv/solutions/2611730/](https://leetcode.com/problems/stone-game-iv/solutions/2611730/)

---

**C++ Solution:**

```
class Solution {
public:
    bool winnerSquareGame(int n) {
        vector<bool>dp(n+1, 0);
        for(int i=1; i<=n; i++) {
            for(int j=1; j*j<=i; j++) {
                if(!dp[i-j*j]) {
                    dp[i] = true;
                    break;
                }
            }
        }
        return dp[n];
    }
};
```

**Java Solution:**

```
class Solution {
    public boolean winnerSquareGame(int n) {
        boolean[] dp = new boolean[n+1];
        for(int i = 1; i <= n; i++) {
            for(int j = 1; j*j <= i; j++) {
                if(!dp[i-j*j]) {
                    dp[i] = true;
                    break;
                }
            }
        }
        return dp[n];
    }
}
```

**Go Solution:**

```
func winnerSquareGame(n int) bool {
    dp:= make([]bool, n+1);
    
    for i:= 1; i<=n; i++ {
        for j:= 1; j*j<=i; j++ {
            if !dp[i-j*j] {
                dp[i] = true;
            }
        }
    }
    return dp[n];
}
```