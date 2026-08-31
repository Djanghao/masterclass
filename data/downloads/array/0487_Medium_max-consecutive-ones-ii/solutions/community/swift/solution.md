# Swift TC O(n), SC O(1), independent on input length

**Author:** Teki12
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-consecutive-ones-ii/solutions/6091494/](https://leetcode.com/problems/max-consecutive-ones-ii/solutions/6091494/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Count ones before and after zero. Keep tracking max sum of prev and current ones.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```swift []
class Solution {
    func findMaxConsecutiveOnes(_ nums: [Int]) -> Int {
        var maxVal = 0
        var curVal = 0
        var prevVal = 0
        
        for num in nums {
            if num > 0 {
                curVal += 1
            } else {
                prevVal = curVal + 1
                curVal = 0
            }
            maxVal = max(maxVal, prevVal + curVal)
        }
        
        return maxVal
    }
}
```