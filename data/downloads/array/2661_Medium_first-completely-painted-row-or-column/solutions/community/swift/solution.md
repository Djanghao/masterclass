# Swift TLE + Optimised (88% faster)

**Author:** blest
**Votes:** 0
**Link:** [https://leetcode.com/problems/first-completely-painted-row-or-column/solutions/3589982/](https://leetcode.com/problems/first-completely-painted-row-or-column/solutions/3589982/)

---

# Intitial approach (TLE)
##### Complexity
- Time complexity: $$O(m^2*n^2)$$
- Space complexity: $$O(m + n)$$
```
class Solution {
    func firstCompleteIndex(_ arr: [Int], _ mat: [[Int]]) -> Int {
        let (m, n) = (mat.count, mat[0].count)
        var row = Array(repeating: 0, count: m)
        var col = Array(repeating: 0, count: n)
        for (k, target) in arr.enumerated() {
            for x in 0..<m {
                for y in 0..<n {
                    if mat[x][y] == target {
                        row[x] += 1
                        col[y] += 1
                        if row[x] == n || col[y] == m {
                            return k
                        }
                    }
                }
            }
        }
        return arr.count
    }
}
```

# Optimized approach 
##### Complexity
- Time complexity: $$O(m*n)$$
- Space complexity: $$O(m + n + m*n)$$
```
class Solution {
    func firstCompleteIndex(_ arr: [Int], _ mat: [[Int]]) -> Int {
        let (m, n) = (mat.count, mat[0].count)
        var row = Array(repeating: 0, count: m)
        var col = Array(repeating: 0, count: n)
        var coord: [Int: (Int, Int)] = [:]
        for i in 0..<m {
            for j in 0..<n {
                coord[mat[i][j]] = (i, j)
            }
        }
        for (k, target) in arr.enumerated() {
            let (x, y) = coord[target]!
            row[x] += 1
            col[y] += 1
            if row[x] == n || col[y] == m {
                return k
            }
        }
        return arr.count
    }
}