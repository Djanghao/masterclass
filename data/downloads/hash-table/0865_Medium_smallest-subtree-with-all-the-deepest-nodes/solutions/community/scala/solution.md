# scala dfs

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/solutions/3042901/](https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/solutions/3042901/)

---

# Code
```
object Solution {
  def subtreeWithAllDeepest(root: TreeNode): TreeNode = {
    val depths = Array.fill(501)(0)
    def count(node: TreeNode, depth: Int): Int = {
      if(node == null) depth
      else {
        depths(node.value) = (count(node.left, depth+1)) max (count(node.right, depth+1))
        depths(node.value)
      }
    }
    count(root,0)
    val maxDepth = depths(root.value)
    def get(node: TreeNode): TreeNode = {
      lazy val d = depths(node.value)
      lazy val ld = depths(node.left.value)
      lazy val rd = depths(node.right.value)
      (node.left, node.right) match {
        case (null,null) => node
        case (l, null) => if(d == ld)  get(l) else node
        case (null,r) => if(d == rd)  get(r) else node
        case (l,r) => {
          if(ld == rd) node
          else if(ld > rd) get(l)
          else get(r)
        }
      }
    }
    get(root)
  }
}

```