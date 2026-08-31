# kotlin - shift left of bits

**Author:** 2pac_shakur
**Votes:** 3
**Link:** [https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/solutions/754275/](https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/solutions/754275/)

---

```
    private var sum = 0
    fun sumRootToLeaf(root: TreeNode?): Int {
        if (root == null) return sum
        paths(root, root.`val`)
        return sum
    }
    
    private fun paths(root: TreeNode, path: Int) {
        if (root.left == null && root.right == null) { // we have reached a leaf
            sum += path
            return
        }
        root.left?.let {
            val leftPath = (path shl 1) + it.`val` // shift left the current path and add the left node value
            paths(it, leftPath)
        }
        root.right?.let {
            val rightPath = (path shl 1) + it.`val`
            paths(it, rightPath)
        }
    }
```