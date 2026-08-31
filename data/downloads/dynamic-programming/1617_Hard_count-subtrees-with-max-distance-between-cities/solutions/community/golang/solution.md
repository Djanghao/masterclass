# Golang + Tree Diameter (Double BFS) + Bitmask

**Author:** michaeljank
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-subtrees-with-max-distance-between-cities/solutions/5082235/](https://leetcode.com/problems/count-subtrees-with-max-distance-between-cities/solutions/5082235/)

---

# Approach
Use bitmask to generate every city subset and then use double BFS to find tree diameter (max distance) for this city subset. Then increment the counter within the res slice. Basically combine Bitmasking to store state + Tree diameter (max distance)

# Complexity
- Time complexity:
O(n * (2 ^ n))

- Space complexity:
O(n ^ 2) (Adjacency list)

# Code
```
func countSubgraphsForEachDiameter(n int, edges [][]int) []int {
    adj := make([][]int, n)
    for _, edge := range edges {
        u := edge[0] - 1
        v := edge[1] - 1
        adj[u] = append(adj[u], v)
        adj[v] = append(adj[v], u)
    }

    res := make([]int, n - 1)

    var maxDistance func(mask int) int
    maxDistance = func(mask int) int {
        start := -1
        citiesInSubset := make(map[int]bool)
        for src := 0; src < n; src++ {
            if mask & (1 << src) == 0 {
                continue
            }
            start = src
            citiesInSubset[src] = true
        }
        if start == -1 {
            return -1
        }

        var bfs func(start int) (int, int, bool)
        bfs = func(start int) (int, int, bool) {
            visited := make(map[int]bool)
            var q []int
            q = append(q, start)
            visited[start] = true
            farthestNode := -1
            farthestDist := 0
            for len(q) != 0 {
                qSize := len(q)
                for i := 0; i < qSize; i++ {
                    u := q[0]
                    farthestNode = u
                    q = q[1:]
                    if adj[u] == nil {
                        continue
                    }
                    for _, v := range adj[u] {
                        if _, ok := citiesInSubset[v]; !ok {
                            continue
                        }
                        if _, ok := visited[v]; ok {
                            continue
                        }
                        visited[v] = true
                        q = append(q, v)
                    }
                }
                farthestDist++
            }
            isValid := len(visited) == len(citiesInSubset)
            return farthestNode, farthestDist - 1, isValid
        }

        // Tree diameter using BFS
        farthestNode, _, isValid := bfs(start)
        if !isValid {
            return -1
        }

        _, treeDiam, _ := bfs(farthestNode)
        return treeDiam
    }

    for mask := 0; mask < (1 << n); mask++ {
        d := maxDistance(mask)
        if d > 0 {
            res[d - 1]++
        }
    }
    return res
}
```