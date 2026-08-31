# Go, using BST properties

**Author:** viktor_komarov
**Votes:** 0
**Link:** [https://leetcode.com/problems/inorder-successor-in-bst-ii/solutions/4148487/](https://leetcode.com/problems/inorder-successor-in-bst-ii/solutions/4148487/)

---

# Code
```
func inorderSuccessor(node *Node) *Node {
    if node.Right != nil {
        next := node.Right
        for next.Left != nil {
            next = next.Left
        }
        return next
    }

    if node.Parent == nil {
        return nil
    }
    parent := node.Parent
    if parent.Left == node {
        return parent
    }

    for parent.Parent != nil {
        grandpa := parent.Parent
        if grandpa.Left == parent {
            return grandpa
        }
        parent = grandpa
    }
    return nil
}
```