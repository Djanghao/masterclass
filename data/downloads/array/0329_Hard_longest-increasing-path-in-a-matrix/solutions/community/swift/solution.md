# The Swiftest solution

**Author:** talnoside
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-increasing-path-in-a-matrix/solutions/602879/](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/solutions/602879/)

---

By using dfs + memorization, the traditional way is to use a 2D array for caching:
```
class Solution {
    private let dirs = [[0,1],[1,0],[0,-1],[-1,0]]
    func longestIncreasingPath(_ matrix: [[Int]]) -> Int {
        if matrix.isEmpty || matrix[0].isEmpty {
            return 0
        }
        var c = [[Int]](repeating: [Int](repeating:0, count: matrix[0].count), count: matrix.count), res = 0
        for i in 0..<matrix.count {
            for j in 0..<matrix[0].count {
                res = max(res, dfs(matrix, i, j, &c))
            }
        }
        return res
    }
    
    func dfs(_ matrix: [[Int]], _ i: Int, _ j: Int, _ cache: inout [[Int]]) -> Int {
        if cache[i][j] != 0 {
            return cache[i][j]
        }
        for d in dirs {
            let x = d[0]+i, y = d[1]+j
            if x>=0 && x<matrix.count && y>=0 && y<matrix[0].count && matrix[x][y]>matrix[i][j] {
                cache[i][j] = max(cache[i][j], dfs(matrix, x, y, &cache))
            }
        }
        cache[i][j] += 1
        return cache[i][j]
    }
}
```

The solution above have time complexity O(mn) and space O(mn). Notice that for the 2D array, we allocate the memory for caching before we used it. However, we are using Swift here, why not giving up some runtime performance and utilize the best of Swift:
```
func longestIncreasingPath(_ matrix: [[Int]]) -> Int {
        var cache = [[Int]: Int](), res = 0
        for i in 0..<matrix.count {
            for j in 0..<matrix[0].count {
                res = max(res, dfs(matrix, i, j, &cache))
            }
        }
        return res
    }
    
    func dfs(_ matrix: [[Int]], _ i: Int, _ j: Int, _ cache: inout [[Int]: Int]) -> Int {
        if let val = cache[[i,j]] {
            return val
        }
        for d in dirs {
            let x = d[0]+i, y = d[1]+j
            if x>=0 && x<matrix.count && y>=0 && y<matrix[0].count && matrix[x][y]>matrix[i][j] {
                cache[[i,j]] = max(cache[[i,j]] ?? 0, dfs(matrix, x, y, &cache))
            }
        }
        cache[[i,j]] = (cache[[i,j]] ?? 0) + 1
        return cache[[i,j]]!
    }
```
Here we use Swift's powerful hashable protocol to store the indices in a dictionary. Since the memory allocation is dynamic it will increase the runtime comparing to the preallocated array. But hey! We only assign the memory when we need it. Much cleaner with Swift.