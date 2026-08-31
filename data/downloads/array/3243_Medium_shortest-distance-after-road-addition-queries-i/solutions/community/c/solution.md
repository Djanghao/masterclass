# DP

**Author:** votrubac
**Votes:** 38
**Link:** [https://leetcode.com/problems/shortest-distance-after-road-addition-queries-i/solutions/5583452/](https://leetcode.com/problems/shortest-distance-after-road-addition-queries-i/solutions/5583452/)

---

Unlike the [next problem](https://leetcode.com/problems/shortest-distance-after-road-addition-queries-ii/discuss/5583370/Sneaky-Constraint), here roads can partially overlap.

For each road `[l, r]`, we add `l` to the `roads[r]` array.

Then, we do a swipe and update the shortest path for each city in `dp`:
- `dp[i] = min(dp[i], 1 + min(dp[roads[i]]))`

> We could use Dijkstra's to find shortest path, but the solution will be more complicated, and the runtime could be slower.
> This solution is accepted in ~70 ms, which is pretty good already.

**C++**
```cpp
vector<int> shortestDistanceAfterQueries(int n, vector<vector<int>>& queries) {
    vector<vector<int>> roads(n);
    vector<int> dp(n), res;
    iota(begin(dp), end(dp), 0);
    for (const auto &q : queries) {
        roads[q[1]].push_back(q[0]);
        for (int i = q[1]; i < n; ++i) {
            dp[i] = min(dp[i], dp[i - 1] + 1);
            for (int l : roads[i])
                dp[i] = min(dp[i], dp[l] + 1);
        }
        res.push_back(dp[n - 1]);
    }
    return res;
}
```