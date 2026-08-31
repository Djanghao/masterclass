# Swift Solution

**Author:** aayushkumar20
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-average-difference/solutions/2876834/](https://leetcode.com/problems/minimum-average-difference/solutions/2876834/)

---

```
import Foundation

class Solution {
    func minimumAverageDifference(_ nums: [Int]) -> Int {
        var len = nums.count
        var res = 0
        var min = Int.max
        var sum = 0
        var leftSum = 0
        var rightSum = 0
        for num in nums {
            sum += num
        }
        for i in 0..<len {
            leftSum += nums[i]
            rightSum = sum - leftSum
            var diff = abs(leftSum / (i + 1) - (len - i == 1 ? 0 : rightSum / (len - i - 1)))
            if diff < min {
                min = diff
                res = i
            }
        }
        return res
    }
}
```