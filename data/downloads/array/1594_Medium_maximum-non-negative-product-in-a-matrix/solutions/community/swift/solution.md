# Swift | Recursion

**Author:** tinhpv
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-non-negative-product-in-a-matrix/solutions/3495556/](https://leetcode.com/problems/maximum-non-negative-product-in-a-matrix/solutions/3495556/)

---

# Code
```
class Solution {
    func maxProductPath(_ grid: [[Int]]) -> Int {
        let m = grid.count
        let n = grid[0].count

        var memo: [[(Int, Int)]] = Array(
            repeating: Array(repeating: (-1, -1), count: n+1),
            count: m+1
        )
        
        // return (max, min)
        func go(_ i: Int, _ j: Int) -> (Int, Int) {
            if i == m || j == n { return (1, 1) }

            if memo[i][j] != (-1, -1) {
                return memo[i][j]
            }
            
            if i+1 == m {
                let right = go(i, j+1)
                memo[i][j] = (
                    max(grid[i][j]*right.0, grid[i][j]*right.1),
                    min(grid[i][j]*right.0, grid[i][j]*right.1)
                )
                return memo[i][j]
            }

            if j+1 == n {
                let down = go(i+1, j)
                memo[i][j] = (
                    max(grid[i][j]*down.0, grid[i][j]*down.1),
                    min(grid[i][j]*down.0, grid[i][j]*down.1)
                ) 
                return memo[i][j]
            }

            let down = go(i+1, j)
            let right = go(i, j+1)

            memo[i][j] = (
                max(
                    max(grid[i][j]*down.0, grid[i][j]*down.1),
                    max(grid[i][j]*right.0, grid[i][j]*right.1)
                ),
                min(
                    min(grid[i][j]*down.0, grid[i][j]*down.1),
                    min(grid[i][j]*right.0, grid[i][j]*right.1)
                )
            )

            return memo[i][j]
        }

        let res = go(0, 0)
        return res.0 < 0 ? -1 : (res.0 % 1000000007)
    }
}
```