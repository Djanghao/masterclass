# Quadratic Time Complexity in Finding Minimum Area Rectangle for Binary Grid-(JAVA) Solution

**Author:** rajragul005
**Votes:** 7
**Link:** [https://leetcode.com/problems/find-the-minimum-area-to-cover-all-ones-i/solutions/5355386/](https://leetcode.com/problems/find-the-minimum-area-to-cover-all-ones-i/solutions/5355386/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
     Quadratic Time Complexity

- Space complexity:
    Constant Space Complexity
# JAVA
```
class Solution {
   public int minimumArea(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length;
        
        int top = m; 
        int bottom = 0; 
        int left = n;
        int right = 0;
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 1) {
                    top = Math.min(top, i);
                    bottom = Math.max(bottom, i);
                    left = Math.min(left, j);
                    right = Math.max(right, j);
                }
            }
        }
        
        int width = right - left + 1;
        int height = bottom - top + 1;
        int area = width * height;
        
        return area;
    }
}
```