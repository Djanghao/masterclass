# [C++|Java|Python3] bottom-up DP

**Author:** ye15
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-good-binary-strings/solutions/3043179/](https://leetcode.com/problems/number-of-good-binary-strings/solutions/3043179/)

---

**C++**
```
class Solution {
public:
    int goodBinaryStrings(int minLength, int maxLength, int oneGroup, int zeroGroup) {
        vector<long> dp(maxLength+1); 
        for (int i = maxLength; i >= 0; --i) {
            if (minLength <= i) ++dp[i]; 
            if (i+oneGroup <= maxLength) dp[i] = (dp[i] + dp[i+oneGroup]) % 1'000'000'007; 
            if (i+zeroGroup <= maxLength) dp[i] = (dp[i] + dp[i+zeroGroup]) % 1'000'000'007; 
        }
        return dp[0]; 
    }
};
```
**Java**
```
class Solution {
    public int goodBinaryStrings(int minLength, int maxLength, int oneGroup, int zeroGroup) {
        long[] dp = new long[maxLength+1]; 
        for (int i = maxLength; i >= 0; --i) {
            if (minLength <= i) ++dp[i]; 
            if (i + oneGroup <= maxLength) dp[i] = (dp[i] + dp[i+oneGroup]) % 1_000_000_007; 
            if (i + zeroGroup <= maxLength) dp[i] = (dp[i] + dp[i+zeroGroup]) % 1_000_000_007; 
        }
        return (int) dp[0]; 
    }
}
```
**Python3**
```
class Solution:
    def goodBinaryStrings(self, minLength: int, maxLength: int, oneGroup: int, zeroGroup: int) -> int:
        dp = [0] * (maxLength+1)
        for i in range(maxLength, -1, -1): 
            if minLength <= i: dp[i] += 1
            if i+oneGroup <= maxLength: dp[i] += dp[i+oneGroup]
            if i+zeroGroup <= maxLength: dp[i] += dp[i+zeroGroup]
            dp[i] %= 1_000_000_007 
        return dp[0]
```