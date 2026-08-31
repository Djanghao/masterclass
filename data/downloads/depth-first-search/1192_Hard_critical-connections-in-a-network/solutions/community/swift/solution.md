# DFS easy to understand Swift

**Author:** oldYellowBricks
**Votes:** 3
**Link:** [https://leetcode.com/problems/critical-connections-in-a-network/solutions/922684/](https://leetcode.com/problems/critical-connections-in-a-network/solutions/922684/)

---

```
class Solution {
    func criticalConnections(_ n: Int, _ connections: [[Int]]) -> [[Int]] {
        var dic = [Int: [Int]]()
        for array in connections {
            dic[array[0], default: []].append(array[1])
            dic[array[1], default: []].append(array[0])
        }
        var stepTracker = Array(repeating: -1, count: n)
        var res = [[Int]]()
        
        dfs(0, -1, 0, dic, &stepTracker, &res)
        
        return res
    }
    func dfs(_ currentNode: Int, _ parrentNode: Int, _ step: Int, _ dic: [Int: [Int]], _ stepTracker: inout [Int], _ res: inout [[Int]]) -> Int {
        stepTracker[currentNode] = step + 1
        for child in dic[currentNode]! {
            if child == parrentNode {
                continue
            } else if stepTracker[child] == -1 {
                stepTracker[currentNode] = min(stepTracker[currentNode], dfs(child, currentNode, step + 1, dic, &stepTracker, &res))
            } else {
                stepTracker[currentNode] = min(stepTracker[currentNode], stepTracker[child])
            }
        }
        if stepTracker[currentNode] == step + 1 && currentNode != 0 {
            res.append([currentNode, parrentNode])
        }
        return stepTracker[currentNode]
    }
}
```