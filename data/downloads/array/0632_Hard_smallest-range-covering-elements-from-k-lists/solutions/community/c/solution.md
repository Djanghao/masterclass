# C++ sliding window easy solution

**Author:** netcan
**Votes:** 148
**Link:** [https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/solutions/624185/](https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/solutions/624185/)

---

Firstly we merge k groups to one group, each number recoard it's group, eg:

[[4,10,15,24,26], [0,9,12,20], [5,18,22,30]]

after merged we got\uFF1A
[(0, 1), (4, 0), (5, 2), (9, 1), (10, 0), (12, 1), (15, 0), (18, 2), (20, 1), (22, 2), (24, 0), (26, 0), (30, 2)]

and see only group, it's
[1, 0, 2, 1, 0, 1, 0, 2, 1, 2, 0, 0, 2]

we can slide window by group when current groups satifies condition and recoard min range.
```
[1 0 2] 2 1 0 1 0 2 1 2 0 0 2    [0, 5]
1 [0 2 1] 1 0 1 0 2 1 2 0 0 2    [0, 5]
1 0 [2 1 0] 0 1 0 2 1 2 0 0 2    [0, 5]
1 0 [2 1 0 1] 1 0 2 1 2 0 0 2    [0, 5]
1 0 [2 1 0 1 0] 0 2 1 2 0 0 2    [0, 5]
1 0 2 1 0 [1 0 2] 2 1 2 0 0 2    [0, 5]
1 0 2 1 0 1 [0 2 1] 1 2 0 0 2    [0, 5]
1 0 2 1 0 1 [0 2 1 2] 2 0 0 2    [0, 5]
1 0 2 1 0 1 0 2 [1 2 0] 0 0 2    [20, 24]
1 0 2 1 0 1 0 2 [1 2 0 0] 0 2    [20, 24]
1 0 2 1 0 1 0 2 [1 2 0 0 2] 2    [20, 24]
```


```cpp
class Solution {
public:
    vector<int> smallestRange(vector<vector<int>>& nums) {
        vector<pair<int, int>> ordered; // (number, group)
        for (size_t k = 0; k < nums.size(); ++k)
            for (auto n: nums[k]) ordered.push_back({n, k});
        sort(ordered.begin(), ordered.end());

        int i = 0, k = 0;
        vector<int> ans;
        unordered_map<int, int> count;
        for (size_t j = 0; j < ordered.size(); ++j) {
            if (! count[ordered[j].second]++) ++k;
            if (k == nums.size()) { 
                while (count[ordered[i].second] > 1) --count[ordered[i++].second]; // minialize range
                if (ans.empty() || ans[1] - ans[0] > ordered[j].first - ordered[i].first) {
                    ans = vector<int>{ordered[i].first, ordered[j].first};
                }
            }
        }

        return ans;
    }
};
```