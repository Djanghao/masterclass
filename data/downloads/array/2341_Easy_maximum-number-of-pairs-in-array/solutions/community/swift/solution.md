# Swift solution easy to understand ✅ beats 100%

**Author:** aldo_vernando
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-pairs-in-array/solutions/5231192/](https://leetcode.com/problems/maximum-number-of-pairs-in-array/solutions/5231192/)

---

# Please help to upvote \uD83D\uDCAF

# Code
```
class Solution {
    func numberOfPairs(_ nums: [Int]) -> [Int] {
        var paired = 0
        var left = nums.count
        var dict = [Int: Int]()

        for num in nums {
            dict[num, default: 0] += 1

            if dict[num, default: 0] == 2 {
                paired += 1
                left -= 2
                dict[num] = 0
            }
        }
        return [paired, left]
    }
}
```