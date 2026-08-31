# 🔥 BEATS 100% | ✅ [ Py /Java / C++ / C / C# / JS / GO / Rust ]

**Author:** Neoni_77
**Votes:** 18
**Link:** [https://leetcode.com/problems/k-inverse-pairs-array/solutions/4632683/](https://leetcode.com/problems/k-inverse-pairs-array/solutions/4632683/)

---


```Python []
class Solution:
    def kInversePairs(self, n: int, k: int) -> int:
        MOD = 1000000007
        dp = [0] * (k + 1)
        dp[0] = 1
        for i in range(2, n + 1):
            for j in range(1, k + 1):
                dp[j] = (dp[j] + dp[j - 1]) % MOD
            for j in range(k, i - 1, -1):
                dp[j] = (dp[j] - dp[j - i] + MOD) % MOD
        return dp[k]

```
```Java []
public class Solution {
    public int kInversePairs(int n, int k) {
        int MOD= 1000000007;
        int[] dp = new int[k+1];
        dp[0] = 1;
        for(int i = 2;i <= n;i++){
           for(int j = 1;j <= k;j++){
                dp[j] = (dp[j] + dp[j-1]) % MOD;
           }
           for(int j = k;j >= i;j--){
                dp[j] = (dp[j] - dp[j-i] + MOD) % MOD;
           }
        }
        return dp[k];
    }
}
```
```C++ []
class Solution {
public:
    int kInversePairs(int n, int k) {
        int MOD = 1000000007;
        vector<int> dp(k + 1);
        dp[0] = 1;
        for (int i = 2; i <= n; i++) {
            for (int j = 1; j <= k; j++) {
                dp[j] = (dp[j] + dp[j - 1]) % MOD;
            }
            for (int j = k; j >= i; j--) {
                dp[j] = (dp[j] - dp[j - i] + MOD) % MOD;
            }
        }
        return dp[k];
    }
};

```
```C []
int kInversePairs(int n, int k) {
    int MOD = 1000000007;
    int dp[k + 1];
    dp[0] = 1;
    for (int i = 2; i <= n; i++) {
        for (int j = 1; j <= k; j++) {
            dp[j] = (dp[j] + dp[j - 1]) % MOD;
        }
        for (int j = k; j >= i; j--) {
            dp[j] = (dp[j] - dp[j - i] + MOD) % MOD;
        }
    }
    return dp[k];
}

```
```C# []
public class Solution {
    public int KInversePairs(int n, int k) {
        int MOD = 1000000007;
        int[] dp = new int[k + 1];
        dp[0] = 1;
        for (int i = 2; i <= n; i++) {
            for (int j = 1; j <= k; j++) {
                dp[j] = (dp[j] + dp[j - 1]) % MOD;
            }
            for (int j = k; j >= i; j--) {
                dp[j] = (dp[j] - dp[j - i] + MOD) % MOD;
            }
        }
        return dp[k];
    }
}

```
```Javascript []
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kInversePairs = function(n, k) {
    const MOD = 1000000007;
    let dp = new Array(k + 1).fill(0);
    dp[0] = 1;
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= k; j++) {
            dp[j] = (dp[j] + dp[j - 1]) % MOD;
        }
        for (let j = k; j >= i; j--) {
            dp[j] = (dp[j] - dp[j - i] + MOD) % MOD;
        }
    }
    return dp[k];
};

```
```GO []
func kInversePairs(n int, k int) int {
    MOD := 1000000007
    dp := make([]int, k+1)
    dp[0] = 1
    for i := 2; i <= n; i++ {
        for j := 1; j <= k; j++ {
            dp[j] = (dp[j] + dp[j-1]) % MOD
        }
        for j := k; j >= i; j-- {
            dp[j] = (dp[j] - dp[j-i] + MOD) % MOD
        }
    }
    return dp[k]
}

```
```Rust []
impl Solution {
    pub fn k_inverse_pairs(n: i32, k: i32) -> i32 {
        let MOD = 1000000007;
        let mut dp = vec![0; (k + 1) as usize];
        dp[0] = 1;
        for i in 2..=n {
            for j in 1..=k {
                dp[j as usize] = (dp[j as usize] + dp[(j - 1) as usize]) % MOD;
            }
            for j in (i..=k).rev() {
                dp[j as usize] = (dp[j as usize] - dp[(j - i) as usize] + MOD) % MOD;
            }
        }
        dp[k as usize]
    }
}

```
**Po resheniyu Java dostigayet 100%, naschet ostal'nykh kodov ne znayu..**
**upvote pozhaluysta!!\uD83D\uDE0A**


