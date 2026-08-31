# Swift | BFS

**Author:** OrchidHunter
**Votes:** 4
**Link:** [https://leetcode.com/problems/cheapest-flights-within-k-stops/solutions/3065571/](https://leetcode.com/problems/cheapest-flights-within-k-stops/solutions/3065571/)

---

**BFS (accepted answer)**
```
class Solution {
    func findCheapestPrice(_ n: Int, _ flights: [[Int]], _ src: Int, _ dst: Int, _ k: Int) -> Int {
        let graph = flights.reduce(into: [Int: [(Int, cost: Int)]]()) { graph, weightedEdge in
            graph[weightedEdge[1], default:.init()].append((weightedEdge[0], weightedEdge[2]))
        }
        
        var cheapestPrice = Int.max
        var stops = 0
        var bfs = [(dst, 0)]
        while !bfs.isEmpty && stops <= k {
            bfs = bfs.flatMap { cur in
                (graph[cur.0] ?? []).compactMap { next in
                    let newCost = cur.1 + next.1
                    guard newCost < cheapestPrice else { return nil }
                    if next.0 == src {
                        cheapestPrice = min(cheapestPrice, newCost)
                        return nil
                    }
                    return (next.0, newCost)
                }
            }
            stops += 1
        }
        return cheapestPrice == Int.max ? -1 : cheapestPrice
    }
}
```