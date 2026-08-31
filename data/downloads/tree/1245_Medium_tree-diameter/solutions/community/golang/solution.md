# Golang | 14ms | DFS solution

**Author:** gavin92
**Votes:** 0
**Link:** [https://leetcode.com/problems/tree-diameter/solutions/4764904/](https://leetcode.com/problems/tree-diameter/solutions/4764904/)

---

# Intuition
1. for a tree, if there are `n` edges it means there are `n+1` nodes.
2. It's guaranteed that the graph would be a tree, we can treat any node as the root and it would be a valid tree that can bring you the result (in fact, from the input you wouldn't know which node is root).

So we just take a random node (I take node `0`) as tree node to do DFS traversal to see what's the longest path we can build.

# Approach
DFS, for every node, check the longest path length from each of its sub trees, pick top 2 of the lengths and build up the path.

# Complexity
- Time complexity: O(n)

- Space complexity: O(n)

# Code
```
func treeDiameter(edges [][]int) int {
    neighbor := make([][]int, len(edges)+1)
    for _, e := range edges {
        neighbor[e[0]] = append(neighbor[e[0]], e[1])
        neighbor[e[1]] = append(neighbor[e[1]], e[0])
    }
      
    visited := make([]bool, len(edges)+1)
    maxLen := 0

    var dfs func(int) int
    // calculate the longest path through this node and return the single path through this node to its upper level.
    dfs = func(node int) int {
        visited[node] = true
        // pre populate 2 element in case this is a leave node.
        subTreeLens := []int{0, 0}
        for _, n := range neighbor[node] {
            if visited[n] {
                continue
            }
            subTreeLens = append(subTreeLens, dfs(n))
        }
        max1, max2 := top2Lens(subTreeLens)
        if l := max1+max2; l > maxLen {
            maxLen = l
        }
        return max1+1
    }

    dfs(0)
    return maxLen
}

func top2Lens(lens []int) (int, int) {
    res1, res2 := lens[0], lens[1]
    for _, num := range lens[2:] {
        if num > res1 {
            res1, res2 = num, res1
        } else if num > res2 {
            res2 = num
        }
    }
    return res1, res2
}
```