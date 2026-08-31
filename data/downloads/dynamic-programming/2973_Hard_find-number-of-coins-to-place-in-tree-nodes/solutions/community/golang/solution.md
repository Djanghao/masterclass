# Golang Solution ||| Beats 100% ||| With explanations!👍

**Author:** https_whxyan
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-number-of-coins-to-place-in-tree-nodes/solutions/4447401/](https://leetcode.com/problems/find-number-of-coins-to-place-in-tree-nodes/solutions/4447401/)

---

# Intuition
Of course, this is a graph + DFS construction problem.

# Approach
We build a graph as usual - **graph is an object of map type with []int key. In each graph key (v) we store all vertices to which we can go from the vertex v**

The graph is constructed as follows: 
```
    graph := make(map[int][]int)  
    for _, egde := range edges { 
        graph[egde[0]] = append(graph[egde[0]], egde[1]) 
        graph[egde[1]] = append(graph[egde[1]], egde[0]) 
    } 
```
  

Let's also introduce the use array, the ans array. Use will denote the vertices we have been to. This is done so that from vertex v we don't go to the parent. And ans - here we will store the answers 

# DFS 

**Why not BFS?** Because we need an answer for a subtree, not for a line of vertices with the same depth.
What do we return in DFS?

**Let's for each DFS, we will import a list of 3 minimum negative cost vertices for the subtree and a list of 3 maximum positive cost vertices for the subtree.**

I will call the list of negative stabilities otr, positive stabilities pol
**Maximal product of storing such an array:** $$max(otr[0] * otr[1] * pol[0], pol[1] * pol[2] * pol[3]).$$

**For each subarray V we will recognize its subarrays otr and pol. Then add these arrays to ours from the DFS function, sort them as needed, and discard unnecessary ones.** In this way, we save memory and the time needed for sorting.

Before knowing the answer for ans[v] we need to proify the lengths of the otr and pol arrays to prevent errors. 

**If my solution was helpful, don't forget to upvote \uD83D\uDDA4**

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
func max(a, b int64) int64 {
    if a > b {
        return a
    }
    return b
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}
 
func dfs(v int, graph *map[int][]int, use *[]bool, cost *[]int, ans *[]int64) [][]int64 {
    // We say the vertex can no longer be used.
    (*use)[v] = true
    pol := []int64{}
    otr := []int64{}
    // Add cost[v] to the desired array
    if (*cost)[v] < 0 {
        otr = append(otr, int64((*cost)[v]))
    } else {
        pol = append(pol, int64((*cost)[v]))
    }
    for _, nextV := range (*graph)[v] {
        if !(*use)[nextV] {
            // Define new array otr and pol
            ansNextV := dfs(nextV, graph, use, cost, ans)
            pol = append(pol, ansNextV[0]...)
            sort.Slice(pol, func(i, j int) bool {
                return pol[i] >= pol[j]
            })
            pol = pol[:min(3, len(pol))]
            otr = append(otr, ansNextV[1]...)
            sort.Slice(otr, func(i, j int) bool {
                return otr[i] <= otr[j]
            })
            otr = otr[:min(3, len(otr))]
        } 
    }
    // If lens of otr and pol arrays
    if len(pol) + len(otr) < 3 {
        (*ans)[v] = 1
    } else {
        var mxProiz int64 
        if len(pol) == 0 {
            mxProiz = otr[0] * otr[1] * otr[2]
        } else if len(otr) == 0 {
            mxProiz = pol[0] * pol[1] * pol[2]
        } else if len(otr) == 1 && len(pol) == 2 {
            mxProiz = otr[0] * pol[0] * pol[1]
        } else if len(otr) >= 2 && len(pol) < 3 {
            mxProiz = otr[0] * otr[1] * pol[0]
        } else if len(otr) == 1 && len(pol) >= 3 {
            mxProiz = pol[0] * pol[1] * pol[2]
        } else {
            potentialMxProiz1 := otr[0] * otr[1] * pol[0]
            potentialMxProiz2 := pol[0] * pol[1] * pol[2]
            mxProiz = max(potentialMxProiz1, potentialMxProiz2)
        }
        (*ans)[v] = mxProiz
    }
    // Define the answer for ans[v]
    if (*ans)[v] < 0 {
        (*ans)[v] = 0
    }
    return [][]int64{pol, otr}
}


func placedCoins(edges [][]int, cost []int) []int64 {
    n := len(cost)
    ans := make([]int64, n)
    // Build the graph
    graph := make(map[int][]int) 
    for _, egde := range edges {
        graph[egde[0]] = append(graph[egde[0]], egde[1])
        graph[egde[1]] = append(graph[egde[1]], egde[0])
    }
    use := make([]bool, n)
    // Start DFS
    dfs(0, &graph, &use, &cost, &ans)
    return ans
}
```
![Upvote Please.jpeg](./images/0.jpeg)
