# 84. Largest Rectangle in Histogram

**Author:** yaakoub_hamad
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-rectangle-in-histogram/solutions/3869403/](https://leetcode.com/problems/largest-rectangle-in-histogram/solutions/3869403/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
, the first thought that might come to mind is to calculate the area of all possible rectangles and return the maximum. Each rectangle corresponds to a bar in the histogram and extends as far as possible to the left and right without encountering a shorter bar. We can solve this problem efficiently using a stack data structure.
# Approach
<!-- Describe your approach to solving the problem. -->
The approach we use to solve this problem is to traverse the histogram from left to right and for each bar, calculate the maximum area that includes the current bar as the shortest one. For this, we use a stack to keep track of the indices of the bars in the histogram.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
: O(n), where n is the number of bars in the histogram. This is because we process each bar once when we push it into the stack and once when we pop it out of the stack.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n), where n is the number of bars in the histogram. This is the maximum size the stack can reach in case of a decreasing histogram.
# Code
```
class Solution {
    fun largestRectangleArea(heights: IntArray): Int {
        val n = heights.size
        val stack = Stack<Int>()
        var maxArea = 0

        for (i in 0 until n) {
            while (!stack.isEmpty() && heights[stack.peek()] >= heights[i]) {
                val height = heights[stack.pop()]
                val width = if (stack.isEmpty()) i else i - stack.peek() - 1
                maxArea = maxOf(maxArea, height * width)
            }
            stack.push(i)
        }

        while (!stack.isEmpty()) {
            val height = heights[stack.pop()]
            val width = if (stack.isEmpty()) n else n - stack.peek() - 1
            maxArea = maxOf(maxArea, height * width)
        }

        return maxArea
    }
}

```