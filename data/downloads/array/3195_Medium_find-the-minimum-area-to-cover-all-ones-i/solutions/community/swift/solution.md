# ✅ Optimal Bounding Rect Solution

**Author:** eleev
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-minimum-area-to-cover-all-ones-i/solutions/5383543/](https://leetcode.com/problems/find-the-minimum-area-to-cover-all-ones-i/solutions/5383543/)

---

# Code
```swift
struct Solution {
    @_optimize(speed)
    func minimumArea(_ grid: [[Int]]) -> Int {
        var rect = BoundingRect()
      
        for i in grid.indices {
            for j in grid[i].indices where grid[i][j] == 1 {
                rect.boundingArea(at: i, and: j)
            }
        }
        return rect.isValid ? rect.area : 0
    }
}

struct BoundingRect {
    private(set) var minX = Int.max
    private(set) var minY = Int.max
    private(set) var maxX = Int.min
    private(set) var maxY = Int.min

    // Calculate the area of the rectangle
    var area: Int {
        (maxY - minY + 1) * (maxX - minX + 1)
    }

    // If minX is not 1 - then area is 0
    var isValid: Bool {
        minX != .max
    }

    // Update the min & max area boundaries
    mutating func boundingArea(at i: Int, and j: Int) {
        minX = min(minX, i)
        minY = min(minY, j)
        maxX = max(maxX, i)
        maxY = max(maxY, j)
    }
}
```