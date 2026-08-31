# 100% faster | easy to understand | readable | optimal | java | cpp | python

**Author:** gkso07
**Votes:** 30
**Link:** [https://leetcode.com/problems/find-the-largest-area-of-square-inside-two-rectangles/solutions/4778532/](https://leetcode.com/problems/find-the-largest-area-of-square-inside-two-rectangles/solutions/4778532/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem involves finding the largest area of a square that can be formed by intersecting two rectangles among given sets of rectangles. Essentially, we need to identify pairs of rectangles that intersect and determine the maximum square area within their intersection.

# Approach
<!-- Describe your approach to solving the problem. -->
- Iterative Comparison: The solution iterates over each pair of rectangles to check for intersections.
- Intersection Check: For each pair of rectangles, it checks whether they intersect. If they do, it calculates the dimensions of the intersection rectangle.
- Maximum Square Area: Within the intersection rectangle, the solution calculates the maximum square area possible by taking the minimum of the width and height of the intersection.
- Updating Maximum Area: It updates the maximum square area encountered so far.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
o(n^2);

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
o(1)
# Code
```java []
class Solution {
    public long largestSquareArea(int[][] bottomLeft, int[][] topRight) {
        int ans = 0, n = bottomLeft.length;
        for (int i = 0; i < n; i++) {
            int[] firstRectBL = bottomLeft[i];
            int[] firstRectTR = topRight[i];
            for (int j = i + 1; j < n; j++) {
                int[] secondRectBL = bottomLeft[j];
                int[] secondRectTR = topRight[j];
                if (secondRectBL[0] >= firstRectTR[0] || secondRectTR[0] <= firstRectBL[0]) continue;
                if (secondRectTR[1] <= firstRectBL[1] || secondRectBL[1] >= firstRectTR[1]) continue;
                int pntAx = Math.max(firstRectBL[0], secondRectBL[0]);
                int pntAy = Math.max(firstRectBL[1], secondRectBL[1]);
                int pntBx = Math.min(firstRectTR[0], secondRectTR[0]);
                int pntBy = Math.min(firstRectTR[1], secondRectTR[1]);
                int sideA = pntBx - pntAx;
                int sideB = pntBy - pntAy;
                ans = Math.max(ans, Math.min(sideA, sideB));
            }
        }
        return (long) ans * ans;
    }
}


```
```cpp []

class Solution {
public:
    long largestSquareArea(vector<std::vector<int>>& bottomLeft, vector<std::vector<int>>& topRight) {
        int ans = 0, n = bottomLeft.size();
        for (int i = 0; i < n; i++) {
            vector<int>& firstRectBL = bottomLeft[i];
            vector<int>& firstRectTR = topRight[i];
            for (int j = i + 1; j < n; j++) {
                vector<int>& secondRectBL = bottomLeft[j];
                vector<int>& secondRectTR = topRight[j];
                if (secondRectBL[0] >= firstRectTR[0] || secondRectTR[0] <= firstRectBL[0]) continue;
                if (secondRectTR[1] <= firstRectBL[1] || secondRectBL[1] >= firstRectTR[1]) continue;
                int pntAx = max(firstRectBL[0], secondRectBL[0]);
                int pntAy = max(firstRectBL[1], secondRectBL[1]);
                int pntBx = min(firstRectTR[0], secondRectTR[0]);
                int pntBy = min(firstRectTR[1], secondRectTR[1]);
                int sideA = pntBx - pntAx;
                int sideB = pntBy - pntAy;
                ans = max(ans, min(sideA, sideB));
            }
        }
        return static_cast<long>(ans) * ans;
    }
};

```
```python3 []
class Solution:
    def largestSquareArea(self, bottomLeft: List[List[int]], topRight: List[List[int]]) -> int:
        ans = 0
        n = len(bottomLeft)
        for i in range(n):
            firstRectBL = bottomLeft[i]
            firstRectTR = topRight[i]
            for j in range(i + 1, n):
                secondRectBL = bottomLeft[j]
                secondRectTR = topRight[j]
                if secondRectBL[0] >= firstRectTR[0] or secondRectTR[0] <= firstRectBL[0]:
                    continue
                if secondRectTR[1] <= firstRectBL[1] or secondRectBL[1] >= firstRectTR[1]:
                    continue
                pntAx = max(firstRectBL[0], secondRectBL[0])
                pntAy = max(firstRectBL[1], secondRectBL[1])
                pntBx = min(firstRectTR[0], secondRectTR[0])
                pntBy = min(firstRectTR[1], secondRectTR[1])
                sideA = pntBx - pntAx
                sideB = pntBy - pntAy
                ans = max(ans, min(sideA, sideB))
        return ans ** 2        

```

```python []

class Solution:
    class Solution(object):
    def largestSquareArea(self, bottomLeft, topRight):
        ans = 0
        n = len(bottomLeft)
        for i in range(n):
            firstRectBL = bottomLeft[i]
            firstRectTR = topRight[i]
            for j in range(i + 1, n):
                secondRectBL = bottomLeft[j]
                secondRectTR = topRight[j]
                if secondRectBL[0] >= firstRectTR[0] or secondRectTR[0] <= firstRectBL[0]:
                    continue
                if secondRectTR[1] <= firstRectBL[1] or secondRectBL[1] >= firstRectTR[1]:
                    continue
                pntAx = max(firstRectBL[0], secondRectBL[0])
                pntAy = max(firstRectBL[1], secondRectBL[1])
                pntBx = min(firstRectTR[0], secondRectTR[0])
                pntBy = min(firstRectTR[1], secondRectTR[1])
                sideA = pntBx - pntAx
                sideB = pntBy - pntAy
                ans = max(ans, min(sideA, sideB))
        return ans ** 2
        

```

![image.png](./images/0.png)
