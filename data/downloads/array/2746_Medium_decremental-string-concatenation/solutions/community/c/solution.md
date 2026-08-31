# DP

**Author:** votrubac
**Votes:** 10
**Link:** [https://leetcode.com/problems/decremental-string-concatenation/solutions/3677609/](https://leetcode.com/problems/decremental-string-concatenation/solutions/3677609/)

---

Note that you can only concatenate adjacent strings. I initially missed this point from the description.

We go from left to right, and for each string we have two choices.

So, without memoisation, the complexity would be O(2 ^ n), where `n` is the number of strings.

Each time we add a string, it changes either left or the right character of the resuting string.

So, we can memoise for these two characters, resulting in O(n * 26 * 26) complexity.

**C++**
```cpp
int dp[1001][26][26] = {};
int dfs(int i, int l, int r, vector<string>& w) {
    if (i == w.size())
        return 0;
    if (dp[i][l][r] == 0)
        dp[i][l][r] = w[i].size() + min(
            dfs(i + 1, l, w[i].back() - 'a', w) - (w[i][0] - 'a' == r),
            dfs(i + 1, w[i][0] - 'a', r, w) - (w[i].back() - 'a' == l));
    return dp[i][l][r];
}
int minimizeConcatenatedLength(vector<string>& words) {
    return words[0].size() + dfs(1, words[0][0] - 'a', words[0].back() - 'a', words);
}
```

## Optimized Solution
One of the characters always belong to a previous string.

So, instead of memoising `l` and `r`, we can memoise the other character, and whether that character is on the left of right side.

**C++**
```cpp
int dp[1001][26][2] = {};
int dfs(int i, int ch, bool left, vector<string>& w) {
    if (i == w.size())
        return 0;
    if (dp[i][ch][left] == 0) {
        int l = left ? ch : w[i - 1][0] - 'a', r = !left ? ch : w[i - 1].back() - 'a';
        dp[i][ch][left] = w[i].size() + min(
            dfs(i + 1, l, true, w) - (w[i][0] - 'a' == r),
            dfs(i + 1, r, false, w) - (w[i].back() - 'a' == l));
    }
    return dp[i][ch][left];
}
int minimizeConcatenatedLength(vector<string>& words) {
    return words[0].size() + dfs(1, words[0][0] - 'a', true, words);
}
```