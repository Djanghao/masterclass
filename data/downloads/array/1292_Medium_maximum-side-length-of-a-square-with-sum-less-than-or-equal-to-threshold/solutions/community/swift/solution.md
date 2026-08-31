# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold/solutions/4268881/](https://leetcode.com/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold/solutions/4268881/)

---

```
class Solution {
    func maxSideLength(_ mat: [[Int]], _ threshold: Int) -> Int {
        
        let prfx = mat.map { $0.reduce(into: [0]) { $0.append($0.last! + $1) } }

        var l = 1
        var r = min(mat.count, mat.first!.count)
        var res = 0

        while l <= r {
            let m = (l + r) / 2

            var found = false

            for i in 0...prfx.count - m {
                for j in 0..<prfx[i].count - m {

                    let s = (i..<i + m)
                        .map { prfx[$0][j + m] - prfx[$0][j] }
                        .reduce(0, +)
                    
                    found = s <= threshold

                    guard !found else { break }
                }

                guard !found else { break }
            }

            if found { res = max(res, m) }

            if found { l = m + 1 }
            else { r = m - 1 }
        }

        return res
    }
}
```