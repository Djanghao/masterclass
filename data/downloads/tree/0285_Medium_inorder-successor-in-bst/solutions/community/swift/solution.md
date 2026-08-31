# Swift, simple and sweet

**Author:** Emre_yasa
**Votes:** 1
**Link:** [https://leetcode.com/problems/inorder-successor-in-bst/solutions/1849066/](https://leetcode.com/problems/inorder-successor-in-bst/solutions/1849066/)

---



    func inorderSuccessor(_ root: TreeNode?, _ p: TreeNode?) -> TreeNode? {
        var successor: TreeNode?
        var current = root
        while current != nil {
            if current!.val > p!.val {
                successor = current
                current = current?.left
            } else {
                current = current?.right
            }
        }
        return successor
    }
