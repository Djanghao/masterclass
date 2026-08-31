# Swift Solution

**Author:** laurayang321
**Votes:** 0
**Link:** [https://leetcode.com/problems/satisfiability-of-equality-equations/solutions/5137069/](https://leetcode.com/problems/satisfiability-of-equality-equations/solutions/5137069/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class UnionFind {
    private var parent: [Int]
    private var rank: [Int]

    init(size: Int) {
        parent = Array(0..<size)
        rank = Array(repeating: 0, count: size)
    }

    func find(_ p: Int) -> Int {
        if parent[p] != p {
            parent[p] = find(parent[p])  // Path compression
        }
        return parent[p]
    }

    func union(_ p: Int, _ q: Int) {
        let rootP = find(p)
        let rootQ = find(q)
        if rootP != rootQ {
            // Union by rank
            if rank[rootP] > rank[rootQ] {
                parent[rootQ] = rootP
            } else if rank[rootP] < rank[rootQ] {
                parent[rootP] = rootQ
            } else {
                parent[rootQ] = rootP
                rank[rootP] += 1
            }
        }
    }
}
class Solution {
    func equationsPossible(_ equations: [String]) -> Bool {
        let uf = UnionFind(size: 26)  // There are 26 lowercase English letters

        // First pass: process all '==' equations
        for eq in equations {
            var eq = Array(eq)
            if eq[1] == "=" {
                let x = Int(eq[0].asciiValue! - Character("a").asciiValue!)
                let y = Int(eq[3].asciiValue! - Character("a").asciiValue!)
                uf.union(x, y)
            }
        }

        // Second pass: check all '!=' equations
        for eq in equations {
            var eq = Array(eq)
            if eq[1] == "!" {
                let x = Int(eq[0].asciiValue! - Character("a").asciiValue!)
                let y = Int(eq[3].asciiValue! - Character("a").asciiValue!)
                if uf.find(x) == uf.find(y) {
                    return false  // Found contradiction
                }
            }
        }

        return true
    }
}
```