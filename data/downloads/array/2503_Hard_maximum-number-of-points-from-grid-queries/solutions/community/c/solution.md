# BFS + Prefix Sum

**Author:** votrubac
**Votes:** 31
**Link:** [https://leetcode.com/problems/maximum-number-of-points-from-grid-queries/solutions/2899355/](https://leetcode.com/problems/maximum-number-of-points-from-grid-queries/solutions/2899355/)

---

We do BFS search, exploring cells with minimum value first (we use min heap instead of queue for that).

We also track the maximum value so far (`cur`). A point collected at this cell requires a query larger than `cur`.

When we process a query, we sum all points collected for values `[1...qs[i])`. A prefix sum is an efficient way to do this.

We can either use BIT, or do a line sweep in the end.

## BIT
**C++**
```cpp
constexpr int static n = 1000000;
int bt[n + 1] = {};
int prefix_sum(int i)
{
    int sum = 0;
    for (i = i + 1; i > 0; i -= i & (-i))
        sum += bt[i];
    return sum;
}
void add(int i, int val)
{
    for (i = i + 1; i <= n; i += i & (-i))
        bt[i] += val;
}
int dirs[5] = { -1, 0, 1, 0, -1};
vector<int> maxPoints(vector<vector<int>>& g, vector<int>& qs) {
    int si = g.size(), sj = g[0].size(), cur = 1;
    priority_queue<array<int, 3>> pq;
    pq.push({-g[0][0], 0, 0});
    g[0][0] = 0;
    while(!pq.empty()) {
        auto [nval, i, j] = pq.top(); pq.pop();
        cur = max(cur, -nval);
        add(cur, 1);
        for (int d = 0; d < 4; ++d) {
            int x = i + dirs[d], y = j + dirs[d + 1];
            if (min(x, y) >= 0 && x < si && y < sj && g[x][y]) {
                pq.push({-g[x][y], x, y});
                g[x][y] = 0;
            }
        }
    }
    transform(begin(qs), end(qs), begin(qs), [&](int val){ return prefix_sum(val - 1); });
    return qs;
}
```
## Map
**C++**
```cpp
int dirs[5] = { -1, 0, 1, 0, -1};
vector<int> maxPoints(vector<vector<int>>& g, vector<int>& qs) {
    int si = g.size(), sj = g[0].size(), cur = 1;
    priority_queue<array<int, 3>> pq;
    map<int, int> psum;
    pq.push({-g[0][0], 0, 0});
    g[0][0] = 0;
    while(!pq.empty()) {
        auto [nval, i, j] = pq.top(); pq.pop();
        cur = max(cur, -nval);
        ++psum[cur];
        for (int d = 0; d < 4; ++d) {
            int x = i + dirs[d], y = j + dirs[d + 1];
            if (min(x, y) >= 0 && x < si && y < sj && g[x][y]) {
                pq.push({-g[x][y], x, y});
                g[x][y] = 0;
            }
        }
    }
    for (auto it = next(begin(psum)); it != end(psum); ++it) {
        it->second += prev(it)->second;
    }
    transform(begin(qs), end(qs), begin(qs), [&](int val){ 
        auto it = psum.lower_bound(val);
        return it == begin(psum) ? 0 : prev(it)->second; 
    });
    return qs;
}
```