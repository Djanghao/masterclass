# Sort Queries vs. Exponential Monostack

**Author:** votrubac
**Votes:** 46
**Link:** [https://leetcode.com/problems/find-building-where-alice-and-bob-can-meet/solutions/4304840/](https://leetcode.com/problems/find-building-where-alice-and-bob-can-meet/solutions/4304840/)

---

## Sort Queries
The solution exploits the fact that we know all queries in advance. Therefore, we can process them in any order we want.

> For the online variant (when we can request any query at any time), check the Exponential Monostack solution below.

1. Swap indices in each query so that `a <= b`.
2. Exclude obvious cases when `a == b` or `heights[a] < heights[b]`.
	- Set the result to `b`.
3. Sort the remaining queries by `b`, decreasing.
4. For each `b`, update the monostack so it contains increasing heights for range `(b, n)`.
5. Binary-search the monostack for the first height larger than `a`.

**Python 3**
```python
class Solution:
    def leftmostBuildingQueries(self, heights: List[int], queries: List[List[int]]) -> List[int]:
        res, idx = [0] * len(queries), []
        for i, q in enumerate(queries):
            a, b = sorted(q)
            if a == b or heights[a] < heights[b]:
                res[i] = b
            else:
                idx.append((a, b, i))
        j, mono = len(heights) - 1, deque()
        for a, b, i in sorted(idx, key=itemgetter(1), reverse=True):
            while j > b:
                while mono and heights[mono[0]] < heights[j]:
                    mono.popleft()
                mono.appendleft(j)
                j -= 1
            k = bisect_right(mono, heights[a], key=lambda x: heights[x])
            res[i] = -1 if k == len(mono) else mono[k]
        return res
```
**C++**
```cpp
vector<int> leftmostBuildingQueries(vector<int>& heights, vector<vector<int>>& qs) {
    vector<int> mono, idx, res(qs.size());
    for (int i = 0; i < qs.size(); ++i) {
        sort(begin(qs[i]), end(qs[i]));
        if (qs[i][0] == qs[i][1] || heights[qs[i][0]] < heights[qs[i][1]])
            res[i] = qs[i][1];
        else
            idx.push_back(i);
    }
    sort(begin(idx), end(idx), [&](int i, int j) { return qs[i][1] > qs[j][1]; });
    int j = heights.size() - 1;
    for (int i : idx) {
        int a = qs[i][0], b = qs[i][1];
        while (j > b) {
            while (!mono.empty() && heights[mono.back()] <= heights[j])
                mono.pop_back();
            mono.push_back(j--);
        }
        auto it = upper_bound(rbegin(mono), rend(mono), a, [&](int i, int j){
            return heights[i] < heights[j];
        });
        res[i] = it == rend(mono) ? -1 : *it;
    }
    return res;
}
```
## Exponential Monostack
The idea is simple: for each height, store the next index of the larger height to the right. We can pre-compute it using a monostack.

When answering a query, start from `b` and hop higher and higher, until you find a height that is larger than `height[a]`.

This approach, however, has a linear time complexity for each query. 

As an alternative, we can store a copy of monostack for each element. It will improve the time complexity to O(log n) but increase the memory complexity to O(n * n).

Of course, it will require O(n * n) time for the initial processing.

As a trade-off, we can combine these two ideas by storing exponential monostack (e.g. [2,4,8,10] instead of [2,3,4,5,6,7,8,9,10]).

This is similar to the "Skip List" data structure.

**C++**
```cpp
vector<int> leftmostBuildingQueries(vector<int>& heights, vector<vector<int>>& qs) {
    int n = heights.size(), m = qs.size();
    vector<vector<int>> skip(n);
    vector<int> res, mono;
    for (int i = n - 1; i >= 0; --i) {
        while (!mono.empty() && heights[mono.back()] <= heights[i])
            mono.pop_back();
        int sz = mono.size(); // building skip list.
        for (int p = 1; p <= sz; p = max(2 * p, sz))
            skip[i].push_back(mono[sz - p]);
        mono.push_back(i);
    }
    for (const auto &q : qs) {
        int a = min(q[0], q[1]), b = max(q[0], q[1]), ans = -1;
        if (a == b || heights[a] < heights[b])
            ans = b;
        else if (!skip[b].empty() && heights[a] < heights[skip[b].back()]) {
            ans = max(skip[a][0], skip[b][0]);
            while (heights[a] >= heights[ans]) {
                auto it = upper_bound(begin(skip[ans]), end(skip[ans]), a, [&](int i, int j){
                    return heights[i] < heights[j];
                });
                ans = it == begin(skip[ans]) ? *it : *prev(it);
            }
        }
        res.push_back(ans);
    }
    return res;
}
```