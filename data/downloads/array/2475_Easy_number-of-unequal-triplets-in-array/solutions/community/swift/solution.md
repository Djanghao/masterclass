# Swift | O(n) solution

**Author:** ermorder
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-unequal-triplets-in-array/solutions/5543960/](https://leetcode.com/problems/number-of-unequal-triplets-in-array/solutions/5543960/)

---

# Code
```
class Solution {
    func unequalTriplets(_ nums: [Int]) -> Int {
        var map: [Int: Int] = [:]
        for num in nums {
            map[num, default: 0] += 1
        }
        guard map.count > 2 else { return 0 }
        var prefix = 0
        var postfix = nums.count
        var result = 0
        for val in map.values {
            postfix -= val
            result += prefix * val * postfix
            prefix += val
        }
        return result
    }
}
```