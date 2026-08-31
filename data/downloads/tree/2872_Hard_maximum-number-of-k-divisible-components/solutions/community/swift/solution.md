# Accepted Swift

**Author:** ktoznet
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-k-divisible-components/solutions/5249893/](https://leetcode.com/problems/maximum-number-of-k-divisible-components/solutions/5249893/)

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
// My telegram - https://t.me/ktoznet

// My blog - https://t.me/+l9HzpPjfB3szMjg6

class Solution {
    func maxKDivisibleComponents(_ n: Int, _ edges: [[Int]], _ values: [Int], _ k: Int) -> Int {
        var adjList = [[Int]](repeating: [Int](), count: n)
        var subtreeSum = [Int](repeating: 0, count: n)
        var visited = [Bool](repeating: false, count: n)

        for edge in edges {
            let u = edge[0]
            let v = edge[1]
            adjList[u].append(v)
            adjList[v].append(u)
        }
        var result = 0

        func dfs(_ node: Int) -> Int {
            visited[node] = true
            var sum = values[node]

            for neighbor in adjList[node] where !visited[neighbor] {
                sum += dfs(neighbor)
            }

            if sum % k == 0 {
                result += 1
                return 0
            }
            return sum
        }
        _ = dfs(0)

        return result
    }
}
```