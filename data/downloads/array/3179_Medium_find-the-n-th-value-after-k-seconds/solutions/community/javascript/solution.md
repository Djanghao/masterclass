# easy understanding solution beats 100% in time & space

**Author:** deleted_user
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-n-th-value-after-k-seconds/solutions/5282204/](https://leetcode.com/problems/find-the-n-th-value-after-k-seconds/solutions/5282204/)

---

# Code 
```javascript []
 var valueAfterKSeconds = function (n, k) {
  const MOD = 1000000007;
  let dp = new Array(n).fill(1);

  for (let i = 1; i <= k; i++) {
    for (let j = 1; j < n; j++) { 
      dp[j] = (dp[j] + dp[j - 1]) % MOD;
    }
  }
  return dp[n - 1];
};
```
```java []
class Solution {
  public int valueAfterKSeconds(int n, int k) {
    final int MOD = 1000000007;
    int[] dp = new int[n];
    Arrays.fill(dp, 1);

    for (int i = 1; i <= k; i++) {
      for (int j = 1; j < n; j++) {
        dp[j] = (dp[j] + dp[j - 1]) % MOD;
      }
    }
    return dp[n - 1];
  }
}
```
```C++ []
class Solution {
public:
    int valueAfterKSeconds(int n, int k) {
        const int MOD = 1000000007;
        std::vector<int> dp(n, 1);

        for (int i = 1; i <= k; i++) {
            for (int j = 1; j < n; j++) {
                dp[j] = (dp[j] + dp[j - 1]) % MOD;
            }
        }
        return dp[n - 1];
    }
};
```
```python []
class Solution:
    def valueAfterKSeconds(self, n: int, k: int) -> int:
        MOD = 1000000007
        dp: List[int] = [1] * n

        for _ in range(1, k + 1):
            for j in range(1, n):
                dp[j] = (dp[j] + dp[j - 1]) % MOD

        return dp[-1]
        
``` 
