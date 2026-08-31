# Solution in Swift, DFS, O(n)

**Author:** sergeyleschev
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-valid-paths-in-a-tree/solutions/4083691/](https://leetcode.com/problems/count-valid-paths-in-a-tree/solutions/4083691/)

---

# Intuition
The intuition is to employ a depth-first search (DFS) approach through the tree.

# Approach
During each step in the traversal, we perform the following key calculations:

1. Determine the path that ends at the current node.
2. Compute two different subtree paths that traverse the current node.
3. Maintain an array that keeps track of the cases where paths contain either 0 or 1 prime number.

This method allows us to efficiently count the valid paths in the tree while considering the presence of prime numbers.

# Complexity

- Time complexity: O(n)
- Space complexity: O(n)

# Code
```
class Solution {
    func countPaths(_ n: Int, _ edges: [[Int]]) -> Int {
        var ans = 0
        var primes = Array(repeating: 1, count: n + 5)

        primes[1] = 0
        for i in 2...Int(sqrt(Double(n + 5))) {
            if primes[i] == 0 {
                continue
            }
            for j in stride(from: i * i, to: primes.count, by: i) {
                primes[j] = 0
            }
        }

        var adjList = Array(repeating: [Int](), count: n + 1)
        for edge in edges {
            adjList[edge[0]].append(edge[1])
            adjList[edge[1]].append(edge[0])
        }

        func dfs(_ curr: Int, _ parent: Int, _ adjList: [[Int]]) -> [Int] {
            var count = [0, 0]
            let isPrime = primes[curr] == 1

            for child in adjList[curr] {
                if child == parent {
                    continue
                }
                let next = dfs(child, curr, adjList)
                if isPrime {
                    // Path ends at curr
                    ans += next[0]
                    // curr is conduit for path
                    ans += count[1] * next[0]

                    count[1] += next[0]
                } else {
                    // Ends at curr
                    ans += next[1]
                    // curr is conduit for path
                    ans += count[0] * next[1]
                    ans += count[1] * next[0]

                    count[0] += next[0]
                    count[1] += next[1]
                }
            }

            count[isPrime ? 1 : 0] += 1
            return count
        }

        dfs(1, -1, adjList)
        return ans
    }
}

```