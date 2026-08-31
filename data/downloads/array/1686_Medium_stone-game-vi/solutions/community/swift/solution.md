# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/stone-game-vi/solutions/4118836/](https://leetcode.com/problems/stone-game-vi/solutions/4118836/)

---

```
class Solution {
    func stoneGameVI(_ avals: [Int], _ bvals: [Int]) -> Int {
        
        let vals = zip(avals, bvals).map(+)
        let idc = vals.indices.sorted { vals[$0] > vals[$1] }
        
        let avals = idc.map { avals[$0] }
        let bvals = idc.map { bvals[$0] }

        var a = 0
        var b = 0

        for i in avals.indices {
            if i % 2 == 0 { a += avals[i] }
            else { b += bvals[i] }
        }

        return a <= b ? a < b ? -1 : 0 : 1
    }
}
```