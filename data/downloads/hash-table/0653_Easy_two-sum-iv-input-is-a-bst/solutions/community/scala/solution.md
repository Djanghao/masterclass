# Scala recursive solution

**Author:** KuangYuan
**Votes:** 1
**Link:** [https://leetcode.com/problems/two-sum-iv-input-is-a-bst/solutions/106108/](https://leetcode.com/problems/two-sum-iv-input-is-a-bst/solutions/106108/)

---

```
object Solution {
    def findTarget(root: TreeNode, k: Int): Boolean = {
        val values = scala.collection.mutable.Set[Int]()
        
        helper(root, k, values)
    }
    
    def helper(node: TreeNode, k: Int, values: scala.collection.mutable.Set[Int]): Boolean = {
        node match {
            case n if n == null => false
            case s if values.contains(k - s.value) => true
            case r => 
                values += r.value
                helper(r.left, k, values) || helper(r.right, k, values)
        }
    }
}
```