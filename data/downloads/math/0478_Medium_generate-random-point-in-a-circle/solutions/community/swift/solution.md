# Simple Swift Solution

**Author:** FatMonkeyPi
**Votes:** 2
**Link:** [https://leetcode.com/problems/generate-random-point-in-a-circle/solutions/1113731/](https://leetcode.com/problems/generate-random-point-in-a-circle/solutions/1113731/)

---

```
class Solution {

    var radius: Double
    var x: Double
    var y: Double
    init(_ radius: Double, _ x_center: Double, _ y_center: Double) {
        self.radius = radius
        self.x = x_center
        self.y = y_center
    }
    
    func randPoint() -> [Double] {
        let r = radius * sqrt(Double.random(in: 0...1))
        let c = Double.random(in: 0..<2*Double.pi)
        return [x + r * cos(c), y + r * sin(c)]
    }
}
```