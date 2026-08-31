# Simple and concise solution ⚡⚡⚡. Use recursive algorithm

**Author:** king77nt54321
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/solutions/5510105/](https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/solutions/5510105/)

---



# Code
```
class FindElements {
  TreeNode? root;
  Set<int> values = {};

  FindElements(TreeNode? root) {
    this.root = root;
    if (root != null) {
      recoverTree(root, 0);
    }
  }

  void recoverTree(TreeNode node, int value) {
    node.val = value;
    values.add(value);
    if (node.left != null) {
      recoverTree(node.left!, 2 * value + 1);
    }
    if (node.right != null) {
      recoverTree(node.right!, 2 * value + 2);
    }
  }

  bool find(int target) {
    return values.contains(target);
  }
}
```