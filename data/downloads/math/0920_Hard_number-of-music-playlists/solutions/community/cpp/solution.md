# 🔥C++ Simple Solution DP+Memoization🔥 With Explaination🔥

**Author:** ekansh1309
**Votes:** 93
**Link:** [https://leetcode.com/problems/number-of-music-playlists/solutions/3869515/](https://leetcode.com/problems/number-of-music-playlists/solutions/3869515/)

---

# Explaination
The goal is to find the number of distinct playlists of length `goal` that can be created using `n` different songs, with the constraint that the same song cannot appear in consecutive positions in the playlist, and there should be at least `k` songs between any two occurrences of the same song.

The function `numMusicPlaylists` takes three parameters: `n` (number of songs), `goal` (length of the playlist), and `k` (minimum number of songs between repeated songs). It uses dynamic programming to find the answer efficiently.

The `solve` function is a recursive helper function that calculates the number of valid playlists of length `goal` using `n` songs and satisfying the constraint of `k`. It uses memoization (dynamic programming) to avoid redundant calculations and improve efficiency.

Approach:
1. The base cases of the recursive function `solve` are:
   - If there are no songs left (`n == 0`) and the playlist length is also zero (`goal == 0`), we have found a valid playlist, so return 1.
   - If there are no songs left (`n == 0`) but the playlist length is still greater than zero (`goal > 0`), or vice versa, it is not possible to create a valid playlist, so return 0.

2. If the value of `dp[n][goal]` is already calculated (not equal to -1), return it. This is the memoization step to avoid redundant calculations.

3. The main recursive steps:
   - `pick`: We choose a song for the current position in the playlist. There are `n` choices for the first position, `n - 1` for the second, and so on. So, we multiply `solve(n - 1, goal - 1, k, dp)` by `n` to count all valid playlists when we pick a song for the current position.
   - `notpick`: We do not choose a song for the current position. In this case, we can select any song from the remaining `max(n - k, 0)` songs (to ensure there are at least `k` songs between repeated songs). So, we multiply `solve(n, goal - 1, k, dp)` by `max(n - k, 0)`.

4. Finally, we return the result of the recursive calculation and store it in `dp[n][goal]` for future use.



# Complexity
- Time complexity: O(n * goal)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:  O(n * goal)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    #define ll long long
    const int MOD = 1e9 + 7;
    ll solve(int n, int goal, int k, vector<vector<int>>& dp) {
        if (n == 0 && goal == 0) return 1;
        if (n == 0 || goal == 0) return 0;
        if (dp[n][goal] != -1) return dp[n][goal];
        ll pick = solve(n - 1, goal - 1, k, dp) * n;
        ll notpick = solve(n, goal - 1, k, dp) * max(n - k, 0);
        return dp[n][goal] = (pick + notpick) % MOD;
    }

    int numMusicPlaylists(int n, int goal, int k) {
        vector<vector<int>> dp(n + 1, vector<int>(goal + 1, -1));
        return solve(n, goal, k, dp);
    }
};
```