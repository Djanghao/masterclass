# Two-DP

**Author:** votrubac
**Votes:** 13
**Link:** [https://leetcode.com/problems/minimum-changes-to-make-k-semi-palindromes/solutions/4194543/](https://leetcode.com/problems/minimum-changes-to-make-k-semi-palindromes/solutions/4194543/)

---

Underneath that confusing description, there are just two simple DP problems.

One tricky thing to realize that the minimum lenght of a semi-palindrome is 2.

> Though, it does say in the description that "a" is not a semi-palindrome.

For fun, we will do one bottom-up, and another - top-down.

- Precompute minimum semi-palindrome operations for all substrings in `s` and store it in `memo_s`.
	- We need to do check operations for all valid `d` values.
		- We could do it in O(n ^ 3 * d), where d is the number of divisors.
		- Or, we can optimize it to O(n ^ 2 * d) if we re-use previous computations.
- DFS + memoisation to find the way to split `s` into `k` substrings.

## Checking semi-palindromes
Say we have string "abcdabcd" with `len == 8`. Valid `d` values are:
- `1`: "abcdabcd" - 4 operations to make it a palindrome.
- `2`: "acac", "bdbd" - also 4 operations.
- `4`: "aa", "bb", "cc" and "dd" - zero operations.

To check semi-palindromes efficiently, we identify left and right positions within the string:
- Left starts with `d - 1` and increments by `d`.
- Rigiht starts with `len - d - 1` and decrements by `d`.

**C++**
```cpp
int memo[201][101] = {}, memo_s[201][201], memo_d[201][201];
int dfs(int i, int k, const string &s) {
    if (i >= s.size() || k <= 0)
        return i == s.size() && k == 0 ? 0 : 10000;
    if (memo[i][k] == 0) {
        memo[i][k] = 10000;
        for (int len = 2; i + len <= s.size(); ++len)
            memo[i][k] = min(memo[i][k],
                1 + memo_s[i][len] + dfs(i + len, k - 1, s));
    }
    return memo[i][k] - 1;
}
int minimumChanges(const string &s, int k, int i = 0) {
    memset(memo_s, 1, sizeof(memo_s));
    for (int d = 1; d <= s.size() / 2; ++d) {
        memset(memo_d, 0, sizeof(memo_d));
        for (int len = 2 * d; len <= s.size(); len += d)
            for (int i = 0; i + len <= s.size(); ++i) {
                int ops = 0;
                for (int off = 0; off < d; ++off)
                    ops += s[i + off] != s[i + len - (d - off)];
                memo_d[i][len] = ops + memo_d[i + d][len - 2 * d];
                memo_s[i][len] = min(memo_s[i][len], memo_d[i][len]);
            }
    }
    return dfs(0, k, s);
}
```