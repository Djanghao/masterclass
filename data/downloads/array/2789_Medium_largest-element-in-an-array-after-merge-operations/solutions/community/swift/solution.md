# Swift | Greedy and Short

**Author:** pagafan7as
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-element-in-an-array-after-merge-operations/solutions/5450292/](https://leetcode.com/problems/largest-element-in-an-array-after-merge-operations/solutions/5450292/)

---

```
class Solution {
    func maxArrayValue(_ nums: [Int]) -> Int {
        let n = nums.count
        var sum = 0

        for i in (0..<n).reversed() {
            sum = nums[i] <= sum ? nums[i] + sum : nums[i]
        }

        return sum
    }
}
```