# Swift -  Best Memory Usage

**Author:** anter94
**Votes:** 0
**Link:** [https://leetcode.com/problems/clone-n-ary-tree/solutions/2723842/](https://leetcode.com/problems/clone-n-ary-tree/solutions/2723842/)

---

```
class Solution {
    func cloneTree(_ root: Node?) -> Node? {
        guard let root = root else { return nil }
        var copied = Node(root.val)
		
        dfs(root, copied)
        
        return copied
    
    }
    
    func dfs(_ root: Node, _ copyRoot: Node) {
        for child in root.children {
            let copied = Node(child.val)
            copyRoot.children.append(copied)
            dfs(child, copied)
        }
        
    }
}
```
