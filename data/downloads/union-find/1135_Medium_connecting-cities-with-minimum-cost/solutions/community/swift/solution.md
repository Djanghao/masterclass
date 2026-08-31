# Interview-Worthy Swift Solution

**Author:** ucastillo
**Votes:** 0
**Link:** [https://leetcode.com/problems/connecting-cities-with-minimum-cost/solutions/1754406/](https://leetcode.com/problems/connecting-cities-with-minimum-cost/solutions/1754406/)

---

```
// Kruskal's Algo + Union Find
class Solution {    
    func minimumCost(_ N: Int, _ connections: [[Int]]) -> Int {
        
        var root = [Int](0...N)
        let connections = connections.sorted{ $0[2] < $1[2] }
     
        func find (_ node: Int) -> Int{
            var cur = node
            while cur != root[cur] {
                cur = root[cur]
            }
            return cur
        }
        
        func union (_ nodeA: Int, _ nodeB: Int) -> Bool {
            let rootA = find(nodeA), rootB = find(nodeB)
            guard rootA != rootB else { return false }
            root[rootB] = rootA
            return true
        }
        
        func citiesAndCost(_ edge: [Int]) -> (Int, Int, Int) {
            return (edge[0], edge[1], edge[2])
        }
        
        var n = N, totalCost = 0
        for edge in connections {
            let (city1, city2, cost) = citiesAndCost(edge)
            guard union(city1, city2) else { continue }
            totalCost += cost
            n -= 1
        }
        return n == 1 ? totalCost : -1
    }
}
```