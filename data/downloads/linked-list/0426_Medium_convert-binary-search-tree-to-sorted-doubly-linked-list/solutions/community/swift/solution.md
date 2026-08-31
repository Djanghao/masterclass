# Swift - using in order traversal

**Author:** osama10
**Votes:** 1
**Link:** [https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/solutions/2008031/](https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/solutions/2008031/)

---

```
class Solution {
    var head: Node?
    var tail: Node?

    func treeToDoublyList(_ root: Node?) -> Node? {
       
        makeList(root)
    
        head?.left = tail
        tail?.right = head
        
        return head
    }
    
    
    func makeList(_ root: Node?) { 
        guard let root = root else { return }
        
        makeList(root.left)
        
        if tail != nil {
            root.left = tail
            tail?.right = root
        } else {
            head = root
        }
        
        tail = root
        makeList(root.right)
    }
}
```