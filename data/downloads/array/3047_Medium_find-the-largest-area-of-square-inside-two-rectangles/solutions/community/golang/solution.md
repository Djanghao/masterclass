# 3047. Find the Largest Area of Square Inside Two Rectangles using Go | Simple brute force approach

**Author:** singhsourav73
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-largest-area-of-square-inside-two-rectangles/solutions/4778661/](https://leetcode.com/problems/find-the-largest-area-of-square-inside-two-rectangles/solutions/4778661/)

---

# Intuition
The problem requires finding the largest square area that can fit inside the intersection of two rectangles. To do this, we can iterate through all pairs of rectangles and calculate the intersection area of their bounding boxes.

# Approach
1. Iterate through each pair of rectangles.
2. For each pair, calculate the intersection area of their bounding boxes.
3. Update the maximum area if the current intersection area is greater.

# Complexity
- Time complexity: O(n*n), where n is the number of rectangles.
We have two nested loops to iterate through all pairs of rectangles.

- Space complexity: O(1)

# Code
```
func largestSquareArea(bottomLeft [][]int, topRight [][]int) int64 {
    var maxArea int64 = 0
    for i := 0; i < len(bottomLeft); i++ {
        for j := i + 1; j < len(bottomLeft); j++ {
            blX := max(int64(bottomLeft[i][0]), int64(bottomLeft[j][0]))
            blY := max(int64(bottomLeft[i][1]), int64(bottomLeft[j][1]))
            trX := min(int64(topRight[i][0]), int64(topRight[j][0]))
            trY := min(int64(topRight[i][1]), int64(topRight[j][1]))

            if blX < trX && blY < trY {
                side := min(trX-blX, trY-blY)
                maxArea = max(maxArea, side*side)
            }
        }
    }

    return maxArea
}

```