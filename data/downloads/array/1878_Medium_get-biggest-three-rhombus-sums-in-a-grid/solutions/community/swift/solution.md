# Swift | Brute force

**Author:** pagafan7as
**Votes:** 0
**Link:** [https://leetcode.com/problems/get-biggest-three-rhombus-sums-in-a-grid/solutions/5447319/](https://leetcode.com/problems/get-biggest-three-rhombus-sums-in-a-grid/solutions/5447319/)

---

Brute force O(n^4) is enough since n = 50. We could compute prefix sums and get O(n^3) time complexity.

Space complexity is O(n^3) but could be O(1) if we just retain the 3 largest sums and any given moment, for example by using a max heap.

# Code
```
class Solution {
    func getBiggestThree(_ grid: [[Int]]) -> [Int] {
        let m = grid.count, n = grid[0].count

        // Special case when rhombus is a single point.
        var sums = Set(grid.flatMap { $0 })

        for size in stride(from: 1, to: min(m, n) - 1, by: 1) {
            for r in 0..<m where r + 2 * size < m {
                for c in 0..<n where c - size >= 0 && c + size < n {
                    var sum = 0
                    for i in stride(from:1, to: size, by:1) {
                        sum += grid[r + i][c + i]
                        sum += grid[r + i][c - i]
                        sum += grid[r + i + size][c + i - size]
                        sum += grid[r + i + size][c - i + size]
                    }

                    // Add corners.
                    sum += grid[r][c]
                    sum += grid[r + size][c - size]
                    sum += grid[r + size][c + size]
                    sum += grid[r + 2 * size][c]

                    sums.insert(sum)
                }
            }
        }

        return Array(sums.sorted(by: >).prefix(3))
    }
}
```