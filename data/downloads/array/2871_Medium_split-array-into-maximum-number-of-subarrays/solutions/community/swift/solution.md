# Swift Solution | Time Complexity: O(N) | Space Complexity: O(1)

**Author:** Amangoel123
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-array-into-maximum-number-of-subarrays/solutions/4212771/](https://leetcode.com/problems/split-array-into-maximum-number-of-subarrays/solutions/4212771/)

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
    func maxSubarrays(_ nums: [Int]) -> Int {
        var numsLength = nums.count

        var minValue = nums[0]
        var index = 1
        while index < numsLength {
            minValue = (minValue & nums[index])
            index = index + 1
        }
        
        if minValue != 0 {
            return 1
        }

        var totalCount = 0
        var value = -1
        index = 0

        while index < numsLength {
            if value == -1 {
                value = nums[index]
                if value == minValue {
                    totalCount = totalCount + 1
                    value = -1
                }
            } else {
                value = (value & nums[index])
                if value == minValue {
                    totalCount = totalCount + 1
                    value = -1
                }
            }
            index = index + 1
        }
        return totalCount
    }
}
```