# Constant space complexity

**Author:** RedaSen
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-score-of-array/solutions/5084245/](https://leetcode.com/problems/maximum-sum-score-of-array/solutions/5084245/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$ 
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$ 
# Code
```
func maximumSumScore(nums []int) int64 {
    total := 0
    for i := range nums {
        total += nums[i]
    }
    res := math.MinInt
    leftSum := 0
    for i := range nums {
        leftSum += nums[i]
        res = max(res, max(leftSum, total - leftSum + nums[i]))
    }
    return int64(res)
}
```