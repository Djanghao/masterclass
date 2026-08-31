# [C++] Sort + Merge + Binary Search

**Author:** EricYXing
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-connected-groups-by-inserting-interval/solutions/5918294/](https://leetcode.com/problems/minimize-connected-groups-by-inserting-interval/solutions/5918294/)

---

# Code
```cpp []
class Solution {
public:
    int minConnectedGroups(vector<vector<int>>& intervals, int k) {
        sort(intervals.begin(), intervals.end());
        int n = intervals.size(), l = 0, r = 0;
        vector<vector<int>> mi;
        for (int i = 0; i < n; i++)
        {
            if (intervals[i][0] <= r)
                r = max(r, intervals[i][1]);
            else
            {
                if (i > 0)
                    mi.push_back({l, r});
                l = intervals[i][0];
                r = intervals[i][1];
            }
        }
        mi.push_back({l, r});
        int ans = INT_MAX, m = mi.size();
        for (int i = 0; i < m; i++)
        {
            int q = mi[i][1] + k, j = i;
            l = i + 1, r = m - 1;
            while (l <= r)
            {
                int p = (l + r) / 2;
                if (mi[p][0] <= q)
                {
                    j = p;
                    l = p + 1;
                }
                else
                    r = p - 1;
            }
            ans = min(ans, m - (j - i));
        }
        return ans;
    }
};
```