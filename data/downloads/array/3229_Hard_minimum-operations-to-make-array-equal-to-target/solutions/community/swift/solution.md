# Swift answer

**Author:** nareshnayak839
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-array-equal-to-target/solutions/5965329/](https://leetcode.com/problems/minimum-operations-to-make-array-equal-to-target/solutions/5965329/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
 O(n)

- Space complexity:
O(1)

# Code
```swift []
class Solution {
    func minimumOperations(_ nums: [Int], _ target: [Int]) -> Int {
        
        var ans = 0
        var prev = 0

        for i in 0..<nums.count{
            let diff = nums[i] - target[i]

            if (diff >= 0 && prev < 0) || (diff < 0 && prev >= 0) {
                ans += abs(diff)
            } else if abs(diff) > abs(prev) {
                ans += abs(diff - prev)
            }
            prev = diff
        }
       
        return ans
    }
}
```