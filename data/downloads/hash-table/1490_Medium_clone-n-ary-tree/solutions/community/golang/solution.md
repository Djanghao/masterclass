# Short and concise golang solution

**Author:** zhangrz2
**Votes:** 1
**Link:** [https://leetcode.com/problems/clone-n-ary-tree/solutions/721922/](https://leetcode.com/problems/clone-n-ary-tree/solutions/721922/)

---

```
/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Children []*Node
 * }
 */

func cloneTree(root *Node) *Node {
    if root == nil {
        return nil
    }
    copiedNode := Node{Val : root.Val}
    for _, next := range root.Children {
        copiedNode.Children = append(copiedNode.Children, cloneTree(next)) 
    }
    return &copiedNode
}
```