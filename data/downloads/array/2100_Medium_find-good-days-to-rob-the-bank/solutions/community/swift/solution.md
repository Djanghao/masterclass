# [Swift] Solution

**Author:** evkobak
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-good-days-to-rob-the-bank/solutions/1642060/](https://leetcode.com/problems/find-good-days-to-rob-the-bank/solutions/1642060/)

---

```
class Solution {
    func goodDaysToRobBank(_ security: [Int], _ time: Int) -> [Int] {

    if time == 0 { return Array(0...security.count-1) }

    func searchDays(array: [Int], index: Int) -> Set<Int> {
        var daysCount = 0
        var answer: Set<Int> = []
        
        for day in 1..<array.count {
            if array[day] <= array[day-1] {
                daysCount += 1
                if daysCount >= time {
                    answer.insert(abs(index-day))
                }
            } else {
                daysCount = 0
            }
        }
        return answer
    }

    return Array(searchDays(array: security, index: 0)
                    .intersection(searchDays(array: security.reversed(), index: security.count-1)))
    }
}
```