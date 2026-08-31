# 826ms, Beats 100%

**Author:** chenchewei
**Votes:** 0
**Link:** [https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors/solutions/5720703/](https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors/solutions/5720703/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(NlogN)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []
class Solution {
    func rearrangeArray(_ nums: [Int]) -> [Int] {
        var nums = nums.sorted()
        // If A > B and C > B, there's no way B is the average of A and C
        // [large, small, large, small, large, small]
        for i in stride(from: 0, to: nums.count - 1, by: 2) {
            nums.swapAt(i, i+1)
        }
        return nums
    }
}
```