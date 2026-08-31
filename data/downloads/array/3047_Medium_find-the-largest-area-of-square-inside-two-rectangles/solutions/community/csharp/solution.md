# Naive solution C#

**Author:** thanhle0212
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-largest-area-of-square-inside-two-rectangles/solutions/4778567/](https://leetcode.com/problems/find-the-largest-area-of-square-inside-two-rectangles/solutions/4778567/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Find the overlap X and overlap Y.


Find the min value of X and Y to calculate largest possible square.
# Complexity
- Time complexity: $$O(n^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public long LargestSquareArea(int[][] bottomLeft, int[][] topRight) {
         long maxArea = 0;
        int n = bottomLeft.Length;
        
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                int xOverlap = Math.Max(0, Math.Min(topRight[i][0], topRight[j][0]) - Math.Max(bottomLeft[i][0], bottomLeft[j][0]));
                int yOverlap = Math.Max(0, Math.Min(topRight[i][1], topRight[j][1]) - Math.Max(bottomLeft[i][1], bottomLeft[j][1]));
                
                int side = Math.Min(xOverlap, yOverlap);
                maxArea = Math.Max(maxArea, (long)side * side);
            }
        }
        
        return maxArea;
    }
}
```