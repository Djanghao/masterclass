# Simple GO Solution

**Author:** Anjush_Bhargavan
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-of-an-hourglass/solutions/4793573/](https://leetcode.com/problems/maximum-sum-of-an-hourglass/solutions/4793573/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func maxSum(grid [][]int) int {
    maxSum := 0

    for i := 0 ; i < len(grid) ; i++ {
        if i + 3 <= len(grid) {
            for j := 0 ; j < len(grid[i]) ; j++ {
                if j + 3 <= len(grid[i]) {
                    sum := grid[i][j]+grid[i][j+1]+grid[i][j+2]+grid[i+1][j+1]+ grid[i+2][j]+grid[i+2][j+1]+grid[i+2][j+2]
                    if sum > maxSum {
                        maxSum = sum
                    }
                }else{
                    break
                } 
            }
        }else{
            break
        }
    }
    return maxSum
}
```