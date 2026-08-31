# ✅ Swift solution easy to understand

**Author:** aldo_vernando
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-visible-people-in-a-queue/solutions/3547304/](https://leetcode.com/problems/number-of-visible-people-in-a-queue/solutions/3547304/)

---


# Code
```
class Solution {
    func canSeePersonsCount(_ heights: [Int]) -> [Int] {
        var personCount: Int = heights.count
        var result: [Int] = .init(repeating: 0, count: personCount)

        for (index, personHeight) in heights.enumerated() {
            var visiblePersonCount: Int = 0
            var previousTallestPerson: Int = 0

            for targetIndex in index + 1 ..< personCount {
                if personHeight <= heights[targetIndex] {
                    visiblePersonCount += 1
                    break
                }
                if previousTallestPerson < heights[targetIndex] {
                    visiblePersonCount += 1
                }
                if previousTallestPerson < heights[targetIndex] {
                    previousTallestPerson = heights[targetIndex]
                }
            }
            result[index] = visiblePersonCount
        }      
        return result
    }
}
```