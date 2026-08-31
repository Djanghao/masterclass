# Simple map solution in C++

**Author:** cpcs
**Votes:** 39
**Link:** [https://leetcode.com/problems/maximum-sum-queries/solutions/3624007/](https://leetcode.com/problems/maximum-sum-queries/solutions/3624007/)

---

# Intuition
We can sort the query and points by x values.
And for each query, since x is decreasing, we just add more points to the candidate set.
Now, we consider all qulified y values. We save a map that maps each y value to (x + y). 

Since we are querying the maximum values with y >= y',
the larger the key is, the smaller the value should be. When we insert a (key, value) pair in the map, we should trim the map to keep the monotonicity in the map. Just like how we maintain a monotonic stack/queue.


# Complexity
- Time complexity:
O((n + q)logn + qlogq)

- Space complexity:
O(n)

# Code
```
class Solution {
    void update(map<int, int> &values, int key, int value) {
        auto t = values.lower_bound(key);
        if (t != values.end() /*&& t->second >= value*/) {
            return;
        }
        if (t != values.begin()) {
            --t;
            while (t->second <= value) {
                if (t == values.begin()) {
                    values.erase(t);
                    break;
                } else {
                    values.erase(t--);
                }
            }
        }
        values.insert({key, value});
    }
    
    int query(const map<int, int> values, int key) {
        const auto t = values.lower_bound(key);
        return t == values.end() ? (-1) : t->second;
    }
    
public:
    vector<int> maximumSumQueries(vector<int>& nums1, vector<int>& nums2, vector<vector<int>>& queries) {
        const int n = nums1.size();
        vector<pair<int, int>> v(n);
        for (int i = 0; i < n; ++i) {
            v[i] = {nums1[i], nums2[i]};
        }
        sort(v.begin(), v.end());
        const int m = queries.size();
        vector<int> ind(m);
        for (int i = 0; i < m; ++i) {
            ind[i] = i;
        }
        sort(ind.begin(), ind.end(), [&](const int x, const int y) {
            return queries[x][0] > queries[y][0];
        });
        vector<int> r(m);
        map<int, int> values;
        for (int i = 0, j = n - 1; i < m; ++i) {
            for (; j >= 0 && v[j].first >= queries[ind[i]][0]; update(values, v[j].second, v[j].first + v[j].second), --j)
            ;
            r[ind[i]] = query(values, queries[ind[i]][1]);
        }
        return r;
    }
};
```