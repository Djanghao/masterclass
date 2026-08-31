# [Java/C++/Python] One Pass O(n)

**Author:** lee215
**Votes:** 80
**Link:** [https://leetcode.com/problems/longest-binary-subsequence-less-than-or-equal-to-k/solutions/2168227/](https://leetcode.com/problems/longest-binary-subsequence-less-than-or-equal-to-k/solutions/2168227/)

---

# **Solution 1: DP solution**
`dp[i]` means the minimum value of subsequence with length `i`

Time `O(n^2)`
Space `O(n)`
<br>

**Java**
```java
    public int longestSubsequence(String s, int k) {
        int dp[] = new int[s.length() + 1], j = 0;
        for (char c : s.toCharArray()) {
            if (dp[j] * 2 + c - '0' <= k) {
                dp[j + 1] = dp[j] * 2 + c - '0';
                j++;
            }
            for (int i = j; i > 0; --i)
                dp[i] = Math.min(dp[i], dp[i - 1] * 2 + c - '0');
        }
        return j;
    }
```

**C++**
```cpp
    int longestSubsequence(string s, int k) {
        int dp[1010] = {}, j = 0;
        for (char& v : s) {
            if (dp[j] * 2 + v - '0' <= k)
                dp[++j] = dp[j] * 2 + v - '0';
            for (int i = j; i > 0; --i)
                dp[i] = min(dp[i], dp[i - 1] * 2 + v - '0');
        }
        return j;
    }
```

**Python**
```py
    def longestSubsequence(self, s, k):
        dp = [0]
        for v in map(int, s):
            if dp[-1] * 2 + v <= k:
                dp.append(dp[-1] * 2 + v)
            for i in range(len(dp) - 1, 0, -1):
                dp[i] = min(dp[i], dp[i - 1] * 2 + v)
        return len(dp) - 1
```
<br>

# **Solution 2: One Pass**
We greedly take all 0s, and try to take as many 1s as possible.
To take the 1 with smaller cost, we take the 1s from rightmost.

Time `O(n)`
Space `O(1)`

**Java**
```java
    public int longestSubsequence(String s, int k) {
        int res = 0, cost = 1, n = s.length();
        for (int i = n - 1; i >= 0; --i) {
            if (s.charAt(i) == '0' || cost <= k) {
                k -= cost * (s.charAt(i) - '0');
                res++;
            }
            if (cost <= k)
                cost *= 2;
        }
        return res;
    }
```
**C++**
```cpp
    int longestSubsequence(string s, int k) {
        int res = 0, cost = 1, n = s.size();
        for (int i = n - 1; i >= 0; --i) {
            if (s[i] == '0' || cost <= k) {
                k -= cost * (s[i] - '0');
                res++;
            }
            if (cost <= k)
                cost *= 2;
        }
        return res;
    }
```
**Python**
Inspired by @Jiganesh
```py
    def longestSubsequence(self, s, k):
        i = 0
        while int(s[-i-1:], 2) <= k and i < 32 and i < len(s):
            i += 1
        return s[:-i].count('0') + i
```
