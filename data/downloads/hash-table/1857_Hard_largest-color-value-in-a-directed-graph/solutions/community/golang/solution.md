# Go | Topological Sort + Dynamic Programming

**Author:** coldfirero
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-color-value-in-a-directed-graph/solutions/3398132/](https://leetcode.com/problems/largest-color-value-in-a-directed-graph/solutions/3398132/)

---

# Code\r
```\r
func largestPathValue(colors string, edges [][]int) int {\r
    n := len(colors)\r
    var (\r
        adj = make([][]int, n)\r
        dp = make([][26]int, n)\r
        inDegree = make([]int, n)\r
        zero []int\r
        nodesRemoved, max int\r
    )\r
    for _, e := range edges {\r
        from, to := e[0], e[1]\r
        adj[from] = append(adj[from], to)\r
        inDegree[to]++\r
    }\r
    for i := 0; i < n; i++ {\r
        if inDegree[i] == 0 {\r
            zero = append(zero, i)\r
        }\r
    }\r
    for ; len(zero) > 0; zero = zero[1:] {\r
        k := zero[0]\r
        c := colors[k] - 'a'\r
        nodesRemoved++\r
        dp[k][c]++\r
        if max < dp[k][c] {\r
            max = dp[k][c]\r
        }\r
        for _, v := range adj[k] {\r
            inDegree[v]--\r
            if inDegree[v] == 0 {\r
                zero = append(zero, v)\r
            }\r
            for c := 0; c < 26; c++ {\r
                if dp[v][c] < dp[k][c] {\r
                    dp[v][c] = dp[k][c]\r
                }\r
            }\r
        }\r
    }\r
    if nodesRemoved < n {\r
        return -1\r
    }\r
    return max\r
}\r
```