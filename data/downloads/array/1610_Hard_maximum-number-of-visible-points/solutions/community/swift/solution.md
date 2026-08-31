# Swift | Sliding Window

**Author:** pagafan7as
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-visible-points/solutions/5431492/](https://leetcode.com/problems/maximum-number-of-visible-points/solutions/5431492/)

---

The idea is to transform points into angles between 0 and 2 * pi. We use the sliding window in a circular array, therefore we double the array.

```
class Solution {
    func visiblePoints(_ points: [[Int]], _ angle: Int, _ location: [Int]) -> Int {
        let n = points.count
        let points = points.filter { $0 != location }
        let pointsAtLocationCount = n - points.count
        
        // Sanitize angles.
        var angles = points.map(degrees).sorted()
        angles += angles.map { $0 + 2 * .pi }
        let angle = Double(angle) / 180 * .pi

        // Use a sliding window.
        var lo = 0, hi = 0
        var res = 0
        for hi in 0..<angles.count {
            if angles[hi] - angles[lo] > angle {
                lo += 1
                continue
            }
            res = max(res, hi - lo + 1)
        }

        return res + pointsAtLocationCount

        // Degree of point relative to location.
        func degrees(_ point: [Int]) -> Double {
            let deltaX = Double(point[0] - location[0])
            let deltaY = Double(point[1] - location[1])
            return atan2(deltaX, deltaY)
        }
    }
}
```