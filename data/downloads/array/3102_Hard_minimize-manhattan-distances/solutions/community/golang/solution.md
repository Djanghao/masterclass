# My Go Solution

**Author:** ___lovesh1808___
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimize-manhattan-distances/solutions/5038818/](https://leetcode.com/problems/minimize-manhattan-distances/solutions/5038818/)

---



# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
func minimumDistance(points [][]int) int {
    m := maxManhattanDistance(points, -1)
    m1 := maxManhattanDistance(points, m[0])
    m2 := maxManhattanDistance(points, m[1])
    return min(manhattan(points, m1[0], m1[1]), manhattan(points, m2[0], m2[1]))
}

func manhattan(points [][]int, i, j int) int {
    return abs(points[i][0]-points[j][0]) + abs(points[i][1]-points[j][1])
}

func maxManhattanDistance(points [][]int, remove int) []int {
    n := len(points)
    maxSum, minSum, maxDiff, minDiff := math.MinInt32, math.MaxInt32, math.MinInt32, math.MaxInt32
    maxSumIndex, minSumIndex, maxDiffIndex, minDiffIndex := -1, -1, -1, -1
    for i := 0; i < n; i++ {
        if i != remove {
            sum, diff := points[i][0]+points[i][1], points[i][0]-points[i][1]
            if sum > maxSum {
                maxSumIndex, maxSum = i, sum
            }
            if sum < minSum {
                minSumIndex, minSum = i, sum
            }
            if diff > maxDiff {
                maxDiffIndex, maxDiff = i, diff
            }
            if diff < minDiff {
                minDiffIndex, minDiff = i, diff
            }
        }
    }
    if max(maxSum-minSum, maxDiff-minDiff) == maxSum-minSum {
        return []int{maxSumIndex, minSumIndex}
    }
    return []int{maxDiffIndex, minDiffIndex}
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}

func abs(x int) int {
    if x < 0 {
        return -x
    }
    return x
}

```