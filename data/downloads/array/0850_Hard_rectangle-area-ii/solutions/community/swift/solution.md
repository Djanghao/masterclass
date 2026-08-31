# Swift solution

**Author:** yamironov
**Votes:** 0
**Link:** [https://leetcode.com/problems/rectangle-area-ii/solutions/1419521/](https://leetcode.com/problems/rectangle-area-ii/solutions/1419521/)

---

Swift solution
```
class Solution {
    func rectangleArea(_ rectangles: [[Int]]) -> Int {
        let n = rectangles.count
        var lineX = [Int: [Int]](), sliceRectangles = Set<Int>(), lastX = 0, result = 0
        for i in 0..<n {
            lineX[rectangles[i][0], default: [Int]()].append((i + 1)) // starts at x1
            lineX[rectangles[i][2], default: [Int]()].append(-(i + 1)) // ends at x2
        }
        for x in lineX.keys.sorted() {
            if x > lastX, !sliceRectangles.isEmpty {
                var lineY = [Int: Int](), slice = 0, lastY = 0, lengthY = 0
                for i in sliceRectangles {
                    lineY[rectangles[i][1], default: Int(0)] += 1 // starts at y1
                    lineY[rectangles[i][3], default: Int(0)] -= 1 // ends at y2
                }
                for y in lineY.keys.sorted() {
                    guard let dys = lineY[y] else { continue }
                    if slice > 0 {
                        lengthY += y - lastY
                    }
                    slice += dys
                    lastY = y
                }
                result += lengthY * (x - lastX)
            }
            lastX = x
            guard let dxs = lineX[x] else { continue }
            for dx in dxs.sorted(by: >) { // first starts, then ends
                if dx > 0 { // starts
                    sliceRectangles.insert(dx - 1)
                } else { // ends
                    sliceRectangles.remove(-dx - 1)
                }
            }
        }
        return result % 1_000_000_007
    }
}
```