# Simple Swift solution

**Author:** yamironov
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-units-on-a-truck/solutions/1006473/](https://leetcode.com/problems/maximum-units-on-a-truck/solutions/1006473/)

---

Simple Swift solution
```
class Solution {
    func maximumUnits(_ boxTypes: [[Int]], _ truckSize: Int) -> Int {
        let boxTypes = boxTypes.sorted(by: { $0[1] > $1[1] })
        var result = 0, remainder = truckSize
        for boxType in boxTypes {
            if remainder > 0 {
                result += min(remainder, boxType[0]) * boxType[1]
                remainder -= boxType[0]
            } else {
                break
            }
        }
        return result
    }
}
```