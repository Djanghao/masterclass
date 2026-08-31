# Swift solution easy to understand ✅

**Author:** aldo_vernando
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/solutions/5204252/](https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/solutions/5204252/)

---

# Please help to upvote \uD83D\uDCAF

# Code
```
class Solution {
    func busyStudent(_ startTime: [Int], _ endTime: [Int], _ queryTime: Int) -> Int {
        var result = 0
        let studentCount = startTime.count

        for i in 0 ..< studentCount {
            if startTime[i] <= queryTime && endTime[i] >= queryTime {
                result += 1
            }
        }
        return result
    }
}
```