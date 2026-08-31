# [GoLang] Bottom-up DP, O(n)

**Author:** dkochetov
**Votes:** 1
**Link:** [https://leetcode.com/problems/visit-array-positions-to-maximize-score/solutions/3802604/](https://leetcode.com/problems/visit-array-positions-to-maximize-score/solutions/3802604/)

---

# Approach
Simmilar to knapsack 0/1 problem

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$

# Code

```golang []
func maxScore(nums []int, x int) int64 {
    n := len(nums)
    oddScore, evenScore := 0, 0
    ans := 0
    for i := n-1; i >= 0; i-- {
        if nums[i] % 2 == 1 {
            oddScore = nums[i] + max(oddScore, evenScore - x)
            ans = oddScore
        } else {
            evenScore = nums[i] + max(evenScore, oddScore - x)
            ans = evenScore
        }
    }
    return int64(ans)
}

func max(a, b int) int {
    if a > b { return a }
    return b
}

```