# Swift and Java BFS Solutions

**Author:** danilovdev
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-nearest-right-node-in-binary-tree/solutions/3435541/](https://leetcode.com/problems/find-nearest-right-node-in-binary-tree/solutions/3435541/)

---

1. Swift Solution

```
class Solution {
    func findNearestRightNode(_ root: TreeNode?, _ u: TreeNode?) -> TreeNode? {
        guard let root = root else { return nil }
        var queue: [TreeNode] = [root]
        while (!queue.isEmpty) {
            let size = queue.count
            var target: TreeNode?
            for i in 0..<size { 
                let current = queue.removeFirst()
                if (target != nil) {
                    return current
                }
                if (current.val == u!.val) {
                    target = current
                }
                if let left = current.left {
                    queue.append(left)
                }
                if let right = current.right {
                    queue.append(right)
                }
            }
        }
        return nil
    }
}
```

2. Java Solution

```
class Solution {
    public TreeNode findNearestRightNode(TreeNode root, TreeNode u) {
        if (root == null) { return null; }
        Queue<TreeNode> queue = new LinkedList();
        queue.offer(root);
        while (!queue.isEmpty()) {
            int size = queue.size();
            TreeNode target = null;
            for (int i = 0; i < size; i++) {
                TreeNode current = queue.poll();
                if (target != null) {
                    return current;
                }
                if (current.val == u.val) {
                    target = current;
                }
                if (current.left != null) {
                    queue.offer(current.left);
                }
                if (current.right != null) {
                    queue.offer(current.right);
                }
            }
        }
        return null;
    }
}
```
