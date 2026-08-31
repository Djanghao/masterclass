# Easy and fast GoLang solution with explanation

**Author:** dr41n
**Votes:** 2
**Link:** [https://leetcode.com/problems/jump-game-iv/solutions/3259612/](https://leetcode.com/problems/jump-game-iv/solutions/3259612/)

---

# Intuition
The problem can be thought of as a graph problem where each index is a node and there are edges between nodes that can be reached in one step. The goal is to find the shortest path from the first node to the last node.

# Approach
First, we create a graph where each value in the array maps to a list of indices where that value appears. This allows us to quickly find all indices with the same value as the current index.

We then use breadth-first search (BFS) to find the shortest path from the first index to the last index. We start by adding the first index to a queue and marking it as visited. Then we iterate through each level of BFS until we reach the last index.

At each level, we iterate through all nodes in the queue and add their neighbors (indices reachable in one step) to the queue if they haven\u2019t been visited before. We also mark them as visited.

To optimize this solution further, we delete values from our graph once we have processed all indices with that value. This prevents us from processing these indices again in future levels of BFS.

# Complexity
- Time complexity: $$O(n)$$ since we visit each node once.

- Space complexity: $$O(n)$$ since we need to store our graph and visited array.

# Code
```
func minJumps(arr []int) int {
    n := len(arr)
    if n <= 1 {
        return 0
    }
    graph := make(map[int][]int)
    for i := 0; i < n; i++ {
        if _, ok := graph[arr[i]]; !ok {
            graph[arr[i]] = []int{i}
        } else {
            graph[arr[i]] = append(graph[arr[i]], i)
        }
    }
    visited := make([]bool, n)
    visited[0] = true
    queue := []int{0}
    step := 0

    for len(queue) > 0 {
        size := len(queue)
        for i := 0; i < size; i++ {
            curr := queue[0]
            queue = queue[1:]
            if curr == n-1 {
                return step
            }
            nexts := append(graph[arr[curr]], curr-1)
            nexts = append(nexts, curr+1)

            for _, next := range nexts {
                if next >= 0 && next < n && !visited[next] {
                    visited[next] = true
                    queue = append(queue, next)
                }
            }

            delete(graph, arr[curr])
        }
        step++
    }

    return -1
}
```