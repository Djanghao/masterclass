# [Swift] Math geometry solution

**Author:** GV1506
**Votes:** 3
**Link:** [https://leetcode.com/problems/circle-and-rectangle-overlapping/solutions/563432/](https://leetcode.com/problems/circle-and-rectangle-overlapping/solutions/563432/)

---

```
class Solution {
    func checkOverlap(_ radius: Int, _ x_center: Int, _ y_center: Int, _ left: Int, _ bottom: Int, _ right: Int, _ top: Int) -> Bool {
        let recW = Double(right - left)
        let recH = Double(top - bottom)
        let recx = Double(right + left) / 2
        let recy = Double(top + bottom) / 2
        
        // distance between rectange's center and circle's center
        let dx = abs(Double(x_center) - Double(recx))
        let dy = abs(Double(y_center) - Double(recy))
        
        if dx > recW/2 + Double(radius) { return false }
        if dy > recH/2 + Double(radius) { return false }
        if dx <= recW/2 { return true }
        if dy <= recH/2 { return true }
                     
        let sq = ((dx - recW/2) * (dx - recW/2) + (dy - recH/2) * (dy - recH/2))
        return (Double(radius) * Double(radius)) >= sq
    }
}
```