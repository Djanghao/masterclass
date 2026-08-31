# One Liner (Weak Test Cases)

**Author:** votrubac
**Votes:** 4
**Link:** [https://leetcode.com/problems/check-if-there-is-a-path-with-equal-number-of-0s-and-1s/solutions/2943820/](https://leetcode.com/problems/check-if-there-is-a-path-with-equal-number-of-0s-and-1s/solutions/2943820/)

---

What is the size of any path? It is `n + m - 1`.

Therefore, an equal path contains exactly `(n + m - 1) / 2` ones. It also means that  `n + m - 1` must be even.

## Top-Down DP
We memoize `i`, `j`, and `ones`. We also prune if we get too many ones.

**C++**
```cpp
bool dp[101][101][100] = {};
bool dfs(int i, int j, int si, int sj, int ones, vector<vector<int>>& g) {
    if (i >= si || j >= sj || ones > (si + sj - 1) / 2 || dp[i][j][ones])
        return false;
    dp[i][j][ones] = true;
    ones += g[i][j];
    if (i == si - 1 && j == sj - 1)
        return ones == (si + sj - 1) / 2;
    return dfs(i + 1, j, si, sj, ones, g) || dfs(i, j + 1, si, sj, ones, g);
}
bool isThereAPath(vector<vector<int>>& g) {
    int si = g.size(), sj = g[0].size();
    return (si + sj) % 2 && dfs(0, 0, si, sj, 0, g);
}
```

## Bottom-Up DP
**C++**
We use a `bitset` to track number of ones from all paths to cell `g[i][j]`.

Bitset is quite powerful - we use **OR** to combine bits from cells on the left and above.

If the current cell's value is `1`, we left-shift the bitset value. This "adds" one to all previous number of ones.

**C++**
```cpp
bool isThereAPath(vector<vector<int>>& g) {
    int si = g.size(), sj = g[0].size();
    if ((si + sj - 1) % 2)
        return false;
    vector<bitset<101>> prev(sj);
    prev[0].set(0);
    for (int i = 0; i < si; ++i) {
        vector<bitset<101>> cur(sj);
        for (int j = 0; j < sj; ++j)
            cur[j] = ((j ? cur[j - 1] : 0) | prev[j]) << g[i][j];
        swap(prev, cur);
    }
    return prev[sj - 1].test((si + sj - 1) / 2);
}
```

## One Liner - Weak Test Cases

At the moment, the solution below is AC due to week test cases.

> Update: two test cases were added since, and one-liner is not AC anymore.

This solution fails `[[0,1,1,1],[0,1,1,1],[1,1,1,1]]` (missing test case).

**C++**
```cpp
bool isThereAPath(vector<vector<int>>& g) {
    return (g.size() + g[0].size() - 1) % 2 == 0;
}
```