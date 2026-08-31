# Swift

**Author:** ksmirnovnn
**Votes:** 0
**Link:** [https://leetcode.com/problems/perfect-rectangle/solutions/5041849/](https://leetcode.com/problems/perfect-rectangle/solutions/5041849/)

---

# Intuition
The problem can be solved by understanding that a perfect rectangle is formed when:

1. The sum of the areas of all the small rectangles is equal to the area of the large rectangle.
2. All corners of the small rectangles appear an even number of times, except for the corners of the large rectangle which appear only once.

# Approach
The approach is to iterate over all the rectangles and keep track of the following:

- The minimum and maximum x and y coordinates (to find the corners of the large rectangle).
- The total area covered by the small rectangles.
- The corners of all the rectangles. If a corner is repeated, it is removed from the set.

After iterating over all the rectangles, check if:

- The total area covered by the small rectangles is equal to the area of the large rectangle.
- The set of corners contains exactly the four corners of the large rectangle.


# Complexity
- Time complexity:
The time complexity is O(n) , where n is the number of rectangles. 

- Space complexity:
The space complexity is O(n).

# Code
```
class Solution {
    func isRectangleCover(_ rectangles: [[Int]]) -> Bool {
        var corners = Set<String>()
        var area = 0
        var minX = Int.max
        var minY = Int.max
        var maxX = Int.min
        var maxY = Int.min

        for rectangle in rectangles {
            let x1 = rectangle[0]
            let y1 = rectangle[1]
            let x2 = rectangle[2]
            let y2 = rectangle[3]

            minX = min(minX, x1)
            minY = min(minY, y1)
            maxX = max(maxX, x2)
            maxY = max(maxY, y2)

            area += (x2 - x1) * (y2 - y1)

            let p1 = "\\(x1) \\(y1)"
            let p2 = "\\(x1) \\(y2)"
            let p3 = "\\(x2) \\(y1)"
            let p4 = "\\(x2) \\(y2)"

            if !corners.insert(p1).inserted { corners.remove(p1) }
            if !corners.insert(p2).inserted { corners.remove(p2) }
            if !corners.insert(p3).inserted { corners.remove(p3) }
            if !corners.insert(p4).inserted { corners.remove(p4) }
        }

        if corners.count != 4 ||
            !corners.contains("\\(minX) \\(minY)") ||
            !corners.contains("\\(minX) \\(maxY)") ||
            !corners.contains("\\(maxX) \\(minY)") ||
            !corners.contains("\\(maxX) \\(maxY)") {
            return false
        }

        return area == (maxX - minX) * (maxY - minY)
    }
}

```