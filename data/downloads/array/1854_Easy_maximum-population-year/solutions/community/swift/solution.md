# Swift - Line sweep algo

**Author:** arrb
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-population-year/solutions/6025580/](https://leetcode.com/problems/maximum-population-year/solutions/6025580/)

---

# Code
```swift []
class Solution {
    func maximumPopulation(_ logs: [[Int]]) -> Int {
        //we know that the range is 1950 to 2050
        var range = Array(repeating: 0, count: 100)

        for log in logs {
            let (birth, death) = (log[0], log[1])
            for year in birth..<death {
                //increment the values by 1 since the person lived
                range[year - 1950] += 1
            }
        }

        let maxValue = range.max()!
        return range.firstIndex( where: { $0 == maxValue })! + 1950
    }
}
```