# [Swift] - Fast  & efficient solution. O(n) - time, O(1) space.

**Author:** slowsteady
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-product-difference-between-two-pairs/solutions/1300221/](https://leetcode.com/problems/maximum-product-difference-between-two-pairs/solutions/1300221/)

---

**Explanation:**
1. Define variables for minimum and maximum pairs.
2. Traverse an input array, compare the values & update variables.
3. Return product difference between the minimum and the maximum pairs.
```
class Solution {
    func maxProductDifference(_ nums: [Int]) -> Int {
        var max = Int.min
        var secondMax = Int.min
        
        var min = Int.max
        var secondMin = Int.max
        
        for num in nums {
            if num > max {
                secondMax = max
                max = num
            } else if num > secondMax {
                secondMax = num
            }
            if num < min {
                secondMin = min
                min = num
            } else if num < secondMin {
                secondMin = num
            }
        }
        
        return (max * secondMax) - (min * secondMin)
    }
}
```
***Analysis:***
*Time complexity: O(n).*
*Space complexity: O(1).*