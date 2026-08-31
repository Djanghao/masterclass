# Swift solution

**Author:** yamironov
**Votes:** 0
**Link:** [https://leetcode.com/problems/coordinate-with-maximum-network-quality/solutions/1207820/](https://leetcode.com/problems/coordinate-with-maximum-network-quality/solutions/1207820/)

---

Swift solution
```
class Solution {
    func bestCoordinate(_ towers: [[Int]], _ radius: Int) -> [Int] {
        var minX = Int.max, minY = Int.max, maxX = Int.min, maxY = Int.min, maxQ = 0, result = [0, 0]
        for tower in towers {
            minX = min(minX, tower[0])
            minY = min(minY, tower[1])
            maxX = max(maxX, tower[0])
            maxY = max(maxY, tower[1])
        }
        for x in (minX - radius)...(maxX + radius) {
            for y in (minY - radius)...(maxY + radius) {
                var q = 0
                for tower in towers {
                    let dx = abs(tower[0] - x), dy = abs(tower[1] - y), d = Double(dx * dx + dy * dy).squareRoot()
                    if d <= Double(radius) {
                        q += Int(Double(tower[2]) / (1 + d))
                    }
                }
                if q > maxQ {
                    maxQ = q
                    result = [x, y]
                }
            }
        }
        return result
    }
}
```