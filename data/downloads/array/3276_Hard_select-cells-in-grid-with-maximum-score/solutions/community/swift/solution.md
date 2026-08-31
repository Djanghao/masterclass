# [Swift] Sort descending + DFS

**Author:** dibbleme
**Votes:** 0
**Link:** [https://leetcode.com/problems/select-cells-in-grid-with-maximum-score/solutions/5726444/](https://leetcode.com/problems/select-cells-in-grid-with-maximum-score/solutions/5726444/)

---

# Intuition
Iterate the grid and record all unqiue `value` and its `row index` data into an array of turple: `[(Int, [Int])]`, sorted it in desending order, and DFS this array, in each DFS operation, iterate all rows that has NOT been visited, and record the max score.

For example,
Input:`grid = [[1,2,3],[4,3,2],[1,1,1]]` 
To array of truple: `[(4, [1]), (3, [0, 1]), (2, [1, 0]), (1, [0, 2])]`

# Complexity
* Space complexity: `m x n`, where m in number of rows and n is number of columns.
* Time complexity: `O(u + r + u * log(u))`, where `u` is total unique number, r is total number of rows.

# Code
```swift []
class Solution {
    func maxScore(_ g: [[Int]]) -> Int {
        var m: [Int: Set<Int>] = [:], data: [(Int, [Int])] = []
        for r in 0..<g.count {
            for c in 0..<g[r].count {
                m[g[r][c], default: []].insert(r)
            }
        }
        for (k, v) in m { data.append((k, Array(v))) }
        data.sort { lhs, rhs in lhs.0 > rhs.0 }
        var path: Set<Int> = [], ch: [[Int]: Int] = [:]
        return self.dfs(0, data, &path, &ch)!
    }

    private func dfs(_ i: Int, _ d: [(Int, [Int])], _ p: inout Set<Int>, _ c: inout [[Int]: Int]) -> Int? {
        guard i < d.count else { return 0 }
        let key = Array(p).sorted() + [i]
        if let fnd = c[key] { return fnd }
        var res: Int?
        for r in d[i].1 {
            if p.contains(r) { continue }
            p.insert(r)
            if let tmp = self.dfs(i + 1, d, &p, &c) {
                if let val = res { res = max(val, tmp) }
                else { res = tmp }
            }
            p.remove(r)
        }
        if let val = res {
            res = val + d[i].0
        } else {
            res = self.dfs(i + 1, d, &p, &c)
        }
        if let res { c[key] = res }
        return res
    }
}
```