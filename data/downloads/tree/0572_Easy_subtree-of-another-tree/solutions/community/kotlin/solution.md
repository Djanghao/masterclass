# Kotlin: O(m * n) time and O(n) time

**Author:** kotlinvim
**Votes:** 2
**Link:** [https://leetcode.com/problems/subtree-of-another-tree/solutions/982678/](https://leetcode.com/problems/subtree-of-another-tree/solutions/982678/)

---


    fun isSame(s: TreeNode?, t: TreeNode?): Boolean {
        if (s == null && t == null) return true
        if (s == null || t == null) return false
        if (s.`val` != t.`val`) return false

        return isSame(s.left, t.left) &&
               isSame(s.right, t.right)
    }

    fun isSubtree(s: TreeNode?, t: TreeNode?): Boolean {
        if (isSame(s, t)) return true
        
        return s != null && (isSubtree(s.left, t) || isSubtree(s.right, t))
    }
