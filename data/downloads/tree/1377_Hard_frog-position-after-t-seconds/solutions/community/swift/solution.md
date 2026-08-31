# Swift | Compact Solution

**Author:** iosdevzone
**Votes:** 0
**Link:** [https://leetcode.com/problems/frog-position-after-t-seconds/solutions/3594431/](https://leetcode.com/problems/frog-position-after-t-seconds/solutions/3594431/)

---

The basic idea behind this solution is to carry out `t` steps of a breadth-first search, at each step calculating the set of nodes where the frog could be and the probabilty that it is at each of those nodes. 

To allow easy retrieval of the target node, a dictionary rather than a set is used to hold the `currentNodes`. 

# Code
```
class Solution {
    func frogPosition(_ n: Int, _ edges: [[Int]], _ t: Int, _ target: Int) -> Double {
        // Put the edges into more useful data structure.
        // graph[id] contains an array of all the nodes reachable from node `id`
        var graph = edges.reduce(into: [[Int]](repeating: [], count: n + 1)) {
            $0[$1[0]].append($1[1])
            $0[$1[1]].append($1[0])
        }
        // An array of nodes where the frog could be at the current time step.
        // At t = 0 the frog is at node 1 with a probability of 1.0.
        var currentNodes = [1:1.0]
        // Set of nodes visited so far; frog is not allow visit a node more than once.
        var visited = Set<Int>()
        for _ in 1...t {
            currentNodes = currentNodes.reduce(into: [Int:Double]()) {
                visited.insert($1.key) 
                let possibles = graph[$1.key].filter { !visited.contains($0) }
                let count = possibles.count
                if count == 0 {
                    // Frog stuck on current node
                    $0[$1.key] = $1.value
                    return
                }
                // Frog jumps to one of the possible nodes with equal probability
                let probability = $1.value / Double(count)
                for possible in possibles {
                    $0[possible] = probability
                }
            }
        }
        return  currentNodes[target] ?? 0.0
    }
}
```