# Golang, 0ms, recursive

**Author:** karbayev
**Votes:** 1
**Link:** [https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/solutions/295498/](https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/solutions/295498/)

---

```
func findSecondMinimumValue(root *TreeNode) int {
    // The root node always contains the minimum value
    // (due to the special BST definition)
    return helper(root, root.Val, -1)
}

func helper(node *TreeNode, min, second int) int {
    if node.Left == nil {
        // If the current node is a leaf node and it's value is not equal to minimum
        // then check if it's less than the current second minimum value
        if node.Val != min && (node.Val < second || second == -1) {
            return node.Val
        }
        return second
    }
    // Since the current node has subnodes, get their second minimum values
    // and return the one that's not equal to -1 or the least of them if both are not -1
    l := helper(node.Left, min, second)
    r := helper(node.Right, min, second)
    if l == -1 {
        return r
    }
    if r == -1 || l < r {
        return l
    }
    return r
}
```