# Simple BFS solution with time complexity O(n) NO RECURSION

**Author:** fuglaeff
**Votes:** 1
**Link:** [https://leetcode.com/problems/make-costs-of-paths-equal-in-a-binary-tree/solutions/3543167/](https://leetcode.com/problems/make-costs-of-paths-equal-in-a-binary-tree/solutions/3543167/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$

# Code
``` golang []
func max(a, b int) int {
    if a > b {
        return a
    }

    return b
}


func min(a, b int) int {
    if a > b {
        return b
    }

    return a
}


func minIncrements(n int, cost []int) int {
    var ans int
    var sums []int = make([]int, n / 2)

    for i := n - 1; i > 1; i -= 2 {
        left_sum, right_sum := cost[i - 1], cost[i]

        if i < len(sums) {
            left_sum += sums[i - 1]
            right_sum += sums[i]
        }
        
        sums[i / 2 - 1] = max(left_sum, right_sum)
        ans += sums[i / 2 - 1] - min(left_sum, right_sum)
    }

    return ans
}

```
``` python []
class Solution:
    def minIncrements(self, n: int, cost: List[int]) -> int:
        ans = 0
        sums = [0] * (n // 2)

        for i in range(n - 1, 1, -2):
            left_sum, right_sum = cost[i - 1], cost[i]
            if i < len(sums):
                left_sum += sums[i - 1]
                right_sum += sums[i]

            sums[i // 2 - 1] = max(left_sum, right_sum)
            ans += sums[i // 2 - 1] - min(left_sum, right_sum)

        return ans

```