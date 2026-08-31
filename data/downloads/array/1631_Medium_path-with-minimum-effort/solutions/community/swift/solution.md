# Swift: BFS

**Author:** antonio081014
**Votes:** 5
**Link:** [https://leetcode.com/problems/path-with-minimum-effort/solutions/1036340/](https://leetcode.com/problems/path-with-minimum-effort/solutions/1036340/)

---

Space and Time: O(n * m)
```
class Solution {
    func minimumEffortPath(_ heights: [[Int]]) -> Int {
        let n = heights.count
        guard let m = heights.first?.count else { return -1 }
        var efforts = Array(repeating: Array(repeating: Int.max, count: m), count: n)
        efforts[0][0] = 0
        var queue = [(0, 0)]
        let dx = [0, 1, 0, -1]
        let dy = [1, 0, -1, 0]
        while queue.isEmpty == false {
            let (x, y) = queue.removeFirst()
            for index in 0 ..< dx.count {
                let xx = x + dx[index]
                let yy = y + dy[index]
                
                if xx >= 0, xx < n, yy >= 0, yy < m, max(efforts[x][y], abs(heights[xx][yy] - heights[x][y])) < efforts[xx][yy] {
                    efforts[xx][yy] = max(efforts[x][y], abs(heights[xx][yy] - heights[x][y]))
                    queue.append((xx, yy))
                }
            }
        }
        // print(efforts)
        return efforts[n - 1][m - 1]
    }
}
```