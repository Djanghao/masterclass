# Swift Solution Binary Search

**Author:** ShawnBaek
**Votes:** 0
**Link:** [https://leetcode.com/problems/missing-element-in-sorted-array/solutions/5222099/](https://leetcode.com/problems/missing-element-in-sorted-array/solutions/5222099/)

---

# Intuition
Copied from this comment
https://leetcode.com/problems/missing-element-in-sorted-array/editorial/comments/2142009


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
    func missingElement(_ nums: [Int], _ k: Int) -> Int {
        if nums.isEmpty {
            return 0
        }
        var k = k
        for i in 1..<nums.count {
            let missingGap = nums[i] - nums[i - 1] - 1
            if missingGap >= k {
                return nums[i - 1] + k
            }
            k -= missingGap
        }
        return nums[nums.count - 1] + k
    }
}
```