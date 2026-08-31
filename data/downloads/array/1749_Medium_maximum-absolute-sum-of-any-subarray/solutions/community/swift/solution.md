# Swift | Kadane

**Author:** pagafan7as
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/solutions/5329239/](https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/solutions/5329239/)

---

This problem is a simple variant of the Maximum subarray problem, a classic that can be solved using Kadane's algorithm.

```
class Solution {
    func maxAbsoluteSum(_ nums: [Int]) -> Int {
        // Maximum subarray problem.
        func maxSum(_ nums: [Int]) -> Int {
            var res = 0
            var sum = 0
            for num in nums {
                sum += num
                res = max(res, sum)
                if sum < 0 { sum = 0 }
            }
            return res
        }

        return max(maxSum(nums), maxSum(nums.map { -$0 }))
    }
}
```