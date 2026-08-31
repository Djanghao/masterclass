# Custom sort for the Points [C++]

**Author:** aluCard31
**Votes:** 7
**Link:** [https://leetcode.com/problems/matrix-cells-in-distance-order/solutions/2973772/](https://leetcode.com/problems/matrix-cells-in-distance-order/solutions/2973772/)

---


# Approach
<!-- Describe your approach to solving the problem. -->
We simply create an array and sort it according to the given condition of minimizing the distance between a point in the array and {rCenter, cCenter}. 

The lambda takes 2 points `a` and `b`, and determines the order by distance of these points from the center.


# Code
```
class Solution {
public:
    vector<vector<int>> allCellsDistOrder(int rows, int cols, int r, int c) {
        vector<vector<int>> ans;
        for (int i=0; i<rows; i++) {
            for (int j=0; j<cols; j++)
                ans.push_back({i, j});
        }

        sort (ans.begin(), ans.end(), [&] (auto& a, auto& b) {
            return (abs(r-a[0]) + abs(c-a[1]) < abs(r-b[0]) + abs(c-b[1]));
        });

        return ans;
    }
};
```