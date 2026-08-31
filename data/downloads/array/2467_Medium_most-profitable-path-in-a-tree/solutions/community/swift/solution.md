# [Swift] - BFS graph

**Author:** chung1991
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-profitable-path-in-a-tree/solutions/2835292/](https://leetcode.com/problems/most-profitable-path-in-a-tree/solutions/2835292/)

---

```
class Solution {
    func mostProfitablePath(_ edges: [[Int]], _ bob: Int, _ amount: [Int]) -> Int {
        var amount = amount
        // make graph
        let adjs = makeAdjs(edges)
        
        // precompute
        let distMap = preCompute()
        
        // init
        var visited = Set<Int>([0])
        var aliceQueue = [0]
        var aliceAmtQueue = [amount[0]]
        var bob = bob
        amount[bob] = 0
        
        // run
        var ans = Int.min
        while aliceQueue.count > 0 {
            // run bob first
            bob = getNextBobMove(bob) // if bob already on root, it's ok to stay on root
            amount[bob] /= 2 // bob take half first
            
            // run alice later
            for _ in 0..<aliceQueue.count {
                let aliceNode = aliceQueue.removeFirst()
                let aliceAmt = aliceAmtQueue.removeFirst()
                
                if checkLeaf(aliceNode) {
                    ans = max(ans, aliceAmt)
                }
                
                for nodeNei in adjs[aliceNode] ?? [] {
                    if visited.contains(nodeNei) { continue }
                    visited.insert(nodeNei)
                    aliceQueue.append(nodeNei)
                    aliceAmtQueue.append(aliceAmt + amount[nodeNei])
                }
            }
            
            // bob take remain regardless alice take or not
            amount[bob] = 0
        }
        
        func makeAdjs(_ edges: [[Int]]) -> [Int: [Int]] {
            var ans: [Int: [Int]] = [:]
            for edge in edges {
                ans[edge[0], default: []].append(edge[1])
                ans[edge[1], default: []].append(edge[0])
            }
            return ans
        }
        
		// this dict to store the distance, that help Bob run toward to root node
        func preCompute() -> [Int: Int] {
            var ans: [Int: Int] = [:]
            var queue = [0]
            var visited = Set<Int>([0])
            
            var step = 0
            while queue.count > 0 {
                for _ in 0..<queue.count {
                    let node = queue.removeFirst()
                    ans[node] = step
                    for nei in adjs[node] ?? [] {
                        if visited.contains(nei) { continue }
                        visited.insert(nei)
                        queue.append(nei)
                    }
                }
                step += 1
            }
            return ans
        }
        
		// run toward root node
        func getNextBobMove(_ node: Int) -> Int {
            var nextNode = node
            for nei in adjs[node] ?? [] {
                if (distMap[nei] ?? 0) < (distMap[nextNode] ?? 0) {
                    nextNode = nei
                }
            }
            return nextNode
        }
        
        func checkLeaf(_ node: Int) -> Bool {
            let neis = adjs[node] ?? []
            if neis.count != 1 { return false }
            return visited.contains(neis[0])
        }
        
        return ans
    }
}
```