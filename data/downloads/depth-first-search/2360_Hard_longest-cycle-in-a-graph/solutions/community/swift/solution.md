# ✅ Clean swift solution

**Author:** kulizhnikov
**Votes:** 2
**Link:** [https://leetcode.com/problems/longest-cycle-in-a-graph/solutions/3342548/](https://leetcode.com/problems/longest-cycle-in-a-graph/solutions/3342548/)

---

# Complexity
- Time complexity: O(n)

- Space complexity: O(n)

# Code
```
class Solution {
    func longestCycle(_ edges: [Int]) -> Int {
        var answer = -1

        var visited = Array(repeating: false, count: edges.count)

        for i in 0..<edges.count {
            guard !visited[i] else { continue }

            var currentNode = i
            var path = [i]
            while !visited[currentNode] {
                visited[currentNode] = true

                let nextNode = edges[currentNode]
                guard nextNode != -1 else { break }
                path.append(nextNode)

                currentNode = nextNode
            }

            let cyclePath = path.suffix(from: path.firstIndex(of: currentNode)!)
            if cyclePath.count > 1 {
                answer = max(answer, cyclePath.count - 1)
            }
        }

        return answer
    }
}
```
---

If my LeetCode solution was helpful, kindly upvote it to support my contributions and aid others in their coding journey! \uD83D\uDE0A\uD83D\uDC4D