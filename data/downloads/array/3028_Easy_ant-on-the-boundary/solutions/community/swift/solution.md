# Swift solution easy to understand ✅

**Author:** aldo_vernando
**Votes:** 1
**Link:** [https://leetcode.com/problems/ant-on-the-boundary/solutions/5238335/](https://leetcode.com/problems/ant-on-the-boundary/solutions/5238335/)

---

# Please help to upvote \uD83D\uDCAF

# Code
```
class Solution {
    func returnToBoundaryCount(_ nums: [Int]) -> Int {
        var result = 0

        var position = 0
        for num in nums {
            position += num
            if position == 0 { result += 1 }
        }
        return result
    }
}
```