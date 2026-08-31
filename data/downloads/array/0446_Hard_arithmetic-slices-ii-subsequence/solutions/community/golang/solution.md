# golang dp solution

**Author:** SergeyParamoshkin
**Votes:** 4
**Link:** [https://leetcode.com/problems/arithmetic-slices-ii-subsequence/solutions/4521832/](https://leetcode.com/problems/arithmetic-slices-ii-subsequence/solutions/4521832/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(n^2)$$

# Code
```
func numberOfArithmeticSlices(nums []int) int {
    count := 0
    dp := make([]map[int]int, len(nums))

    for i := 0; i < len(nums); i++ {
        dp[i] = make(map[int]int)
        for j := 0; j < i; j++ {
            diff := nums[i] - nums[j]
            if val, found := dp[j][diff]; found {
                dp[i][diff] += val + 1
                count += val
            } else {
                dp[i][diff] += 1
            }
        }
    }
    return count
}

```