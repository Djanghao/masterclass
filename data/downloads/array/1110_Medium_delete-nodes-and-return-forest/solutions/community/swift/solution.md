# Swift Simple and Easy to Understand Solution

**Author:** jfrsheriff
**Votes:** 2
**Link:** [https://leetcode.com/problems/delete-nodes-and-return-forest/solutions/2415904/](https://leetcode.com/problems/delete-nodes-and-return-forest/solutions/2415904/)

---

```

class Solution {    
    var returningNode : [TreeNode?] = []
    func delNodes(_ root: TreeNode?, _ to_delete: [Int]) -> [TreeNode?] {
        guard let root = root else {return []}
        deleteNodes(root : root, delete : Set(to_delete) , isRoot : true)  
        return returningNode
    }
    
    func deleteNodes(root : TreeNode?, delete : Set<Int> , isRoot : Bool) -> TreeNode? {
        guard let root = root else {return nil}
        let shouldDeleteNode = delete.contains(root.val)
        if isRoot && !shouldDeleteNode {
            returningNode.append(root)
        }
        root.left =  deleteNodes(root : root.left, delete : delete , isRoot : shouldDeleteNode) 
        root.right =  deleteNodes(root : root.right, delete : delete , isRoot : shouldDeleteNode) 
        return shouldDeleteNode ? nil : root
    }
}
```