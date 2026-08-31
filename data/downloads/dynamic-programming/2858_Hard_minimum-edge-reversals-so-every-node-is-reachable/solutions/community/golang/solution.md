# O(n) Go DP + DFS

**Author:** Panos_Ptr
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-edge-reversals-so-every-node-is-reachable/solutions/4052854/](https://leetcode.com/problems/minimum-edge-reversals-so-every-node-is-reachable/solutions/4052854/)

---

# Intuition
We are re-computing some paths with our simple dfs approach on each node. So we probably need some way to cache the results. The graph isn't random, it's basically a tree. The idea is to treat each node as if it were the root and use the parent to cache the results. This will cause sub problems to appear (try drawing this out).

Also have to be careful because tracking visited nodes with an array goes OOM. Thankfully it's enough that we won't go back to the parent and that will prevent circles. 

# Approach
Create a graph with weighted edges - edges that are in reverse have a cost of 1. Run dfs on every node and cache the results.

# Complexity
- Time complexity: $$O(n)$$
The time complexity depends on how many values we have to compute in the cache (`dp`). Every key `dp[i]` will have at most 3 values - 1 will be `-1` which is when we start from that node and the other two will be nodes pointing to that node, which we can have at most 2 of.

- Space complexity: $$O(n)$$
Same idea as the time complexity but in this case we care about the size of the cache.

# Code
```
func minEdgeReversals(n int, edges [][]int) []int {
    g := map[int]map[int]int{}
    for i := 0; i < n; i++ {
        g[i] = map[int]int{}
    }
    for _, e := range edges {
        g[e[0]][e[1]] = 0
        g[e[1]][e[0]] = 1
    }
    dp := map[int]map[int]int{}
    for i := 0; i < n; i++ {
        dp[i] = map[int]int{}
    }
    var dfs func(i,p int) int
    dfs = func(i,p int) int {
        total := 0
        if v, ok := dp[i][p]; ok {
            return v
        }
        for k, v := range g[i] {
            if k == p {
                continue
            }
            total += dfs(k, i) + v
        }
        dp[i][p] = total
        return total
    }

    ans := make([]int, n)
    for i := 0; i < n; i++ {
        ans[i] = dfs(i, -1)
    }

    return ans
}
```