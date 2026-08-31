# Swift || Sort + Two Pointers

**Author:** NoMansGhost
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-rectangles-to-cover-points/solutions/5039945/](https://leetcode.com/problems/minimum-rectangles-to-cover-points/solutions/5039945/)

---

# Code
```
class Solution {
    func minRectanglesToCoverPoints(_ points: [[Int]], _ w: Int) -> Int {
        let points = points.sorted { $0[0] < $1[0] }
        var total = 1
        var left = 0

        for right in 0..<points.count {
            let x = points[right][0]
            let previousX = points[left][0]

           if x-previousX > w {
                left = right
                total += 1 
           }
        }

        return total
    }
}

```