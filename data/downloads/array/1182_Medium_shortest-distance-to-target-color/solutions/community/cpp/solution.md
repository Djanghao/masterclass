# 2 pass C++

**Author:** 0xdeadbeef_
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-distance-to-target-color/solutions/5618440/](https://leetcode.com/problems/shortest-distance-to-target-color/solutions/5618440/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
two pass can be abstracted to a function though
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n + q)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    // time: O(n + q)
    // space: O(n)
    vector<int> shortestDistanceColor(vector<int>& colors, vector<vector<int>>& queries) {
        int n = colors.size();
        vector<vector<int>> leftShortest(n, vector<int>(4, INT_MAX));
        vector<int> colorsIdxFromLeft(4, -1);
        for (int i = 0; i < n; ++i) {
            colorsIdxFromLeft[colors[i]] = i;
            if (colorsIdxFromLeft[1] != -1)
                leftShortest[i][1] = i - colorsIdxFromLeft[1];

            if (colorsIdxFromLeft[2] != -1)
                leftShortest[i][2] = i - colorsIdxFromLeft[2];

            if (colorsIdxFromLeft[3] != -1)
                leftShortest[i][3] = i - colorsIdxFromLeft[3];
        }

        vector<vector<int>> rightShortest(n, vector<int>(4, INT_MAX));
        vector<int> colorsIdxFromRight(4, -1);
        for (int i = n - 1; i >= 0; --i) {
            colorsIdxFromRight[colors[i]] = i;
            if (colorsIdxFromRight[1] != -1) {
                rightShortest[i][1] = colorsIdxFromRight[1] - i;
            }

            if (colorsIdxFromRight[2] != -1)
                rightShortest[i][2] = colorsIdxFromRight[2] - i;

            if (colorsIdxFromRight[3] != -1)
                rightShortest[i][3] = colorsIdxFromRight[3] - i;
        }

        vector<int> res(queries.size());
        for (int i = 0; i < queries.size(); ++i) {
            int shortest = min(leftShortest[queries[i][0]][queries[i][1]], rightShortest[queries[i][0]][queries[i][1]]);
            res[i] = shortest == INT_MAX? -1 : shortest;
        }
        return res;
    }
};
```