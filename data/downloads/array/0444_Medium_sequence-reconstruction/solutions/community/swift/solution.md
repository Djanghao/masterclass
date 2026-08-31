# [Swift] Kahn’s algorithm

**Author:** saceth1
**Votes:** 0
**Link:** [https://leetcode.com/problems/sequence-reconstruction/solutions/4324404/](https://leetcode.com/problems/sequence-reconstruction/solutions/4324404/)

---

# Code
```
class Solution {
    func sequenceReconstruction(_ nums: [Int], _ sequences: [[Int]]) -> Bool {
        func getIndegree(_ graph: [Int: Set<Int>]) -> [Int: Int] {
            var indegree = Dictionary(uniqueKeysWithValues: graph.keys.map { ($0, 0) })
            for value in graph.values {
                for nb in value {
                    indegree[nb, default: 0] += 1
                }
            }
            return indegree
        }

        var sequence = [Int]()

        var graph = Dictionary(uniqueKeysWithValues: nums.map { ($0, Set<Int>()) })
        for seq in sequences {
            for (source, destination) in zip(seq, seq.dropFirst()) {
                graph[source]!.insert(destination)
            }
        }
        var indegree = getIndegree(graph)

        var queue = [Int]()

        for (key, value) in indegree {
            if value == 0 {
                queue.append(key)
            }
        }

        while queue.count > 0 {
            if queue.count > 1 {
                return false
            }
            let item = queue.removeFirst()
            sequence.append(item)

            for nb in graph[item]! {
                indegree[nb, default: 0] -= 1
                if indegree[nb] == 0 {
                    queue.append(nb)
                }
            }

        }

        return nums == sequence
    }
}
```