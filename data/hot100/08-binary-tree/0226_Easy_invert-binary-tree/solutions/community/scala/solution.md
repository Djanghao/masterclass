# Scala, idiomatic solution using `Option`

**Author:** acamillo
**Votes:** 7
**Link:** [https://leetcode.com/problems/invert-binary-tree/solutions/1290192/](https://leetcode.com/problems/invert-binary-tree/solutions/1290192/)

---

```
    def invertTree(root: TreeNode): TreeNode = 
        Option(root).map(node => TreeNode(node.value, invertTree(node.right), invertTree(node.left))).orNull
```