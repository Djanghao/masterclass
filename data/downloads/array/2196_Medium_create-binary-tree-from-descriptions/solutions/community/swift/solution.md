# Swift🫧Clean

**Author:** OrchidHunter
**Votes:** 2
**Link:** [https://leetcode.com/problems/create-binary-tree-from-descriptions/solutions/5478242/](https://leetcode.com/problems/create-binary-tree-from-descriptions/solutions/5478242/)

---

**Good Interview Answer (accepted answer)**
```
class Solution {
    func createBinaryTree(_ descriptions: [[Int]]) -> TreeNode? {
        var index = [Int:TreeNode]()
        var children = Set<Int>()
        let keyPaths = [\\TreeNode.right, \\TreeNode.left]
        
        for node in descriptions {
            let (parent, child, keyPath) = (node[0], node[1], keyPaths[node[2]])
            index[parent] = index[parent] ?? TreeNode(parent)
            index[child] = index[child] ?? TreeNode(child)
            index[parent]![keyPath: keyPath] = index[child]!
            children.insert(child)
        }
    
        return index.values.first {!children.contains($0.val)}        
    }
}
```