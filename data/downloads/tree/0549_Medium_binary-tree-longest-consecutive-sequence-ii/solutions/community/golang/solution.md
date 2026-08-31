# Post-order traversal with DFS

**Author:** bachngocson0812
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-longest-consecutive-sequence-ii/solutions/4956141/](https://leetcode.com/problems/binary-tree-longest-consecutive-sequence-ii/solutions/4956141/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
For each node, longest consecutive sequence which include that node is longest increasing end at node plus longest decreasing end at node minus one, so we will find that value for every node 

# Approach
<!-- Describe your approach to solving the problem. -->
`dfs` function to return longest increasing sequence and longest decreasing sequence ending at current node

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$ for recursion stack
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

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
func longestConsecutive(root *TreeNode) int {
    var ans int
    dfs(root, &ans)
    return ans
}

// return longest increasing and decreasing start from root node
func dfs(root *TreeNode, ans *int) (int, int) { 
    if root == nil {
        return 0, 0
    }

    var il, dl, ir, dr int

    il, dl = dfs(root.Left, ans)
    ir, dr = dfs(root.Right, ans)

    i := 1
    if root.Left != nil && root.Left.Val + 1 == root.Val {
        i = max(i, il + 1)
    }
    if root.Right != nil && root.Right.Val + 1 == root.Val {
        i = max(i, ir + 1)
    }

    d := 1
    if root.Left != nil && root.Left.Val == root.Val + 1 {
        d = max(d, dl + 1)
    }
    if root.Right != nil && root.Right.Val == root.Val + 1 {
        d = max(d, dr + 1)
    }

    *ans = max(*ans, i+d-1)

    return i, d
}
```