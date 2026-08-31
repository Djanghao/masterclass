# Swift DFS with Dictionary

**Author:** aktepe
**Votes:** 1
**Link:** [https://leetcode.com/problems/clone-binary-tree-with-random-pointer/solutions/1872039/](https://leetcode.com/problems/clone-binary-tree-with-random-pointer/solutions/1872039/)

---

```
class Solution {
    var map = [Node: NodeCopy]()
    
    func copyRandomBinaryTree(_ root: Node?) -> NodeCopy? {
        guard let root = root else {
            return nil
        }
        if let copy = map[root] {
            return copy
        }
        var nodeCopy = NodeCopy(root.val)
        map[root] = nodeCopy
        nodeCopy.left = copyRandomBinaryTree(root.left)
        nodeCopy.right = copyRandomBinaryTree(root.right)
        nodeCopy.random = copyRandomBinaryTree(root.random)
        return nodeCopy
    }
}
```