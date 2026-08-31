# Map

**Author:** votrubac
**Votes:** 8
**Link:** [https://leetcode.com/problems/maximum-sum-queries/solutions/3641946/](https://leetcode.com/problems/maximum-sum-queries/solutions/3641946/)

---

We first sort both queries and points by `x`, decreasing.

As we process queries in the decreasing order of `x`, we add qualified points (such as `nums1[i] >= x`) into map `m`.

As we insert new qualified point `{y, x + y}` into the map, we also need to remove all points to the left with smaller value `{x + y}`.

To answer a query, we just need to search our map for the same or larger `y`.

**C++**
```cpp
vector<int> maximumSumQueries(vector<int>& nums1, vector<int>& nums2, vector<vector<int>>& queries) {
    vector<int> nids(nums1.size()), qids(queries.size()), res(queries.size(), -1);
    iota(begin(nids), end(nids), 0);
    iota(begin(qids), end(qids), 0);    
    sort(begin(nids), end(nids), [&](int i, int j){ return nums1[i] > nums1[j]; });
    sort(begin(qids), end(qids), [&](int i, int j){ return queries[i][0] > queries[j][0]; });
    map<int, int> m;
    int nid = 0;
    for (int qid : qids) {
        int xi = queries[qid][0], yi = queries[qid][1];
        while(nid < nids.size() && nums1[nids[nid]] >= xi) {
            int x = nums1[nids[nid]], y = nums2[nids[nid]];
            auto it = m.upper_bound(y);
            if (it == end(m) || it->second < x + y) {
                it = m.insert({y, x + y}).first;
                while (it != begin(m) && prev(it)->second <= x + y)
                    m.erase(prev(it));
            }
            ++nid;
        }
        if (auto it = m.lower_bound(yi); it != end(m))
            res[qid] = it->second;
    }
    return res;
}
```