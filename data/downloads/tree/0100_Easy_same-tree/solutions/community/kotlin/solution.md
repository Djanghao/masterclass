# [Kotlin] Just 2 lines

**Author:** dzmtr
**Votes:** 9
**Link:** [https://leetcode.com/problems/same-tree/solutions/1082995/](https://leetcode.com/problems/same-tree/solutions/1082995/)

---

```
fun isSameTree(p: TreeNode?, q: TreeNode?): Boolean {
    if (p == null && q == null) return true
	
    return (p?.`val` == q?.`val`) && isSameTree(p?.left, q?.left) && isSameTree(p?.right, q?.right)
}
```