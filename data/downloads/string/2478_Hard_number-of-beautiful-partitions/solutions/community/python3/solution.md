# [C++, Python] Short DP explained

**Author:** tojuna
**Votes:** 69
**Link:** [https://leetcode.com/problems/number-of-beautiful-partitions/solutions/2833126/](https://leetcode.com/problems/number-of-beautiful-partitions/solutions/2833126/)

---

# Intuition
We will have to use dynamic programming because there are overlapping subproblems. n^3 dp will fail due to time constraints. To use n^2 dp we will keep a flag `at_start` which means that the substring starts at this point and as per the question the start should be prime.

# Approach
DP
* The DP state is defined by `i`, `at_start` and `k`. `i` ranges from 0 to length of s, `at_start` is true of false and `k` ranges from k to 0. Hence time complexity = (length of s) * 2 * k
* If we reach the end of string (i == n) return k == 0 which means that we have exactly `k` substrings
* If `i > n` or `k` is prematurely 0 or s[i] is not a prime number and we are at start of string we return 0
* If s[i] is a prime number and we are at start of string move minLength characters ahead
* If s[i] is a prime number and we are *not* at start of string return the (i + 1) state because we cannot end the substring here
* If s[i] is not prime we can either set this as end of current substring or continue making the current substring longer. We sum both these cases and return the result

# Complexity
- Time complexity: O(nk)

- Space complexity: O(nk)

# Code
**Python3**
```
def beautifulPartitions(self, s: str, k: int, minLength: int) -> int:
    n, primes, mod = len(s), set('2357'), (10 ** 9) + 7
    @cache
    def dp(i, at_start, k):
        if i == n: return int(k == 0)
        if i > n or k == 0 or s[i] not in primes and at_start: return 0
        if s[i] in primes:
            if at_start: return dp(i + minLength - 1, False, k)
            else: return dp(i + 1, False, k)
        return (dp(i + 1, True, k - 1) + dp(i + 1, False, k)) % mod
    return dp(0, True, k)
```

**C++**
```
unordered_set<char> prime {'2', '3', '5', '7'};
int mod = 1e9 + 7, minLength, dp[1001][2][1001]; 
int beautifulPartitions(string s, int k, int ml) {
    minLength = ml;
    memset(dp, -1, sizeof dp);
    return dfs(0, true, k, s);
}
int dfs(int i, bool at_start, int k, string& s, int ans = 0) {
    if (i == s.size()) return k == 0;
    if (i > s.size() || k == 0 || !prime.count(s[i]) && at_start) return 0;
    if (dp[i][at_start][k] != -1) return dp[i][at_start][k];
    if (prime.count(s[i])) {
        if (at_start) ans = dfs(i + minLength - 1, false, k, s);
        else ans = dfs(i + 1, false, k, s);
    }
    else ans = (dfs(i + 1, true, k - 1, s) + dfs(i + 1, false, k, s)) % mod;
    return dp[i][at_start][k] = ans;
}
```
