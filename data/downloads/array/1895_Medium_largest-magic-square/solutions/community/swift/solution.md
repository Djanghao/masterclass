# Swift solution (prefix sums)

**Author:** yamironov
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-magic-square/solutions/1271042/](https://leetcode.com/problems/largest-magic-square/solutions/1271042/)

---

Check all squares using prefix sums
```
class Solution {
    func largestMagicSquare(_ grid: [[Int]]) -> Int {
        let rc = grid.count, cc = rc > 0 ? grid[0].count : 0
        var psr = grid // prefix sums for rows
        var psc = grid // prefix sums for cols
        var psd1 = grid // prefix sums for diagonals (left-to-right)
        var psd2 = grid // prefix sums for diagonals (right-to-left)
        var result = 0 // max size of magic square in grid

        func isMagic(_ r: Int, _ c: Int, _ d: Int) -> Bool {
            let magic = psd1[r + d][c + d] - (r > 0 && c > 0 ? psd1[r - 1][c - 1] : 0) // left-to-right diagonal sum
            if (psd2[r + d][c] - (r > 0 && c + d < cc - 1 ? psd2[r - 1][c + d + 1] : 0)) != magic { // right-to-left diagonal sum
                return false
            }
            for i in 0...d {
                if psr[r + i][c + d] - (c > 0 ? psr[r + i][c - 1] : 0) != magic { // i-th row sum
                    return false
                }
                if psc[r + d][c + i] - (r > 0 ? psc[r - 1][c + i] : 0) != magic { // i-th col sum
                    return false
                }
            }
            return true
        }

        for r in 0..<rc { // build prefix sums
            for c in 0..<cc {
                if c > 0 { psr[r][c] += psr[r][c - 1] }
                if r > 0 { psc[r][c] += psc[r - 1][c] }
                if r > 0 && c > 0 { psd1[r][c] += psd1[r - 1][c - 1] }
                if r > 0 && c < cc - 1 { psd2[r][c] += psd2[r - 1][c + 1] }
            }
        }

        for r in 0..<rc { // check all squares
            for c in 0..<cc {
                for d in 0..<min(rc - r, cc - c) where d + 1 > result && isMagic(r, c, d) {
                    result = d + 1
                }
            }
        }

        return result
    }
}
```