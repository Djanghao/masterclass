# Swift - Using Ranges

**Author:** tchamberlin
**Votes:** 1
**Link:** [https://leetcode.com/problems/rectangle-overlap/solutions/870480/](https://leetcode.com/problems/rectangle-overlap/solutions/870480/)

---

Swift solution using `Range`. 100% speed, 98.25% memory.

```
class Solution {
    func isRectangleOverlap(_ rec1: [Int], _ rec2: [Int]) -> Bool {
        let xRange1 = rec1[0]..<rec1[2]
        let yRange1 = rec1[1]..<rec1[3]
        let xRange2 = rec2[0]..<rec2[2]
        let yRange2 = rec2[1]..<rec2[3]
        return xRange1.overlaps(xRange2) && yRange1.overlaps(yRange2)
    }
}
```