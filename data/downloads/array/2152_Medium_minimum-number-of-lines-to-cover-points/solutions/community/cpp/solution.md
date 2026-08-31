# SIMPLE MASKING DP

**Author:** tin_le
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-lines-to-cover-points/solutions/5343767/](https://leetcode.com/problems/minimum-number-of-lines-to-cover-points/solutions/5343767/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    vector<int> mask;
    int target;
    vector<vector<int>> dp;
    int dfs(int start, int bits)
    {
        if(bits == target) return 0;
        if(start == mask.size()) return 1e9;
        int& res = dp[start][bits];
        if(res != -1) return res;
        int skip = dfs(start + 1, bits);
        int take = 1e9;
        if((bits | mask[start]) > bits)
        {
            take = 1 + dfs(start + 1, bits | mask[start]);
        }
        return res = min(take, skip);
    }

    int minimumLines(vector<vector<int>>& points) {
        int n = points.size();
        if(n == 1) return 1;
        target = (1 << n) - 1;
        int res = 0;
        for(int i = 0; i < points.size(); i++)
        {
            unordered_map<double, vector<int>> mp;
            for(int j = i + 1; j < points.size(); j++)
            {
                double x1 = points[i][0], y1 = points[i][1], x2 = points[j][0], y2 = points[j][1];
                double slope = 0;
                if(x1 == x2) slope = INT_MAX;
                else slope = (double)(y1 - y2) / (x1 - x2);
                if(mp[slope].empty()) mp[slope].push_back(i);
                mp[slope].push_back(j);
            }
            for(auto& it : mp)
            {
                int bits = 0;
                for(auto& i : it.second)
                {
                    bits |= (1 << i);
                }
                mask.push_back(bits);
            }
        }
        dp.assign(mask.size() + 1, vector<int>(1024, -1));
        return dfs(0, 0);
    }
};
```