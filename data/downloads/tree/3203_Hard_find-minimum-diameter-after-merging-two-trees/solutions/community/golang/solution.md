# Sum of two graph radius - Simple explanation and coding with O(V)

**Author:** thienan175
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-minimum-diameter-after-merging-two-trees/solutions/5391993/](https://leetcode.com/problems/find-minimum-diameter-after-merging-two-trees/solutions/5391993/)

---

# Intuition
Merging two graph by creating a connection that connects two central nodes of these graphs. Because the distance from the central node to any other nodes in the graph is less then or equal to the radius of that graph. The diameter of the merged graph will be `r1 + 1 + r2`, where `r1` and `r2` are the radius of graph1 and graph2, and `1` is a new connection that we create.

# Approach
The diameter of a graph can be found by using two BFS:
- The first BFS traversing the graph from a random node, and ending at the farthest node, let call it node `A`.
- The second BFS starting from node `A`, and ending at node `B`, the farthest node from `A`. The path between `A` and `B` will form the `diameter` of the graph. Therefore, `diameter = distance(A, B)` which can easily keep track of when traversing the graph.

The `radius` of a graph is calculated by the `diameter`:
- If `diameter` is an even number, then the graph has two central nodes. As a result, `radius = diameter / 2 + 1`
- Otherwise, `radius = diameter / 2`

# Edge case
Assume that radis of graph 1 (`r1`) is longer than that of graph 2 (`r2`). There will be an edge case so that `r1 > r2 + 1`. In that case, the result will be the diameter of graph 1.

# Complexity
- Time complexity: $$O(V + E)$$ for BFS, or $$O(V)$$, because we already know that V = E + 1
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(V)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

*Note: V is number of vertexes (nodes), E is the number of edges*

# Code
```
func minimumDiameterAfterMerge(edges1 [][]int, edges2 [][]int) int {
    diameter1 := findDiameter(edges1)
    diameter2 := findDiameter(edges2)

    answer := getRadius(diameter1) + 1 + getRadius(diameter2)
    answer = max(answer, diameter1)
    answer = max(answer, diameter2)

    return answer
}

func findDiameter(edges [][]int) int {
    n := len(edges) + 1
    conn := connections(n, edges)
    farthest, _ := bfs(n, conn, 0)
    _, diameter := bfs(n, conn, farthest)
    return diameter
}

func getRadius(diameter int) int {
    return diameter - diameter / 2
}

func connections(n int, edges [][]int) [][]int {
    conn := make([][]int, n)
    for _, edge := range edges {
        node1, node2 := edge[0], edge[1]
        conn[node1] = append(conn[node1], node2)
        conn[node2] = append(conn[node2], node1)
    }

    return conn
}

func bfs(n int, conn [][]int, startNode int) (farthestNode int, maxHeight int) {
    height := 0
    item := []int{startNode, height}
    queue := [][]int{item}
    visited := make([]bool, n)

    for len(queue) > 0 {
        item := queue[0]
        queue = queue[1:]
        node, height := item[0], item[1]

        if visited[node] {
            continue
        }
        visited[node] = true

        if height > maxHeight {
            maxHeight = height
            farthestNode = node
        }

        for _, neighbor := range conn[node] {
            if !visited[neighbor] {
                queue = append(queue, []int{neighbor, height + 1})
            }
        }
    }

    return farthestNode, maxHeight
}
```