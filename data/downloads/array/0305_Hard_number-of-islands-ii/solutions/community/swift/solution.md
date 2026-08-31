# Swift UnionFind

**Author:** chung1991
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-islands-ii/solutions/1619111/](https://leetcode.com/problems/number-of-islands-ii/solutions/1619111/)

---

Algorithms
1. Create enough node for Union Find (m * n), each cells will be a node
2. Every cells will have node id is `row * n + col`
3. Create empty matrix filled with 0
4. Loop the matrix:
	- (Important) If current node is not zero, means this node has been set into 1 previously, do not consider it again. Otherwise
		- Increase number of island
		- Try to connect it with its 4 neighbors
			- Decrease number of island if connected
	- Collect result

```
class UnionFind {
    var root: [Int] = []
    var rank: [Int] = []
    init (_ count: Int) {
        for i in 0..<count {
            root.append(i)
            rank.append(1)
        }
    }
    func find(_ x: Int) -> Int {
        if root[x] != x {
            root[x] = find(root[x])
        }
        return root[x]
    }
    func union(_ x: Int, _ y: Int) -> Bool {
        let rootX = find(x)
        let rootY = find(y)
        if rootX != rootY {
            if rank[rootX] < rank[rootY] {
                root[rootX] = rootY
            } else if rank[rootX] > rank[rootY] {
                root[rootY] = rootX
            } else {
                root[rootY] = rootX
                rank[rootX] += 1
            }
            return true
        }
        return false
    }
}

class Solution {
    // Time O(klog(mn))
    // Space: O(mn)
    func numIslands2(_ m: Int, _ n: Int, _ positions: [[Int]]) -> [Int] {
        let groups = m * n
        var uf = UnionFind(groups)
        var matrix = Array(repeating: Array(repeating: 0, count: n), count: m)
        var ans: [Int] = []
        var island = 0
        for pos in positions {
            let i = pos[0]
            let j = pos[1]
            
            if matrix[i][j] == 0 {
                matrix[i][j] = 1
                island += 1
                for (r, c) in [(i+1,j),(i-1,j),(i,j+1),(i,j-1)] {
                    if r < 0 || c < 0 || r >= m || c >= n { continue }
                    if matrix[r][c] == 1 {
                        if uf.union(r*n+c, i*n+j) {
                            island -= 1
                        }
                    }
                }
            }
            ans.append(island)
        }
        return ans        
    }
}
```