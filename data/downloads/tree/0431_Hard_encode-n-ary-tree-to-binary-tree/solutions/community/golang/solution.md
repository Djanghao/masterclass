# Go DFS, first child to right, all peers to left

**Author:** bunnycode
**Votes:** 0
**Link:** [https://leetcode.com/problems/encode-n-ary-tree-to-binary-tree/solutions/3693691/](https://leetcode.com/problems/encode-n-ary-tree-to-binary-tree/solutions/3693691/)

---

# Intuition
My original intuition was to use the TreeNode as a processing queue, shown [here](https://leetcode.com/problems/encode-n-ary-tree-to-binary-tree/solutions/3693592/go-using-treenode-as-a-data-queue-full-explanation-given/). After reading others' solutions in different languages, I found this solution much more efficient and the code is cleaner.

# Approach

Essentially, revisiting the first problem, we are given an Nary tree:
```
    1
   /|\\
  3 2 4
 /\\
5  6
```
We can just build a TreeNode where Left is always peers and Right is always children:
```
  1
   \\
    3
   / \\
  2   5
 /   /
4   6
```
This TreeNode (above) tell us that the root is 1. It has three children: 3, 2, 4. Nodes 2 & 4 do not have children (no Right branching), but node 3 has two: 5 & 6.

# Code
```
/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Children []*Node
 * }
 */

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

type Codec struct {}

func Constructor() *Codec { return &Codec{} }

func (c *Codec) encode(root *Node) *TreeNode {
    if root == nil { return nil }

    var dfsEncode func(*Node) *TreeNode
    dfsEncode = func(n *Node) *TreeNode {
        res := &TreeNode{ Val: n.Val }

        var chPtr *TreeNode
        for i, ch := range n.Children {
            if i == 0 {
                // first one goes Right (children)
                res.Right = dfsEncode(ch)
                chPtr = res.Right
            } else {
                // all the rest go Left (peers of that first child)
                chPtr.Left = dfsEncode(ch)
                chPtr = chPtr.Left
            }
        }
        return res
    }
    return dfsEncode(root)
}

func (c *Codec) decode(root *TreeNode) *Node {
    if root == nil { return nil }

    var dfsDecode func(*TreeNode) *Node
    dfsDecode = func(n *TreeNode) *Node {
        res := &Node{ Val: n.Val }

        // first child is to the right
        chPtr := n.Right
        for chPtr != nil {
            res.Children = append(res.Children, dfsDecode(chPtr))
            // all peers are to the left
            chPtr = chPtr.Left
        }
        
        return res
    }
    return dfsDecode(root)
}

/**
 * Your Codec object will be instantiated and called as such:
 * obj := Constructor();
 * bst := obj.encode(root);
 * ans := obj.decode(bst);
 */
```