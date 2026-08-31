# Go DFS with DP solution

**Author:** sitleon
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-flips-in-binary-tree-to-get-result/solutions/5165898/](https://leetcode.com/problems/minimum-flips-in-binary-tree-to-get-result/solutions/5165898/)

---



# Complexity
- Time complexity: O(n)

- Space complexity: Since each node with have own [2]int{}, so O(n).

# Code
```
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func minimumFlips(root *TreeNode, x bool) int {
    mem := map[int][2]int{}
    if dfs(mem, root, 1); x {
        return mem[1][1]
    }
    return mem[1][0]
}

func dfs(mem map[int][2]int, root *TreeNode, i int) {
    if root == nil {
        return
    }
    l, r := i<<1, i<<1+1
    dfs(mem, root.Left, l)
    dfs(mem, root.Right, r)
    
    switch v := root.Val; v {
    case 0, 1:
        mem[i] = [2]int{0^v, 1^v}
    case 2, 3:
        rmem, k := [2]int{}, v & 1
        rmem[k] = mem[l][k]+mem[r][k]
        rmem[1^k] = min(mem[l][1^k],mem[r][1^k])
        mem[i] = rmem
    case 4:
        mem[i] = [2]int{
            min(mem[l][0]+mem[r][0], mem[l][1]+mem[r][1]),
            min(mem[l][0]+mem[r][1], mem[l][1]+mem[r][0]),
        }
    case 5:
        nxt := l
        if root.Left == nil {
            nxt = r
        }
        mem[i] = [2]int{mem[nxt][1], mem[nxt][0]}
    }
}
```