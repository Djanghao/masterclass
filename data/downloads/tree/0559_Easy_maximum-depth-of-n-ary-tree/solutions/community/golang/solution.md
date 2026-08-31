# Go: Recursive solution

**Author:** 16yuki0702
**Votes:** 7
**Link:** [https://leetcode.com/problems/maximum-depth-of-n-ary-tree/solutions/545916/](https://leetcode.com/problems/maximum-depth-of-n-ary-tree/solutions/545916/)

---

Runtime: 0 ms, faster than 100.00% of Go online submissions for Maximum Depth of N-ary Tree.
Memory Usage: 3.3 MB, less than 100.00% of Go online submissions for Maximum Depth of N-ary Tree.
```
/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Children []*Node
 * }
 */

func maxDepth(root *Node) int {
    if root == nil {
        return 0
    }
    m := 1
    for _, v := range root.Children {
        m = max(m, maxDepth(v)+1)
    }
    return m
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```