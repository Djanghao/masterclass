# Runtime 178 ms Beats 100.00%   Memory 17.59 MB Beats 100.00%

**Author:** miomir84
**Votes:** 0
**Link:** [https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i/solutions/5960478/](https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i/solutions/5960478/)

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
```swift []
class Solution {
    func sumCounts(_ nums: [Int]) -> Int {
        if nums.count == 1 { return 1}
        
        var n = nums.count
        var sum = 0

        while n > 0 {
            for i in 0 ... nums.count - 1 {
                if n + i > nums.count { continue }
                let subNums = nums[i ... i + n - 1]
                sum += Set(subNums).count * Set(subNums).count
            }
            n -= 1
        }
        
        return sum
    }
}
```