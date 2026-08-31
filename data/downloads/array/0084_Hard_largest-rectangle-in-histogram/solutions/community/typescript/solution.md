# 💥[EXPLAINED] TypeScript. Runtime beats 99.47%

**Author:** r9n
**Votes:** 5
**Link:** [https://leetcode.com/problems/largest-rectangle-in-histogram/solutions/5673920/](https://leetcode.com/problems/largest-rectangle-in-histogram/solutions/5673920/)

---

# Intuition
Use a stack to efficiently track the indices of histogram bars. The stack helps determine the width of rectangles formed with each bar as the shortest bar in the rectangle.

# Approach
Use a stack to track bar indices. For each bar, pop from the stack when encountering a shorter bar, calculating the maximum rectangle area with the popped bar as the smallest height. Finally, pop remaining bars to compute the area.

# Complexity
- Time complexity:
O(n), as each bar is pushed and popped from the stack exactly once.

- Space complexity:
O(n), for the stack used to store indices.

# Code
```typescript []
function largestRectangleArea(heights: number[]): number {
    const stack: number[] = [];
    let maxArea = 0;
    let index = 0;

    while (index < heights.length) {
        if (stack.length === 0 || heights[stack[stack.length - 1]] <= heights[index]) {
            stack.push(index++);
        } else {
            const topOfStack = stack.pop()!;
            const height = heights[topOfStack];
            const width = stack.length === 0 ? index : index - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }
    }

    while (stack.length > 0) {
        const topOfStack = stack.pop()!;
        const height = heights[topOfStack];
        const width = stack.length === 0 ? index : index - stack[stack.length - 1] - 1;
        maxArea = Math.max(maxArea, height * width);
    }

    return maxArea;
}

```