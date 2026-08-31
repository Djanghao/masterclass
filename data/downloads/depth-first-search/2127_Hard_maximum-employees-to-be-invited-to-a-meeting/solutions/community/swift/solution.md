# Swift Solution.

**Author:** amsukdu
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-employees-to-be-invited-to-a-meeting/solutions/1674731/](https://leetcode.com/problems/maximum-employees-to-be-invited-to-a-meeting/solutions/1674731/)

---

The idea is finding
Case 1 : 1 strongly coupled emplyoee + farthest perpheral employee.
Case 2 : Cycle detection.
Other posts have good explanations so please look at those posts if you need one.

```
class Solution {
    func maximumInvitations(_ favorite: [Int]) -> Int {
        var visited = [Int](repeating: 0, count: favorite.count)
        var inverse = [[Int]?](repeating: nil, count: favorite.count)
        for (i, f) in favorite.enumerated() {
            if inverse[f] == nil {
                inverse[f] = [Int]()
            }
            inverse[f]!.append(i)
        }
        var result = 0
        // case 1: one couple cycle + peripheral employees
        // All of "chunks" can be summed up and build a round table if you think about it.
        for (i, f) in favorite.enumerated() {
            if i == favorite[f] && f == favorite[i] && visited[i] == 0 {
                result += recursive2(&visited, f, inverse, i) + recursive2(&visited, i, inverse, f)
            }
        }
        
        // case 2: detect cycle
        for i in 0..<favorite.count {
            if visited[i] == 0 {
                result = max(recursive(&visited, i, favorite, 0), result)
            }
        }
        return result
    }
    
    // we use the inverse to get the farthest the peripheral employee
    func recursive2(_ visited: inout [Int], _ i: Int, _ g: [[Int]?], _ op: Int) -> Int {
        visited[i] = -1
        guard g[i] != nil else { return 1 }
        var result = 0
        for c in g[i]! {
            // don't go to the opposite side
            guard c != op else { continue }
            result = max(result, recursive2(&visited, c, g, op))
        }
        return result + 1
    }
    
    // cycle detection(DFS with backward edge check)
    func recursive(_ visited: inout [Int], _ i: Int, _ g: [Int], _ count: Int) -> Int {
        visited[i] = count + 1
        var result = 0
        var c = g[i]
        if visited[c] == -1 {
            result = 0
        } else if visited[c] > 0 {
            result = visited[i] - visited[c] + 1
        } else {
            result = recursive(&visited, c, g, count + 1)
        }
        visited[i] = -1
        visited[c] = -1
        return result
    }
}
```