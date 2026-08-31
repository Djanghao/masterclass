# Sliding window

**Author:** miomir84
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-harmonious-subsequence/solutions/6009907/](https://leetcode.com/problems/longest-harmonious-subsequence/solutions/6009907/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(nlog n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []
class Solution {
    func findLHS(_ nums: [Int]) -> Int {
        let nums = nums.sorted()
        var i = 0
        var left = 0, right = 0
        var length = 0, maxLength = 0

        while right < nums.count {
            if nums[right] - nums[left] == 1 {
                length = right-left + 1
                maxLength = max(maxLength, length)
            } else if nums[right] - nums[left] > 1 {
                while nums[right] - nums[left] > 1 {
                left += 1
                }
            }
            right += 1
        }

        return maxLength
    }
}
```