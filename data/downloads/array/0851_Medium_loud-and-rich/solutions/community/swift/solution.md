# Swift - Topological sort

**Author:** arrb
**Votes:** 0
**Link:** [https://leetcode.com/problems/loud-and-rich/solutions/6034672/](https://leetcode.com/problems/loud-and-rich/solutions/6034672/)

---


# Code
```swift []
class Solution {
    func loudAndRich(_ richer: [[Int]], _ quiet: [Int]) -> [Int] {
        let n = quiet.count

        var graph = [Int: [Int]]() //adj list
        var indegree = Array(repeating: 0, count: n)

        for edge in richer {
            graph[edge[0], default: []].append(edge[1]) //edge[0] is richer than edge[1]
            indegree[edge[1]] += 1
        }

        var queue = (0..<n).filter {
            indegree[$0] == 0 //will pick the most richest people
        }

        var result = (0..<n).map { $0 } //assume each person at index i is the quietest and richest

        while queue.isEmpty == false {
            var next = [Int]()

            for currentPerson in queue {
                guard let neighbors = graph[currentPerson] else { continue }
                for neighbor in neighbors {
                    indegree[neighbor] -= 1
                    if indegree[neighbor] == 0 {
                        next.append(neighbor)
                    }

                    //we need to minimize the quiteness
                    if quiet[result[neighbor]] > quiet[result[currentPerson]] {
                        result[neighbor] = result[currentPerson] //now currentPerson is more rich and less quieter than neighbor
                    }
                }
            }

            queue = next
        }

        return result
    }
}
```