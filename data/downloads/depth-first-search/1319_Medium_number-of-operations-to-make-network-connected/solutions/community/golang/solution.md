# [Golang] UnionFind, Find number of unique connections

**Author:** vasakris
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-operations-to-make-network-connected/solutions/3331932/](https://leetcode.com/problems/number-of-operations-to-make-network-connected/solutions/3331932/)

---

# Complexity
- Time complexity:
O(N+C), N-nodes, C-Connections

- Space complexity:
O(Nuni)

# Code
```
func makeConnected(n int, connections [][]int) int {
    if len(connections) < n-1 {
        return -1
    }

    count := 0
    parents := make([]int, n)
    ranks := make([]int, n)

    for i := 0; i < n; i++ {
        parents[i] = i
    }

    for _, connection := range connections {
        if union(connection[0], connection[1], parents, ranks) {
            // Find number of unique conenctions
            count++
        }
    }

    // Total number of connections required - unique connections
    return (n-1)-count
}

func union(idx1, idx2 int, parents, ranks []int) bool {
    p1 := find(idx1, parents)
    p2 := find(idx2, parents)

    if p1 == p2 {
        return false
    }

    if ranks[p1] > ranks[p2] {
        parents[p2] = p1
    } else if ranks[p2] > ranks[p1] {
        parents[p1] = p2
    } else {
        parents[p2] = p1
        ranks[p1]++
    }

    return true
}

func find(idx int, parents []int) int {
    if idx != parents[idx] {
        parents[idx] = find(parents[idx], parents)
    }
    return parents[idx]
}
```