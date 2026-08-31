# Sorting + linear scan

**Author:** cpcs
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-maximal-uncovered-ranges/solutions/3458973/](https://leetcode.com/problems/find-maximal-uncovered-ranges/solutions/3458973/)

---

# Intuition
Sorting and linear scan.

# Approach
Sort the ranges and do linear scan to merge the intervals.

# Complexity
- Time complexity:
O(nlogn)

- Space complexity:
O(1) (if we don't count the input)

# Code
```
class Solution {
public:
    vector<vector<int>> findMaximalUncoveredRanges(int n, vector<vector<int>>& ranges) {
        if (ranges.empty()) {
            return {{0, n - 1}};
        }
        sort(ranges.begin(), ranges.end());
        vector<vector<int>> r;
        if (ranges[0][0]) {
            r.push_back({0, ranges[0][0] - 1});
        }
        vector<int> last = ranges[0];
        for (int i = 1; i < ranges.size(); ++i) {
            if (last[1] >= ranges[i][0]) {
                last[1] = max(last[1], ranges[i][1]);
            } else {
                if (last[1] + 1 <= ranges[i][0] - 1) {
                    r.push_back({last[1] + 1, ranges[i][0] - 1});
                }
                last = ranges[i];
            }
        }
        if (last[1] + 1 < n) {
            r.push_back({last[1] + 1, n - 1});
        }
        return r;
    }
};
```