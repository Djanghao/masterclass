# O(N) O(1)

**Author:** dspasibenko
**Votes:** 1
**Link:** [https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/solutions/3952598/](https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/solutions/3952598/)

---

# Intuition

# Approach

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(1)

# Code
```
/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Left *Node
 *     Right *Node
 * }
 */

func treeToDoublyList(root *Node) *Node {
    if root == nil {
        return nil 
    }
    l, r := root.Left, root.Right
    root.Left, root.Right = root, root
    h := treeToDoublyList(l)
    h = attach(h, root)
    h = attach(h, treeToDoublyList(r))
    return h
}

func attach(head, next *Node) *Node {
    if next == nil {
        return head
    }
    if head == nil {
        return next
    }
    head.Left.Right, next.Left.Right = next, head
    next.Left, head.Left = head.Left, next.Left
    return head
}
```