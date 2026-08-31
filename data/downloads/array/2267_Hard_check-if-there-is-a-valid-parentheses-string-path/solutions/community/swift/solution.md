# Swift | Space-optimized DP solution

**Author:** VladimirTheLeet
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-there-is-a-valid-parentheses-string-path/solutions/4974130/](https://leetcode.com/problems/check-if-there-is-a-valid-parentheses-string-path/solutions/4974130/)

---

# Complexity
- Time complexity: $O(m \\cdot n \\cdot(m+n))$
- Space complexity: $O(n \\cdot(m+n))$

# Code
```
class Solution {
    func hasValidPath(_ grid: [[Character]]) -> Bool
    {
        let m = grid.count, n = grid[0].count
        guard grid[0][0] == "(" && grid[m-1][n-1] == ")" else { return false }
        if (m + n - 1) % 2 == 1 { return false } // odd length path can't be valid

        // dp[j] is the set of all possible variants of the number of opened
        // and not yet closed parentheses '(' in the path to the cell grid[i][j]
        var dp: [Set<Int>] = Array(repeating: [], count: n)
        dp[0] = [0]
        var prevCell: Set<Int>
        for i in 0..<m
        {
            prevCell = []            
            for j in 0..<n
            {
                // values from two possible predecesssors of 
                // current cell \u2014 cells to the top and left from it
                let cell = dp[j].union(prevCell)

                if grid[i][j] == "(" {
                    // new opening bracket just add 1 to the count
                    dp[j] = Set(cell.map{$0 + 1})
                }
                else { // ")"
                    // if there are preceding '(' in the path, their count decrements,
                    // otherwise path with ')' without preceding '(' is invalid and dismissed
                    dp[j] = Set(cell.compactMap{ $0 == 0 ? nil : $0 - 1})
                }
                prevCell = dp[j]
            }
        }
        // check if there is a path to the final cell with equal count of '(' and ')'
        return dp[n-1].contains(0)
    }
}
```