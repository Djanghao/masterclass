# Very Short & Clean (w/Explan.)

**Author:** artemvor1997
**Votes:** 2
**Link:** [https://leetcode.com/problems/bus-routes/solutions/3280544/](https://leetcode.com/problems/bus-routes/solutions/3280544/)

---


```
class Solution {
    func numBusesToDestination(_ routes: [[Int]], _ source: Int, _ target: Int) -> Int {
        var adj = [Int: [Int]]()        // [stop: [No of Route]]
        for (i, route) in routes.enumerated() {
            route.forEach{ adj[$0, default: []].append(i) }
        }
        var q = [source]
        var start = 0
        var visited = Set<Int>()        // visited No of Routes
        var buses = 0

        while start < q.count {
            for _ in start..<q.count {
                let stop = q[start]; start += 1
                if stop == target {return buses}

                for route in adj[stop]! where !visited.contains(route) {
                    visited.insert(route)       // don't drive the routes already explored
                    routes[route].forEach { q.append($0) } 
                }
            }
            buses += 1                  // make a change and take another bus
        }
        return -1
    }
}
```