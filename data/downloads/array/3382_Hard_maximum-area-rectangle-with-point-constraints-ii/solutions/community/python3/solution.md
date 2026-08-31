# Python 3 || Find the Rectangles and Check No Other Points Inside - Segment Tree

**Author:** zsq007
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-area-rectangle-with-point-constraints-ii/solutions/6124626/](https://leetcode.com/problems/maximum-area-rectangle-with-point-constraints-ii/solutions/6124626/)

---

# Intuition & Approach
<!-- Describe your first thoughts on how to solve this problem. -->
1. Sort the point by x, for the same x, sort by y.
2. `yMax` stores the previous max x value for each y.
3. To identify an axis-aligned rectangle with no other points on the border: `prevX == x and yMax[prevY] == yMax[y]`. Top and bottom borders: `y` and `prevY`; Left and right borders: `yMax[y]` and `x`.
4. Use a *Segment Tree* `maxTree` to maintain the max values in `yMax`. To determine if the rectangle doesn't contain any other points, the max x values in `yMax` between `prevY` and `y` should be less than the left border `yMax[y]`: `yMax[y] > maxTree.query(yPos[prevY], yPos[y])`.
5. To fit the y-axis into the segment tree, compress the y values and assign an index for each distinct y value (see `yAxis` and `yPos`).

# Complexity
- Time complexity: $O(N \\log N)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(N)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```python3 []
class Solution:
    def maxRectangleArea(self, xCoord: List[int], yCoord: List[int]) -> int:
        points = list(zip(xCoord, yCoord))

        # sort by x, then y
        points.sort()
        yAxis = sorted(set(yCoord))
        yPos = {y: i for i,y in enumerate(yAxis)}
        yMax = {y: -inf for y in yAxis}
        maxTree = SegTree(len(yAxis))
        prevX, prevY = points[0]
        res = -1

        for x,y in points[1:]:
            if prevX == x and yMax[prevY] == yMax[y] \\
                and yMax[y] > maxTree.query(yPos[prevY], yPos[y]):
                # x's and y's are aligned
                # and no other points in the rectangle
                res = max(res, (y-prevY) * (x - yMax[y]))

            # update the info of (prevX, prevY)
            yMax[prevY] = prevX
            maxTree.update(yPos[prevY], prevX)
            prevX, prevY = x, y
        return res

class SegTree:

    def __init__(self, n: int):
        self.n = 1<<n.bit_length()
        self.tree = [-inf] * (self.n<<1)

    def update(self, idx: int, val: int):
        idx += self.n
        while idx:
            self.tree[idx] = val
            idx >>= 1

    def query(self, l: int, r: int) -> int:
        res = -inf
        l += self.n
        r += self.n
        while r-l > 1:
            if not l&1:
                res = max(res, self.tree[l+1])
            if r&1:
                res = max(res, self.tree[r-1])
            l >>= 1
            r >>= 1
        return res
```