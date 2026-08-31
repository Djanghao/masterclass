# Iterate through queries vs. intervals

**Author:** votrubac
**Votes:** 61
**Link:** [https://leetcode.com/problems/minimum-interval-to-include-each-query/solutions/1186911/](https://leetcode.com/problems/minimum-interval-to-include-each-query/solutions/1186911/)

---

#### Solution 1: Iterate through queries

Here we sort queries by their position and intervals by their left point. Then we process queries in the increasing order, and maintain a set of intervals that can potentially overlap with each query. Intervals in that set are ordered by the interval size.

For each query, we first add overlapping intervals (`left <= query`) to our set. Then, we pick the first interval from the set (smallest, as intervals are sorted by their size in the set).

However, we need to check if the smallest interval still overlaps with our query. We use the second value in our set (`right`) to check and remove intervals that no longer overlap.

```cpp
vector<int> minInterval(vector<vector<int>>& ints, vector<int>& qs) {
    sort(begin(ints), end(ints));
    set<pair<int, int>> s;
    vector<int> ids(qs.size()), res(qs.size(), -1);
    iota(begin(ids), end(ids), 0);
    sort(begin(ids), end(ids), [&](const auto a, const auto b){ return qs[a] < qs[b]; });
    int j = 0;
    for (auto i : ids) {
        for (; j < ints.size() && ints[j][0] <= qs[i]; ++j)
            s.insert({ints[j][1] - ints[j][0] + 1, ints[j][1]});
        while (!s.empty() && begin(s)->second < qs[i])
            s.erase(begin(s));
        if (!s.empty())
            res[i] = begin(s)->first;
    }
    return res;
}
```

#### Solution 2: Iterate through intervals
This is another way to look at this problem. We process intervals from smaller to larger, and binary-search for queries that fit into the current interval.

For that, we store queries in a set; when a query fits into an interval, we record the answer and remote that query from the set. That way, we guarantee that we pick the smallest interval for that query.

```cpp
vector<int> minInterval(vector<vector<int>>& intervals, vector<int>& queries) {
    vector<int> res(queries.size(), -1);
    sort(intervals.begin(), intervals.end(), [](const auto &a, const auto &b) { return a[1] - a[0] < b[1] - b[0]; });
    set<pair<int, int>> s;
    for (int i = 0; i < queries.size(); ++i)
        s.insert({queries[i], i});
    for (auto &i : intervals) {
        auto it = s.lower_bound({i[0], 0});
        while (it != end(s) && it->first <= i[1]) {
            res[it->second] = i[1] - i[0] + 1;
            s.erase(it++);
        }
    }
    return res;
}
```