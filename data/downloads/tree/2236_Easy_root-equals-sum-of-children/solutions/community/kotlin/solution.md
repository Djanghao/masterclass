# Safest 1 line kotlin solution(All edge cases covered)

**Author:** anotherAutodidactDev
**Votes:** 3
**Link:** [https://leetcode.com/problems/root-equals-sum-of-children/solutions/2393335/](https://leetcode.com/problems/root-equals-sum-of-children/solutions/2393335/)

---

```class Solution {
    fun checkTree(root: TreeNode?): Boolean {
        return if((root?.`val` ?: 0) == (root?.right?.`val` ?: 0) + (root?.left?.`val` ?: 0)) true else false
    }
}