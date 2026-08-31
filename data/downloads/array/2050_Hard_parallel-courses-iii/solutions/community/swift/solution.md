# ✅ Clean swift solution

**Author:** kulizhnikov
**Votes:** 1
**Link:** [https://leetcode.com/problems/parallel-courses-iii/solutions/4183593/](https://leetcode.com/problems/parallel-courses-iii/solutions/4183593/)

---

# Complexity
- Time complexity: O(n + m)

- Space complexity: O(n + m)

# Code
```
class Solution {
    func minimumTime(_ n: Int, _ relations: [[Int]], _ time: [Int]) -> Int {
        var neighboorsFor: [Int: [Int]] = [:]
        var indegreeCountFor = Array(repeating: 0, count: n)
        for edge in relations {
            let from = edge[0] - 1
            let to = edge[1] - 1
            neighboorsFor[from, default: []].append(to)
            indegreeCountFor[to] += 1
        }

        var readyCourses: [Int] = []
        var maxTimeFor = Array(repeating: 0, count: n)
        for i in 0..<n where indegreeCountFor[i] == 0 {
            readyCourses.append(i)
            maxTimeFor[i] = time[i]
        }

        while !readyCourses.isEmpty {
            let node = readyCourses.popLast()!
            for neighboor in neighboorsFor[node, default: []] {
                maxTimeFor[neighboor] = max(maxTimeFor[neighboor], maxTimeFor[node] + time[neighboor])
                indegreeCountFor[neighboor] -= 1
                if indegreeCountFor[neighboor] == 0 {
                    readyCourses.append(neighboor)
                }
            }
        }

        return maxTimeFor.max()!
    }
}
```