# Swift solution using dynamic programming and memoization

**Author:** VladimirTheLeet
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-of-cutting-a-pizza/solutions/3363609/](https://leetcode.com/problems/number-of-ways-of-cutting-a-pizza/solutions/3363609/)

---

# Complexity
- Time complexity:O(k * rows * columns * (rows + columns) )
- Space complexity: O(k * rows * columns)

# Code
```
class Solution {
    func ways(_ pizza: [String], _ k: Int) -> Int
    {
        if k == 1 { return pizza.contains(where: {$0.contains("A")}) ? 1 : 0 } //trivial case
        let modulo = 1_000_000_000 + 7
        var cells: [[Bool]] = pizza.map { $0.map({$0 == "A"}) }
        let rows = cells.count, columns = cells[0].count, cuts = k - 1

        // apples[i][j] is a number of apples inside rectangle i..<rows, j..<cols
        var apples: [[Int]] = Array(repeating: Array(repeating: 0, count: columns), count: rows)

        // dp[c][i][j] is a number of ways of cutting a part of pizza inside rectangle i..<rows, j..<cols with c cuts       
        var dp: [[[Int]]] = Array(repeating: Array(repeating: Array(repeating: 0, count: columns), count: rows), count: cuts + 1) 

        // fill the apples array and base level of dp
        apples[rows-1][columns-1] = cells[rows-1][columns-1] ? 1 : 0
        for i in (0..<rows).reversed()
        {
            for j in (0..<columns).reversed()
            {
                if i < rows-1 {
                    apples[i][j] = apples[i+1][j] + cells[i][j..<columns].filter({$0}).count
                }
                else if j < columns-1 {
                    apples[i][j] = apples[i][j+1] + cells[i..<rows].map({$0[j]}).filter({$0}).count
                }

                if apples[i][j] > 0 {
                    dp[0][i][j] = 1
                }                
            }
        }

        // caching calculated possible horizontal and vertical cuts count for reuse
        var horizontalCutsCount: [[Int]] = Array(repeating: Array(repeating: 0, count: columns), count: rows)
        var verticalCutsCount: [[Int]] = Array(repeating: Array(repeating: 0, count: columns), count: rows)

        // main cycle, filling dp array level by level
        for c in 1...cuts
        {
            for i in (0..<rows).reversed()
            {
                for j in (0..<columns).reversed()
                {
                    if apples[i][j] < c + 1 // just dont have enough apples for so many cuts, dead end
                    {
                        horizontalCutsCount[i][j] = 0
                        verticalCutsCount[i][j] = 0
                        dp[c][i][j] = 0
                        continue
                    }

                    // checking horizontal cuts
                    if i < rows-1
                    {
                        if apples[i][j] > apples[i+1][j] {
                            // new row has apples in it, so new possible horizontal cuts are added
                            horizontalCutsCount[i][j] = dp[c-1][(i+1)..<rows].reduce(0, { $0 + $1[j] })
                        }
                        else {
                            // no apples in new row means the same amount of possible horizontal cuts
                            horizontalCutsCount[i][j] = horizontalCutsCount[i+1][j]
                        }
                    }
                    else {
                        // with one last row there is no possible horizontal cuts
                        horizontalCutsCount[i][j] = 0
                    }
                    
                    // checking vertical cuts
                    if j < columns-1
                    {
                        if apples[i][j] > apples[i][j+1] {
                            // new column has apples in it, so new possible vertical cuts are added
                            verticalCutsCount[i][j] = dp[c-1][i][(j+1)..<columns].reduce(0, +)
                        }
                        else {
                            // no apples in new column means the same amount of possible vertical cuts
                            verticalCutsCount[i][j] = verticalCutsCount[i][j+1]
                        }
                    }
                    else {
                        // with one last column there is no possible vertical cuts
                        verticalCutsCount[i][j] = 0
                    }

                    dp[c][i][j] = horizontalCutsCount[i][j] + verticalCutsCount[i][j]                    
                }
            }
        }

        return dp[cuts][0][0] % modulo
    }
}
```