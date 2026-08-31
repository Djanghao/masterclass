# 0ms 💯 Easy to understand | Swift ✅

**Author:** rishixcode
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-ascending-subarray-sum/solutions/4698127/](https://leetcode.com/problems/maximum-ascending-subarray-sum/solutions/4698127/)

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
class Solution {
func maxAscendingSum(_ nums: [Int]) -> Int {
    var maxSum = 0
    var curSum = nums[0]
    for i in 1..<nums.count {
        if nums[i] > nums[i-1] {
            curSum += nums[i]
        } else {
            maxSum = max(maxSum, curSum)
            curSum = nums[i]
        }
    }
    maxSum = max(maxSum, curSum)

    return maxSum
}
}
```