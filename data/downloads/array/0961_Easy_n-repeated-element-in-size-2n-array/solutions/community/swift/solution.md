# Swift solution easy to understand ✅ beats 100%

**Author:** aldo_vernando
**Votes:** 1
**Link:** [https://leetcode.com/problems/n-repeated-element-in-size-2n-array/solutions/5187688/](https://leetcode.com/problems/n-repeated-element-in-size-2n-array/solutions/5187688/)

---

# Please help to upvote \uD83D\uDCAF

# Code
```
class Solution {
    func repeatedNTimes(_ nums: [Int]) -> Int {
        var setNums = Set<Int>()

        for num in nums {
            if setNums.contains(num) { return num }
            setNums.insert(num)
        }
        return 0
    }
}
```