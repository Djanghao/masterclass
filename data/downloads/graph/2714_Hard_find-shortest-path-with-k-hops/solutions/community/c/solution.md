# BFS

**Author:** votrubac
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-shortest-path-with-k-hops/solutions/3583710/](https://leetcode.com/problems/find-shortest-path-with-k-hops/solutions/3583710/)

---

We run simple BFS, memorizing the best result for node `i` and skips `cnt` in `dp[i][cnt]`.

I tried Dijkstra (prioritizing either by path or number of skips), but it did not affect the runtime.

I also tried a segment tree to query the minimum path in `[cnt, k]` range. The result was the same but the code was more complicated.

What helped the runtime (shaved ~100 ms) is to set `dp[i][cnt - 1]` every time we update `dp[i][cnt]`.

**C++**
```cpp
int shortestPathWithHops(int n, vector<vector<int>>& edges, int s, int d, int k) {
    vector<vector<array<int, 2>>> al(n);
    for (auto &e : edges) {
        al[e[0]].push_back({e[1], e[2]});
        al[e[1]].push_back({e[0], e[2]});
    }
    vector<vector<int>> dp(n, vector<int>(n, INT_MAX));
    dp[s][k] = 0;
    queue<array<int, 3>> q;
    q.push({s, k, 0});
    while(!q.empty()) {
        auto [i, cnt, path] = q.front(); q.pop();
        if (dp[i][cnt] != path || i == d)
            continue;
        for (auto [j, w] : al[i]) {
            if (dp[j][cnt] > dp[i][cnt] + w) {
                dp[j][cnt] = dp[i][cnt] + w;
                q.push({j, cnt, dp[j][cnt]});
                if (cnt > 0)
                    dp[j][cnt - 1] = min(dp[j][cnt - 1], dp[j][cnt]);
            }            
            if (cnt > 0 && dp[j][cnt - 1] > dp[i][cnt]) {
                dp[j][cnt - 1] = dp[i][cnt];
                q.push({j, cnt - 1, dp[j][cnt - 1]});
                if (cnt - 1 > 0)
                    dp[j][cnt - 2] = min(dp[j][cnt - 2], dp[j][cnt - 1]);
            }
        }
    }
    return *min_element(begin(dp[d]), end(dp[d]));
}
```