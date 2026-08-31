# C++ map and set

**Author:** smoothio
**Votes:** 3
**Link:** [https://leetcode.com/problems/shortest-distance-to-target-color/solutions/1205238/](https://leetcode.com/problems/shortest-distance-to-target-color/solutions/1205238/)

---

```
class Solution {
public:
    vector<int> shortestDistanceColor(vector<int>& colors, vector<vector<int>>& queries) {
        int inf = numeric_limits<int>::max();
        map<int, set<int>> m;
        for (int i = 0; i < colors.size(); ++i) {
            m[colors[i]].insert(i);
        }
        vector<int> res;
        for (int i = 0; i < queries.size(); ++i) {
            int index = queries[i][0];
            int color = queries[i][1];
            auto iter = m.find(color);
            if (iter == m.end()) {
                res.push_back(-1);
            } else {
                int dist = inf;
                auto lower_iter = iter->second.lower_bound(index);
                if (lower_iter == iter->second.end() || *lower_iter > index) {
                    --lower_iter;
                    if (*lower_iter < index) {
                        dist = index - *lower_iter;
                    }
                } else {
                    dist = index - *lower_iter;
                }
                auto upper_iter = iter->second.upper_bound(index);
                if (upper_iter != iter->second.end()) {
                    dist = min(dist, *upper_iter - index);
                }
                if (dist != inf) {
                    res.push_back(dist);
                } else {
                    res.push_back(-1);
                }
            }
        }
        return res;
    }
};
```