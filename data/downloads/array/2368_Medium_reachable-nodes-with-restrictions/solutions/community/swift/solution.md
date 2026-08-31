# swift - easy solution, beats 100 %

**Author:** Zhanadilll
**Votes:** 0
**Link:** [https://leetcode.com/problems/reachable-nodes-with-restrictions/solutions/5043103/](https://leetcode.com/problems/reachable-nodes-with-restrictions/solutions/5043103/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func reachableNodes(_ n: Int, _ edges: [[Int]], _ restricted: [Int]) -> Int {
        var dict = [Int: [Int]]()
        var rest: [Int: Bool] = [:]
        restricted.forEach { rest[$0] = true }
        for edge in edges {
            if !(rest[edge[0]] ?? false) && !(rest[edge[1]] ?? false) {
                dict[edge[0], default: []].append(edge[1])
                dict[edge[1], default: []].append(edge[0])
            }
        }

        var res = 0
        var visited = [Int: Bool]()
        helper(dict, 0, &res, &visited)
        return res
    }

    func helper(_ dict: [Int: [Int]], _ curr: Int, _ res: inout Int, _ visited: inout [Int: Bool]) {
        if visited[curr] ?? false  { return }
        visited[curr] = true
        res += 1
        for i in dict[curr] ?? [] {
            helper(dict, i, &res, &visited)
        }
    }
}
```