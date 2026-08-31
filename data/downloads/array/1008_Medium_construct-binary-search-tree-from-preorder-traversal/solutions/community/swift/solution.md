# Swift - 4ms

**Author:** 0rt
**Votes:** 2
**Link:** [https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/solutions/588998/](https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/solutions/588998/)

---

```
class Solution {
    func bstFromPreorder(_ preorder: [Int]) -> TreeNode? {
        guard !preorder.isEmpty else { return nil }
        var newRoot: TreeNode? = nil
        for item in preorder {
            push(item, &newRoot)
        }
        return newRoot
    }
    
    func push(_ item: Int, _ root: inout TreeNode?) {
        guard var root1 = root else {
            root = TreeNode(item)
            return
        }
        if item > root1.val {
            push(item, &root1.right)
        } else if item < root1.val {
            push(item, &root1.left)
        }
    }
}
```