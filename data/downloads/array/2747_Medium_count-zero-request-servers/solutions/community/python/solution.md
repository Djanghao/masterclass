# Sliding Window

**Author:** votrubac
**Votes:** 42
**Link:** [https://leetcode.com/problems/count-zero-request-servers/solutions/3677619/](https://leetcode.com/problems/count-zero-request-servers/solutions/3677619/)

---

The idea is to process queries in a sorter order.

We first sort both queries and logs by `time`. 

> Note that we use `ids` array for queries so we can populate the result in the original query order.

That way, we can use a sliding window `[j, i]` to only include relevant logs for each query:
- include logs with lesser or equal query time `t`.
- exclude logs before  `t - x`.

We use `cnt` to count the number of requests in the sliding window, and `used` to count unique servers.

**C++**
```cpp
vector<int> countServers(int n, vector<vector<int>>& logs, int x, vector<int>& qs) {
    sort(begin(logs), end(logs), [](const auto &l1, const auto &l2){ return l1[1] < l2[1]; });
    vector<int> ids(qs.size()), res(qs.size()), cnt(n + 1);
    iota(begin(ids), end(ids), 0);
    sort(begin(ids), end(ids), [&](int i, int j){ return qs[i] < qs[j]; });
    int i = 0, j = 0, used = 0;
    for (int id : ids) {
        for (; i < logs.size() && logs[i][1] <= qs[id]; ++i)
            used += (++cnt[logs[i][0]] == 1);
        for (; j < logs.size() && logs[j][1] < qs[id] - x; ++j)
            used -= (--cnt[logs[j][0]] == 0);
        res[id] = n - used;
    }
    return res;
}
```

**Python 3**
```python
class Solution:
    def countServers(self, n: int, logs: List[List[int]], x: int, queries: List[int]) -> List[int]:
        res, cnt = [0] * len(queries), Counter()
        i, j, used = 0, 0, 0
        logs.sort(key=lambda l : l[1])
        for [t, id] in sorted([t, id] for id, t in enumerate(queries)):
            while i < len(logs) and logs[i][1] <= t:
                cnt[logs[i][0]] += 1
                used += cnt[logs[i][0]] == 1
                i += 1
            while j < i and logs[j][1] < t - x:
                cnt[logs[j][0]] -= 1
                used -= cnt[logs[j][0]] == 0
                j += 1
            res[id] = n - used
        return res
```