# Brute-Force, DP and Rabin-Karp

**Author:** votrubac
**Votes:** 3
**Link:** [https://leetcode.com/problems/equalize-strings-by-adding-or-removing-characters-at-ends/solutions/5102038/](https://leetcode.com/problems/equalize-strings-by-adding-or-removing-characters-at-ends/solutions/5102038/)

---

**Intuition:** We need to find the longest common substring. Other characters need to be removed/inserted.

1. Brute force: O(n * m * m) time | O(1) memory complexity, accepted with 200ms.
	- The runtime is surprisingly small. Probably due to week test cases.
2. DP: O(n * m) time | O(n) memory complexity, accepted with 162ms.
3. Rabin-Karp: O((n + m) log n) time | O(n) memory complexity, accepted with 77ms. 

#### Brute-Force
Perhaps due to week test cases, this cubic solution is accepted with a pretty good runtime.

**C++**
```cpp
int minOperations(const string &s, const string &t) {
    int lcs = 0;
    for (int i = 0; i < s.size(); ++i)
        for (int j = 0, cnt; j < t.size(); ++j) {
            for (cnt = 0; cnt < min(s.size() - i, t.size() - j); ++cnt)
                if (s[i + cnt] != t[j + cnt])
                    break;
            lcs = max(lcs, cnt);
        }
    return s.size() + t.size() - 2 * lcs;
}
```
#### DP
**C++**
```cpp
int minOperations(const string &s, const string &t) {
    int dp[2][1001] = {}, lcs = 0;
    for (int i = 0; i < s.size(); ++i)
        for (int j = 0; j < t.size(); ++j) {
            dp[i % 2][j + 1] = s[i] == t[j] ? 1 + dp[!(i % 2)][j] : 0;
            lcs = max(lcs, dp[i % 2][j + 1]);
        }
    return s.size() + t.size() - 2 * lcs;
}
```
#### Rabin-Karp
The previous solution has O(n * m) complexity. We can speed it up by using binary search and rolling hash.

Note that we need to check for collisions, but I omit it here for the simplicity.

**C++**
The `rollingHash` method serves two purposes. If `check` is false, it populates hashes into a hash set.

Otherwise, it check if a hash is in the set, and returns true if it is.

Note that we populate hash for the smaller string to improve the runtime.

```cpp
bool rollingHash(const string &s, int sz, unordered_set<int> &hs, bool check) {
    long long hash = 0, d = 1, base = 27, mod = 1000000007;
    for (int i = 0; i < s.size(); ++i) {
        hash = (hash * base + (s[i] - 'a')) % mod;
        if (i >= sz)
            hash = (mod + hash - d * (s[i - sz] - 'a') % mod) % mod;
        else
            d = d * base % mod;
        if (i >= sz - 1) {
            if (!check)
                hs.insert(hash);
            else if (hs.contains(hash))
                return true;
        }
    }
    return false;
}
int minOperations(string &s, string &t) {    
    if (s.size() > t.size())
        swap(s, t);
    int l = 0, r = min(s.size(), t.size());
    while (l < r) {
        int m = (l + r + 1) / 2;
        unordered_set<int> hs;
        rollingHash(s, m, hs, false);
        if (rollingHash(t, m, hs, true))
            l = m;
        else
            r = m - 1;
    }
    return s.size() + t.size() - 2 * l;
}  
```