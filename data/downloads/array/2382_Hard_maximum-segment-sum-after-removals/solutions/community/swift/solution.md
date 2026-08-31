# [Swift] Segment Tree

**Author:** oldrookie
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-segment-sum-after-removals/solutions/2464509/](https://leetcode.com/problems/maximum-segment-sum-after-removals/solutions/2464509/)

---

```
class Solution {
    class SgTree {
        var l: Int // left bound
        var r: Int // right bound
        var left: SgTree?
        var right: SgTree?
        
        var hasZero = false
        var maxVal: Int // max sum of subarray without zero
        var prefix: Int // sum from left to 1st zero
        var suffix: Int // sum from right to 1st zero
        
        init(_ nums: [Int], _ l: Int, _ r: Int) {
            self.l = l
            self.r = r
            if l == r {
                maxVal = nums[l]
                prefix = nums[l]
                suffix = nums[l]
            } else {
                let mid = (l + r) / 2
                let n1 = SgTree(nums, l, mid)
                let n2 = SgTree(nums, mid + 1, r)
                (left, right) = (n1, n2)
                maxVal = n1.maxVal + n2.maxVal
                prefix = n1.maxVal + n2.maxVal
                suffix = n1.maxVal + n2.maxVal
            }
        }
        
        func setZero(at i: Int) {
            if l == r {
                hasZero = true
                maxVal = 0
                prefix = 0
                suffix = 0
            } else if let n1 = left, let n2 = right {
                if i <= n1.r {
                    n1.setZero(at: i)
                } else {
                    n2.setZero(at: i)
                }
                if !n1.hasZero && !n2.hasZero {
                    maxVal = n1.maxVal + n2.maxVal
                    prefix = n1.maxVal + n2.maxVal
                    suffix = n1.maxVal + n2.maxVal
                } else {
                    hasZero = true
                    maxVal = max(n1.suffix + n2.prefix, n1.maxVal, n2.maxVal)
                    prefix = n1.hasZero ? n1.prefix : n1.maxVal + n2.prefix
                    suffix = n2.hasZero ? n2.suffix : n1.suffix + n2.maxVal
                }
            }
        }
    }
    func maximumSegmentSum(_ nums: [Int], _ removeQueries: [Int]) -> [Int] {
        let n = nums.count
        let sgTree = SgTree(nums, 0, n - 1)
        var res: [Int] = []
        for i in removeQueries {
            sgTree.setZero(at: i)
            res.append(sgTree.maxVal)
        }
        return res
    }
}
```