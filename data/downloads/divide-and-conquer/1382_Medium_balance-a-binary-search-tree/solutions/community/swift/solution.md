# [Swift] inorder + dfs - clean code

**Author:** GV1506
**Votes:** 3
**Link:** [https://leetcode.com/problems/balance-a-binary-search-tree/solutions/539763/](https://leetcode.com/problems/balance-a-binary-search-tree/solutions/539763/)

---

We create a sorted array by using inorder traversal
```
class Solution {
    func balanceBST(_ root: TreeNode?) -> TreeNode? {
        var arr = [TreeNode]()
        
        func inorder(_ node: TreeNode?) {
            guard let node = node else { return }
            inorder(node.left)
            arr.append(node)
            inorder(node.right)
        }
        
        func build(_ nodes: [TreeNode], _ start: Int, _ end: Int) -> TreeNode? {
            if start > end { return nil }
  
            let mid = (start + end) / 2
            var node = nodes[mid] 
            
            node.left = build(nodes, start, mid - 1)
            node.right = build(nodes, mid + 1, end)

            return node
        }
        
        inorder(root)
        return build(arr, 0, arr.count-1)
        
    }
}
```