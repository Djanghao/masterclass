# Swift UnionFind

**Author:** TatianaVol
**Votes:** 2
**Link:** [https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/solutions/3470091/](https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/solutions/3470091/)

---


# Code
```
class Solution {
    
    enum UnType: Int {
        case alice = 1
        case bob = 2
        case both = 3
    }

    func maxNumEdgesToRemove(_ n: Int, _ edges: [[Int]]) -> Int {
        
        var edges = edges.map { (type: UnType(rawValue: $0[0])!, from: $0[1], to: $0[2]) }.sorted { $0.type.rawValue > $1.type.rawValue }
        var unionA = Union(n)
        var unionB = Union(n)
        
        var extra = 0
        for edge in edges {
            
            switch edge.type {
            case .both:
                let aConnected = unionA.wasConnected(edge.from, edge.to)
                let bConnected = unionB.wasConnected(edge.from, edge.to)
                if aConnected && bConnected { extra += 1 }
            case .alice:
                if unionA.wasConnected(edge.from, edge.to) { extra += 1 }
            case .bob:
                if unionB.wasConnected(edge.from, edge.to) { extra += 1 }
            }
        }
        
        return unionB.connected() && unionA.connected() ? extra : -1
    }
}

class Union {
    
    private var union: [Int]
    private var ranks: [Int]
    
    init(_ n: Int) {
        union = Array(repeating: 0, count: n + 1).enumerated().map { $0.offset }
        ranks = Array(repeating: 1, count: n + 1)
    }
    
    // return true if i and j was connected previously
    func wasConnected(_ i: Int, _ j: Int) -> Bool {
        if areConnected(i, j) { return true }
        union(i, j)
        return false
    }
    
    func root(of node: Int) -> Int {
        var node = node
        while node != union[node] {
            node = union[node]
        }
        return node
    }
    
    func areConnected(_ i: Int, _ j: Int) -> Bool {
        root(of: i) == root(of: j)
    }
    
    func union(_ i: Int, _ j: Int) {
        if i == j { return }
        let iRoot = root(of: i)
        let jRoot = root(of: j)
        if iRoot == jRoot { return }
        
        if ranks[iRoot] < ranks[jRoot] {
            union[iRoot] = jRoot
            ranks[jRoot] += ranks[iRoot]
        } else {
            union[jRoot] = iRoot
            ranks[iRoot] += ranks[jRoot]
        }
    }
    
    func connected() -> Bool {
        Set(union.suffix(from: 1).map { root(of: $0) }).count == 1
    }
}
```