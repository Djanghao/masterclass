# Best solution. (146 ms, 14.3 MB)

**Author:** roman-okdi
**Votes:** 0
**Link:** [https://leetcode.com/problems/cyclically-rotating-a-grid/solutions/4418494/](https://leetcode.com/problems/cyclically-rotating-a-grid/solutions/4418494/)

---

# Code\r
```\r
class Solution {\r
\r
    struct Size {\r
        let w: Int\r
        let h: Int\r
        \r
        var perimeter: Int {\r
            return (h * 2) + (w - 2) * 2\r
        }\r
    }\r
\r
    struct Position {\r
        let x: Int\r
        let y: Int\r
    }\r
\r
    func rotateGrid(_ grid: [[Int]], _ k: Int) -> [[Int]] {\r
        let size = Size(w: grid[0].count, h: grid.count)\r
        var result = grid\r
        for (row, cols) in grid.enumerated() {\r
            for (col, val) in cols.enumerated() {\r
                let pos = rotate(from: Position(x: col, y: row),\r
                                size: size,\r
                                k: k)\r
                result[pos.y][pos.x] = val\r
            }\r
        }\r
        return result\r
    }\r
\r
    private func rotate(from: Position, size total: Size, k: Int) -> Position {\r
        let d = [from.y, from.x, total.w - 1 - from.x, total.h - 1 - from.y].min()!\r
        var size = Size(w: total.w - d * 2 - 1, h: total.h - d * 2 - 1)\r
        let perimeter = Size(w: size.w + 1, h: size.h + 1).perimeter\r
        var x = from.x - d\r
        var y = from.y - d\r
        for i in 0..<(k % perimeter) {\r
            if x == 0 && y == 0 {\r
                y += 1\r
            } else if x == 0 && y == size.h {\r
                x += 1\r
            } else if x == 0 && y < size.h {\r
                y += 1\r
            } else if x == 0 && y == size.h {\r
                x += 1\r
            } else if x == size.w && y == size.h {\r
                y -= 1\r
            } else if x < size.w && y == size.h {\r
                x += 1\r
            } else if x == size.w && y == 0 {\r
                x -= 1\r
            } else if x == size.w && y < size.h {\r
                y -= 1\r
            } else {\r
                x -= 1\r
            }\r
        }\r
        return Position(x: x + d, y: y + d)\r
    }\r
}\r
\r
```