# Go, O(n) Solution

**Author:** sitleon
**Votes:** 1
**Link:** [https://leetcode.com/problems/time-taken-to-mark-all-nodes/solutions/5581356/](https://leetcode.com/problems/time-taken-to-mark-all-nodes/solutions/5581356/)

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
func timeTaken(edges [][]int) []int {
    ans, adj := make([]int, len(edges)+1), make([][]int, len(edges)+1)
    for _, e := range edges {
        u, v := e[0], e[1]
        adj[u] = append(adj[u], v)
        adj[v] = append(adj[v], u)
    }
    dfs(ans, adj, 0, 0)
    rdfs(ans, adj, 0, 0, 0)
    return ans
}

func dfs(ans []int, adj [][]int, r, par int) int {
    for _, v := range adj[r] {
        if v == par {
            continue
        }
        ans[r] = max(ans[r], dfs(ans, adj, v, r))
    }
    return ans[r]+2-(r%2)
}

func rdfs(ans []int, adj [][]int, r, par, prv int) {
    ans[r] = max(ans[r], prv)
    h1, h2 := prv, 0
    for _, v := range adj[r] {
        if v == par {
            continue
        }
        switch nt := ans[v]+2-(v%2); {
        case nt > h1:
            h1, h2 = nt, h1
        case nt > h2:
            h2 = nt
        }
    }
    for _, v := range adj[r] {
        if v == par {
            continue
        }
        if c := ans[v]+2-(v%2); c == h1 {
            rdfs(ans, adj, v, r, h2+2-(r%2))
        } else {
            rdfs(ans, adj, v, r, h1+2-(r%2))
        }
    }
}
```