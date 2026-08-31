# Sliding Window

**Author:** votrubac
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimize-connected-groups-by-inserting-interval/solutions/5918581/](https://leetcode.com/problems/minimize-connected-groups-by-inserting-interval/solutions/5918581/)

---

We sort the intervals, and then trying to cover as many as we can with a window of size `k`.

When a window cannot cover the next interval, we advance the lift side of the window.

We also track how may gaps we have till the internval `i` in `dp[i]`.

Thus, `dp[i] - dp[l]` tells us the number of gaps covered by the window.

**C++**
```cpp
int minConnectedGroups(vector<vector<int>>& ints, int k) {
    sort(begin(ints), end(ints));
    vector<int> dp(ints.size());
    int max_gaps = 0, l = 0, last = ints[0][1];
    for (int i = 1; i < ints.size(); last = max(last, ints[i++][1])) {
        dp[i] = dp[i - 1] + (last < ints[i][0]);
        while (ints[l][1] + k < ints[i][0])
           ++l;
        max_gaps = max(max_gaps, dp[i] - dp[l]);
    }
    return dp.back() + 1 - max_gaps;
}
```