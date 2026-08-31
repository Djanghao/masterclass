# Elegant Swift solution by conforming to Equatable

**Author:** Hak0suka
**Votes:** 23
**Link:** [https://leetcode.com/problems/symmetric-tree/solutions/878795/](https://leetcode.com/problems/symmetric-tree/solutions/878795/)

---

```
class Solution {
    func isSymmetric(_ root: TreeNode?) -> Bool {
		root?.left == root?.right
	}
}

extension TreeNode: Equatable {
    public static func ==(lhs: TreeNode, rhs: TreeNode) -> Bool {
        lhs.val == rhs.val && lhs.left == rhs.right && lhs.right == rhs.left
    }
}
```