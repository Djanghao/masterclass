# Top-Down and Bottom-Up

**Author:** votrubac
**Votes:** 57
**Link:** [https://leetcode.com/problems/stone-game-viii/solutions/1224872/](https://leetcode.com/problems/stone-game-viii/solutions/1224872/)

---

Regardless of how the game was played till now, ending a move with stone `i` will add sum of all `[0.. i]` stones to your score. So, we first compute a prefix sum to get scores in O(1); in other words, `st[i]` will be a sum of all stones `[0..i]`.

The first player can take all stones and call it a day if all values are positive. Since there could be negatives, we may want the other player to pick some stones too. 

Let's say `dp[i]` represents the maximum score difference if the *first player* ends their *first move* with stone `i` or later. We start from the right, and for `i == n - 1` it will be the sum of all stones.

If the *first players* ends the move with stone `i - 1`, the difference will be `st[i - 1] - dp[i]`. The reason for that is that `dp[i]` now represents the maximum score difference for the *second player*. If the first player ended the move with stone `i - 1`, the second player can play and end their turn with stone `i` or later.

So, if the first player picks `i - 1`, the difference will be `st[i - 1] - dp[i]`, or if the player picks some later stone, the difference will be `dp[i]`. Therefore, to maximize the difference, we pick the best of these two choices: `dp[i - 1] = max(dp[i], st[i - 1] - dp[i])`.

#### Approach 1: Top-Down
This approach looks kind of similar to Knapsack 0/1. We either stop our turn at the stone `i`, or keep adding stones.

**C++**
```cpp
int dp[100001] = { [0 ... 100000] = INT_MIN };
int dfs(vector<int>& st, int i) {
    if (i == st.size() - 1)
        return st[i];
    if (dp[i] == INT_MIN)
        dp[i] = max(dfs(st, i + 1), st[i] - dfs(st, i + 1));
    return dp[i];
}
int stoneGameVIII(vector<int>& st) {
    partial_sum(begin(st), end(st), begin(st));
    return dfs(st, 1);
}
```

#### Approach 2: Bottom-Up
Tabulation allows us to achieve O(1) memory complexity. Since we only look one step back, we can use a single variable `res` instead of the `dp` array.

**C++**
```cpp
int stoneGameVIII(vector<int>& st) {
    partial_sum(begin(st), end(st), begin(st));
    int res = st.back();
    for (int i = st.size() - 2; i > 0; --i)
        res = max(res, st[i] - res);
    return res;
}
```
**Python 3**
```python
class Solution:
    def stoneGameVIII(self, s: List[int]) -> int:
        s, res = list(accumulate(s)), 0
        for i in range(len(s) - 1, 0, -1):
            res = s[i] if i == len(s) - 1 else max(res, s[i] - res)
        return res
```