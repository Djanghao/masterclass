# Dart Solution

**Author:** abiinavvv
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-area-of-longest-diagonal-rectangle/solutions/6138079/](https://leetcode.com/problems/maximum-area-of-longest-diagonal-rectangle/solutions/6138079/)

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
```dart []
class Solution {
  int areaOfMaxDiagonal(List<List<int>> dimensions) {
    int maxDiagonal = 0;
    int maxArea = 0;
    for(int i =0 ;i<dimensions.length;i++){
        int length = dimensions[i][0];
        int width = dimensions[i][1];

        int diagonal = length * length + width* width;
        int area = length * width;

        if(diagonal > maxDiagonal || diagonal == maxDiagonal && area > maxArea){
            maxDiagonal = diagonal;
            maxArea = area;
        }
    }
    return maxArea;
  }
}
```