# Swift Optimal Solution

**Author:** laxansh
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-product-of-three-numbers/solutions/646961/](https://leetcode.com/problems/maximum-product-of-three-numbers/solutions/646961/)

---

```
func maximumProduct(_ nums: [Int]) -> Int {
        var min1 = Int.max, min2 = Int.max
        var max1 = Int.min, max2 = Int.min, max3 = Int.min
        for i in 0..<nums.count {
            let n = nums[i]
            if n <= min1 {
                min2 = min1
                min1 = nums[i]
            } else if n < min2 {
                min2 = nums[i]
            }
            if n >= max1 {
                max3 = max2
                max2 = max1
                max1 = n
            } else if n >= max2 {
                max3 = max2
                max2 = n
            } else if n >= max3 {
                max3 = n
            }
        }
        return max(min1 * min2 * max1, max1 * max2 * max3)
    }
```