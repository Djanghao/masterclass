# 🚀 Simplest Solution on Leetcode | 5 Lines of Code | Just Visit Once 🔥🔥

**Author:** The_Sanket_Deshmukh
**Votes:** 6
**Link:** [https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/solutions/4433152/](https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/solutions/4433152/)

---

# Intuition \uD83E\uDD14
The problem asks us to find the widest vertical area between two points on a 2D plane, such that no other points lie inside this area. The width of the area is determined by the difference in x-coordinates of two consecutive points when the points are sorted. We want to maximize this width.

![Screenshot 2023-12-21 082420.png](./images/0.png)

<!-- Describe your first thoughts on how to solve this problem. -->

# Approach \uD83D\uDE80
1. **Sort the points**: To find the width, we first need to sort the points based on their x-coordinates.
2. **Calculate Widths**: Iterate through the sorted points and calculate the width between each pair of consecutive points. Keep track of the maximum width encountered so far.
3. **Maximize Width**: Update the maximum width whenever a wider vertical area is found.
<!-- Describe your approach to solving the problem. -->

# Complexity
- **Time Complexity: \u23F0**
The dominant operation is the sorting of the points, which takes O(n log n) time, where n is the number of points. The subsequent iteration takes O(n) time. Therefore, the overall time complexity is O(n log n).

- **Space Complexity: \uD83E\uDDE0**
The space complexity is O(1) since we are using a constant amount of extra space (no additional data structures) regardless of the input size.

# Code
- **Sorting:** `sort(points.begin(), points.end())` sorts the points based on their x-coordinates.
- **Width Calculation:** Iterate through the sorted points, calculating the width between consecutive points using `currX - prevX`.
- **Maximum Width Update:** `ans = max(ans, currX - prevX)` updates the maximum width whenever a wider vertical area is found.
- **Input/Output Optimization:** `ios_base::sync_with_stdio(false)` and related lines optimize input/output for faster execution.
```
class Solution {
public:
    int maxWidthOfVerticalArea(vector<vector<int>>& points) {
        ios_base::sync_with_stdio(false);
        cin.tie(0);
        cout.tie(0);
        
        sort(points.begin(),points.end());
        int ans = 0;
        for(int i = 1; i < points.size(); i++)
        {
            int prevX = points[i - 1][0];
            int currX = points[i][0];
            ans = max(ans, currX - prevX);
        }
        return ans;
    }
};
```
![lc1.png](./images/1.png)
