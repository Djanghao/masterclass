# Swift - 100% Faster

**Author:** osama10
**Votes:** 0
**Link:** [https://leetcode.com/problems/inorder-successor-in-bst-ii/solutions/1477117/](https://leetcode.com/problems/inorder-successor-in-bst-ii/solutions/1477117/)

---

```
class Solution {
  func inorderSuccessor(_ node: Node?) -> Node? {
    guard let root = node else { return nil }
    
    if let successor = checkLeftTree(root.right) {
        return successor
    }
    
    var current = node
    var parent = node?.parent
    
    while current != nil && parent != nil {
        if current!.val < parent!.val {
            return parent
        }
       
        current = parent
        parent = current?.parent

    }
    
    return nil
}

func checkLeftTree(_ root: Node?) -> Node? {
    guard let root = root else { return nil }
    if root.left == nil { return root }
    return checkLeftTree(root.left)
}

}
```