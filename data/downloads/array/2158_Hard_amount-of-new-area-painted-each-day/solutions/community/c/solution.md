# [C++] Simple solution with a set

**Author:** JocalAreaNetwork
**Votes:** 16
**Link:** [https://leetcode.com/problems/amount-of-new-area-painted-each-day/solutions/1741258/](https://leetcode.com/problems/amount-of-new-area-painted-each-day/solutions/1741258/)

---

One can do a segment tree with lazy updates here, but it is really not needed. C++'s set has `O(logN)` find and erase, so we can just keep track of the unpainted areas.

```
class Solution {
public:
    vector<int> amountPainted(vector<vector<int>>& paint) {
        auto min_start = INT_MAX, max_end = INT_MIN;
        for (const auto& row : paint) {
            min_start = min(min_start, row[0]);
            max_end = max(max_end, row[1]);
        }
        
        set<int> painting;
        for (int i = min_start; i < max_end; ++i)
            painting.insert(i);
        
        vector<int> res;
        res.reserve(paint.size());
        for (const auto& row : paint) {
            int count = 0;
            auto it = painting.lower_bound(row[0]);
            while (it != painting.end() && *it < row[1]) {
                it = painting.erase(it);
                ++count;
            }
            
            res.push_back(count);
        }
        
        return res;
    }
};
```

If the painting ranges become bigger than the current `O(10^4)`, we could use coordinate compression and the approach would still work.