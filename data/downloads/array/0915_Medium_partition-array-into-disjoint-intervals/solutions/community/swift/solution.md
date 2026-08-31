# [Swift] Readable Solution

**Author:** Legonaftik
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-array-into-disjoint-intervals/solutions/1356563/](https://leetcode.com/problems/partition-array-into-disjoint-intervals/solutions/1356563/)

---

```
class Solution {
    func partitionDisjoint(_ nums: [Int]) -> Int {
        var maxLeft = Array(repeating: 0, count: nums.count)
        var minRight = Array(repeating: 0, count: nums.count)

        maxLeft[0] = nums[0]
        for i in 1..<nums.endIndex {
            maxLeft[i] = max(maxLeft[i-1], nums[i])
        }

        minRight[nums.endIndex-1] = nums[nums.endIndex-1]
        for i in stride(from: nums.endIndex-2, through: 0, by: -1) {
            minRight[i] = min(minRight[i+1], nums[i])
        }

        for i in 1..<nums.endIndex {
            if maxLeft[i-1] <= minRight[i] {
                return i
            }
        }

        return nums.count
    }
}
```