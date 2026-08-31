# Swift | Fast and simple

**Author:** alexgood
**Votes:** 1
**Link:** [https://leetcode.com/problems/line-reflection/solutions/3567820/](https://leetcode.com/problems/line-reflection/solutions/3567820/)

---

```
class Solution {
    func isReflected(_ points: [[Int]]) -> Bool {

        // 0. Only unique
        var setOfPoints = Set(points)
        if setOfPoints.count == 1 { return true }

        // 1. Find max/min
        var maxX = points[0][0]
        var minX = maxX
        for point in setOfPoints {
            if point[0] > maxX { maxX = point[0] } 
            if point[0] < minX { minX = point[0] }
        }

        let sum = minX + maxX

        // 2. Remove mirror points from setOfPoints
        for point in points {
            let mirrorPoint = [sum - point[0], point[1]]
            setOfPoints.remove(mirrorPoint)
        }
        
        return setOfPoints.isEmpty
    }
}
```