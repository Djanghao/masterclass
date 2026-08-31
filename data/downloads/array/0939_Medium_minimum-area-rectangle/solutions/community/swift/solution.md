# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-area-rectangle/solutions/5959670/](https://leetcode.com/problems/minimum-area-rectangle/solutions/5959670/)

---

```
class Solution {
    func minAreaRect(_ points: [[Int]]) -> Int {
        
        var yx = [Int: [Int]]()

        for p in points {
            yx[p[1], default: []].append(p[0])
        }

        var res = Int.max

        for (y, xs) in yx {
            guard xs.count > 1 else {
                yx[y] = nil
                continue
            }
            yx[y] = xs.sorted()
        }

        for (y1, xs1) in yx {
            for (y2, xs2) in yx
                where y2 > y1 {

                    let xs1 = xs1.filter { xs2.contains($0) }

                    for x1 in xs1 {
                        guard let x2 = xs2.first(where: { $0 > x1 && xs1.contains($0) }) else { break }
                        res = min(res, (y2 - y1) * (x2 - x1))
                    }
                }
        }

        return res == Int.max ? 0 : res
    }
}
```