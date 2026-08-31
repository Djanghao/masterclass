# Swift: Beats 100%, Time Complexity - O(n), Monotonic Stack

**Author:** ashish-badak
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-unsorted-continuous-subarray/solutions/5515709/](https://leetcode.com/problems/shortest-unsorted-continuous-subarray/solutions/5515709/)

---

# Complexity
- Time complexity: O(n)
- Space complexity: O(n)

# Code
```
class Solution {
    func findUnsortedSubarray(_ nums: [Int]) -> Int {
        var left = nums.count
        var right = 0
        var stack: [Int] = []
        
        for (i, num) in nums.enumerated() {
            while let last = stack.last, nums[last] > num {
                stack.removeLast()
                left = min(left, last)
            }
            stack.append(i)
        }
        
        stack = []

        for i in stride(from: nums.count - 1, through: 0, by: -1) {
            while let last = stack.last, nums[i] > nums[last] {
                stack.removeLast()
                right = max(right, last)
            }
            stack.append(i)
        }

        return max(0, right - left + 1)
    }
}
```