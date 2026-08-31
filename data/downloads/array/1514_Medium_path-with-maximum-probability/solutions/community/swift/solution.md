# Swift🔥2ways

**Author:** OrchidHunter
**Votes:** 3
**Link:** [https://leetcode.com/problems/path-with-maximum-probability/solutions/3690885/](https://leetcode.com/problems/path-with-maximum-probability/solutions/3690885/)

---

**Bellman-Ford (accepted answer)**
```
class Solution {
    func maxProbability(_ n: Int, _ edges: [[Int]], _ succProb: [Double], _ start: Int, _ end: Int) -> Double {
        var maxProb = Array(repeating: 0.0, count: n)
        maxProb[start] = 1.0
        while true {
            var changed = false
            for (edge, p) in zip(edges,succProb) {
                let (mu, mv) = (maxProb[edge[0]], maxProb[edge[1]])
                let (pu, pv) = (mu * p, mv * p)
                maxProb[edge[0]] = max(pv, mu)
                maxProb[edge[1]] = max(pu, mv)
                changed = changed || pu > mv || pv > mu
            }
            guard changed else { return maxProb[end] }
        } 
    }
}
```
**Heap (accepted answer)**
```
import Collections
struct Node : Comparable {
    var n:Int, p:Double
    static func < (l: Node, r: Node) -> Bool {l.p < r.p}
}

class Solution {
    func maxProbability(_ n: Int, _ edges: [[Int]], _ succProb: [Double], _ start: Int, _ end: Int) -> Double {        
        var graph = edges.indices.reduce(into: [Int:[(Int,Double)]]()) { graph, i in
            let edge = edges[i]
            graph[edge[0], default:[]] += [(edge[1], succProb[i])]
            graph[edge[1], default:[]] += [(edge[0], succProb[i])]
        }

        var heap = Heap([Node(n: start, p: 1)])
        while let node = heap.popMax() {
            guard node.n != end else { return node.p }
            guard let adj = graph[node.n] else { continue }
            heap.insert(contentsOf: adj.map{Node(n:$0, p:$1 * node.p)})
            graph[node.n] = nil // mark node as visited
        }
        return 0
    }
}
```