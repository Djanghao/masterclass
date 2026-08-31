# Easy to understand, clean TypeScript code

**Author:** igor_muram
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-largest-area-of-square-inside-two-rectangles/solutions/4778691/](https://leetcode.com/problems/find-the-largest-area-of-square-inside-two-rectangles/solutions/4778691/)

---

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(1)$$

# Code
```
function largestSquareArea(bottomLeft: number[][], topRight: number[][]): number {
    const n = bottomLeft.length
    let result = 0

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            // First rectangle
            const x1 = Math.max(bottomLeft[i][0], bottomLeft[j][0])
            const y1 = Math.max(bottomLeft[i][1], bottomLeft[j][1])

            // Second rectangle
            const x2 = Math.min(topRight[i][0], topRight[j][0])
            const y2 = Math.min(topRight[i][1], topRight[j][1])

            if (x1 < x2 && y1 < y2) {
                // Calculate the new area and update the result
                // if it is larger than the current area
                const sideLength = Math.min(x2 - x1, y2 - y1)
                result = Math.max(result, sideLength ** 2)
            }
        }
    }

    return result
}
```