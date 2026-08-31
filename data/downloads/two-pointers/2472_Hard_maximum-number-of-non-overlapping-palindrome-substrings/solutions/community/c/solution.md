# DP + Greedy

**Author:** votrubac
**Votes:** 56
**Link:** [https://leetcode.com/problems/maximum-number-of-non-overlapping-palindrome-substrings/solutions/2808897/](https://leetcode.com/problems/maximum-number-of-non-overlapping-palindrome-substrings/solutions/2808897/)

---

We precompute a 2d array `pal` that tells us whether a string between `i` and `j` is a palindrome (`pal[i][j] == true`).

This is the same DP approach as for [647. Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/).

Then, we use DP to find maximum number of splits.

**Important Optimization**
We only need to check palindromes of size `k` and `k + 1`. 

This is because if `[i - 1..i + k]` is a palindrome (with size  `k + 2`), then `[i..i + k - 1]` is also a palindome (with size `k`).

With this realization, we can greedily find the maximum number of splits (no 
need to use DP).
 
 ## Greedy Solution
 **C++**
 ```cpp
 bool pal[2002][2002] = {};
int maxPalindromes(string s, int k) {
    if (k == 1)
        return s.size();
    for (int len = 1; len <= k + 1; ++len)
        for (int i = 0, j = i + len - 1; j < s.size(); ++i, ++j)
            pal[i][j] = (len < 3 ? true : pal[i + 1][j - 1]) && (s[i] == s[j]);
    int i = 0, res = 0;
    for (int i = 0; i + k <= s.size(); ++i) {
        res += pal[i][i + k - 1] || pal[i][i + k];
        i += pal[i][i + k - 1] ? k - 1 : pal[i][i + k] ? k : 0;
    }
    return res;
}
 ```
 
 ## DP Solution
**C++**
```cpp
int dp[2001] = {};
bool pal[2001][2001] = {};
int dfs(int i, int k, string &s) {
    if (i + k > s.size())
        return 0;
    if (!dp[i]) {
        dp[i] = 1 + dfs(i + 1, k, s);
        if (pal[i][i + k - 1])
            dp[i] = max(dp[i], 2 + dfs(i + k, k, s));
        if (i + k < s.size() && pal[i][i + k])
            dp[i] = max(dp[i], 2 + dfs(i + k + 1, k, s));
    }
    return dp[i] - 1;
}
int maxPalindromes(string s, int k) {
    if (k == 1)
        return s.size();
    for (int len = 1; len <= k + 1; ++len)
        for (int i = 0, j = i + len - 1; j < s.size(); ++i, ++j)
            pal[i][j] = (len < 3 ? true : pal[i + 1][j - 1]) && (s[i] == s[j]);   
    return dfs(0, k, s);
}
```