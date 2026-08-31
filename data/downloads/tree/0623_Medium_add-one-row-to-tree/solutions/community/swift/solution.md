# Swift recursive solution

**Author:** yamironov
**Votes:** 3
**Link:** [https://leetcode.com/problems/add-one-row-to-tree/solutions/1037523/](https://leetcode.com/problems/add-one-row-to-tree/solutions/1037523/)

---

Swift recursive solution
```
class Solution {
    func addOneRow(_ root: TreeNode?, _ v: Int, _ d: Int) -> TreeNode? {
        guard let root = root else { return nil }
        switch d {
        case 1:
            let newNode = TreeNode(v)
            newNode.left = root
            return newNode
        case 2:
            let newLeftNode = TreeNode(v), newRightNode = TreeNode(v)
            newLeftNode.left = root.left
            newRightNode.right = root.right
            root.left = newLeftNode
            root.right = newRightNode
            return root
        default:
            addOneRow(root.left, v, d - 1)
            addOneRow(root.right, v, d - 1)
            return root
        }
    }
}
```