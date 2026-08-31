# 🔥🔥Boomerang Check: Detecting Collinearity in 2D Points||Easy Solution🔥🔥

**Author:** Aashiq_Edavalapati
**Votes:** 13
**Link:** [https://leetcode.com/problems/valid-boomerang/solutions/5053709/](https://leetcode.com/problems/valid-boomerang/solutions/5053709/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The approach involves using the formula for the slope of a line to determine if the given three points are collinear. For three points (x1, y1), (x2, y2), and (x3, y3), the slope of the line between (x1, y1) and (x2, y2) can be represented as (y2 - y1) / (x2 - x1). If the slopes between consecutive pairs of points are not equal, then the points are not collinear, and hence they form a boomerang.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Calculate the slopes between consecutive pairs of points:
    - For (x1, y1) to (x2, y2): slope1 = (y2 - y1) / (x2 - x1)
    - For (x2, y2) to (x3, y3): slope2 = (y3 - y2) / (x3 - x2)
2. If the slopes are not equal, the points are not collinear and hence form a boomerang.
3. But there is a corner case of division by zero. So, cross multiply the denominators of the slopes and check equality of:
```
                (y2-y1)*(x3-x2) != (y3-y2)*(x2-x1)
```
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of this solution is $$O(1)$$, as it involves constant-time operations (calculations of differences and multiplications) for the given three points.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is also $$O(1)$$, as we are not using any additional space that scales with the input size, only basic variables to store intermediate results.

# Code
```java []
class Solution {
    public boolean isBoomerang(int[][] points) {
       return (points[1][1]-points[0][1])*(points[2][0]-points[1][0]) != (points[2][1]-points[1][1])*(points[1][0]-points[0][0]); 
    }
}
```
```python3 []
class Solution:
    def isBoomerang(self, points: List[List[int]]) -> bool:
        return (points[1][1]-points[0][1])*(points[2][0]-points[1][0]) != (points[2][1]-points[1][1])*(points[1][0]-points[0][0])
```
![upvote.jpg](./images/0.jpeg)

