# Clear logic in Python3

**Author:** subscriber6436
**Votes:** 2
**Link:** [https://leetcode.com/problems/rectangle-overlap/solutions/4571731/](https://leetcode.com/problems/rectangle-overlap/solutions/4571731/)

---

# Intuition
Here we have two rectangles `A` and `B`, you should check, if they **overlap**.

# Approach 
The only thing you care about is to check, if points are intersect (starting points of `A` with ending points of `B` and vice versa).

# Complexity
- Time complexity: **O(1)**

- Space complexity: **O(1)**

# Code
```python []
class Solution:
    def isRectangleOverlap(self, A: List[int], B: List[int]) -> bool:
        return A[2] > B[0] and A[3] > B[1] and B[2] > A[0] and B[3] > A[1]
```
```typescript []
const isRectangleOverlap = (A: number[], B: number[]): boolean => A[2] > B[0] && A[3] > B[1] && B[2] > A[0] && B[3] > A[1]
```