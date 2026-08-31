# [swift] Just for you Steve

**Author:** dmyma
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-time-when-the-network-becomes-idle/solutions/1549651/](https://leetcode.com/problems/the-time-when-the-network-becomes-idle/solutions/1549651/)

---

Basicly we want to calculate the round trip time after the last message was sent for each node. It would be great if we know the round trip time for each node, right? Intuition, is to traverse the whole grid and calculate the distance from the source to each node. Ah, sounds like [Dijkstra](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm) algorithm, but because there is no build in priority queue in swift we can use BFS instead.

Steps:
1. Create adjacency matrix for easier traversal
2. Traverse the grid and calculate the distance
3.  Find max time for each distance

Notes:
**A**
We use `dist[v] == n` instead creating visited/seen set, since we initialize with `n` and we have not started from this node yet. However, I got TLE so we need a trick here. There are many tricks, I think it is the easiest I can think of.
**B**
This line is a one line `res = max(res, (2*dist[i]-1)/patience[i]*patience[i] + 2*dist[i]) ` for
```
let roundTrip = 2 * dist[i]
let numberOfMsgs = (roundTrip - 1) / patience[i]
let lastMsgTime = numberOfMsgs * patience[i]
res = max(res, lastMsgTime + roundTrip)
```

**Solution**
```
class Solution {
    func networkBecomesIdle(_ edges: [[Int]], _ patience: [Int]) -> Int {
        let n = patience.count
        var adj = [Int: [Int]]()
        var dist = Array(repeating: n, count: n)
        var q: [Int] = [0]
        var res = 0
        dist[0] = 0
        
        for edge in edges {
            let u = edge[0]
            let v = edge[1]
            if adj[u] != nil { adj[u]?.append(v) }
            else { adj[u] = [v] }
            if adj[v] != nil { adj[v]?.append(u) }
            else { adj[v] = [u] }
        }
        while !q.isEmpty {
            let u = q.removeFirst()
            for v in adj[u]! {
                if dist[v] == n {
                    dist[v] = dist[u] + 1
                    q.append(v)
                }
            }
        }
        for i in 1..<n { 
			res = max(res, (2*dist[i]-1)/patience[i]*patience[i] + 2*dist[i]) 
		}
        return res + 1
    }
}
```