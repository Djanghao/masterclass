# Swift - Try out all possible points

**Author:** duyetnt
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-lattice-points-inside-a-circle/solutions/1978411/](https://leetcode.com/problems/count-lattice-points-inside-a-circle/solutions/1978411/)

---

Let's say a circle has the center `(x, y)` and radius `r`, we may consider all points that have `x` within `[x - r...x + r]` and `y` within `[y - r...y + r]`. A point `p` is inside that circle if the distance between it and the center of circle is ***less than or equal to `r`.*** One thing to bare in mind is `p` may belong to more than one circle so we should use `set` to avoid duplication.

```swift
class Solution {
  func countLatticePoints(_ circles: [[Int]]) -> Int {
    func distance(_ i: Int, _ j: Int, _ x: Int, _ y: Int) -> Int {
      (i - x) * (i - x) + (j - y) * (j - y)
    }
    
    var points = Set<[Int]>()
    for circle in circles {
      let x = circle[0], y = circle[1], r = circle[2]
      let maxDist = r * r
      for dx in -r...r {
        for dy in -r...r {
          let i = x + dx, j = y + dy
          if distance(i, j, x, y) <= maxDist {
            points.insert([i, j])
          }
        }
      }
    }     
    
    return points.count
  }
}
```