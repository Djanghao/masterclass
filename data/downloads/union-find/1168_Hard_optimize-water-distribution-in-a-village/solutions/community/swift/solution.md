# Swift Kruskal

**Author:** arrb
**Votes:** 0
**Link:** [https://leetcode.com/problems/optimize-water-distribution-in-a-village/solutions/5909314/](https://leetcode.com/problems/optimize-water-distribution-in-a-village/solutions/5909314/)

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
```swift []
import HeapModule

struct Edge : Comparable {
    let vertices: (a: Int, b: Int)
    let weight: Int

    static func < (_ lhs: Edge , _ rhs: Edge) -> Bool  {
        return lhs.weight < rhs.weight
    }

    static func == (_ lhs: Edge , _ rhs: Edge) -> Bool  {
        return lhs.weight == rhs.weight
    }
}

class Solution {
    func minCostToSupplyWater(_ n: Int, _ wells: [Int], _ pipes: [[Int]]) -> Int {
        //we could do Prims or kruskals algo to find the min spanning tree

        //when the problem says find the min total something that connects all nodes/vertices, then it is a MST problem

        //we can use Kruskal's algorithm 
        var minHeap = Heap<Edge>()
        let unionFind = UnionFind(n+1)
        var minCost = 0

        for i in 0..<n {
            let edge = Edge(vertices: (0, i+1), weight: wells[i])
            minHeap.insert(edge)
        }

        for pipe in pipes {
            let edge = Edge(vertices: (pipe[0], pipe[1]), weight: pipe[2])
            minHeap.insert(edge)
        }

        while minHeap.isEmpty == false {
            let edge = minHeap.removeMin() 
            let (x, y, weight) = (edge.vertices.a, edge.vertices.b, edge.weight)

            if unionFind.union(x, y) {
                minCost += weight
            }
        }

        return minCost
    }
}

class UnionFind {
    var rank: [Int]
    var root: [Int]

    init(_ n : Int) {
        rank = Array(repeating: 1, count: n)
        root = Array(repeating: -1, count: n)
    }

    func find(_ v: Int) -> Int {
        if root[v] == -1 { return v }
        root[v] = find(root[v])
        return root[v]
    }

    func union(_ a: Int,_ b: Int) -> Bool {
        let x = find(a)
        let y = find(b)

        guard x != y else { return false }
        if rank[x] > rank[y] {
            root[y] = x
        } else if rank[x] < rank[y] {
            root[x] = y
        } else {
            root[y] = x
            rank[x] += 1
        }
        return true
    }
}
```