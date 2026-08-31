# AC Python clean solution using stack 76ms

**Author:** dietpepsi
**Votes:** 632
**Link:** [https://leetcode.com/problems/largest-rectangle-in-histogram/solutions/28917/](https://leetcode.com/problems/largest-rectangle-in-histogram/solutions/28917/)

---

    def largestRectangleArea(self, height):
        height.append(0)
        stack = [-1]
        ans = 0
        for i in xrange(len(height)):
            while height[i] < height[stack[-1]]:
                h = height[stack.pop()]
                w = i - stack[-1] - 1
                ans = max(ans, h * w)
            stack.append(i)
        height.pop()
        return ans



    # 94 / 94 test cases passed.
    # Status: Accepted
    # Runtime: 76 ms
    # 97.34%

The stack maintain the indexes of buildings with ascending height. Before adding a new building pop the building who is taller than the new one. The building popped out represent the height of a rectangle with the new building as the right boundary and the current stack top as the left boundary. Calculate its area and update ans of maximum area. Boundary is handled using dummy buildings.